import { createServer } from 'net';
import { Worker } from 'worker_threads';
import IPValidation from '@lib/IPValidation';
import API from '@lib/helpers/API';

const WORKERS_PATH = `${__dirname}/workers/`;

class Gateway {
    constructor(config) {
        Object.assign(this, {
            config: {
                debug: process.env.NODE_ENV == 'development',
                ...config,
                BANNED_COUNTRY_CODES: new Set(config.BANNED_COUNTRY_CODES || [])
            },
            workers: {}
        });
    }

    broadcast() {

    }

    generateUniqueId(input) {
        return Buffer.from(input, 'utf-8').toString('base64');
    }

    closeWorker(id) {
        if (this.workers[id]) {
            this.workers[id].terminate();
            delete this.workers[id];
            if (this.config.debug) console.log(`[Client]->{${id}}->(closed)`);
        }
    }

    async start() {
        try {
            this.server = createServer(async socket => {
                if (this.config.debug) console.log(`[Client]->(${socket.remoteAddress}:${socket.remotePort})->(connected)`);

                const { data } = await API.get(`/blacklist`, {
                    params: {
                        sort: JSON.stringify(['createdAt']),
                        filter: JSON.stringify({ remote: socket.remoteAddress })
                    }
                });

                const ipBlacklisted = (data && data.length);
                const validate = new IPValidation(socket.remoteAddress);
                const { isProxy, country } = validate.info();

                if (this.config.BANNED_COUNTRY_CODES.has(country.short) || isProxy || ipBlacklisted) {
                    console.log(`[Blocked]->(${socket.remoteAddress}:${socket.remotePort})->(COUNTRY: (${country.short}) | PROXY: ${isProxy} | BLACKLIST: ${ipBlacklisted})`);
                    socket.destroy();
                } else {
                    const id = this.generateUniqueId(`${socket.remoteAddress}:${socket.remotePort}`);
                    const workerInstance = this.config.debug ? `${WORKERS_PATH}/Client/index.dev.js` : `${WORKERS_PATH}/Client/index.js`;

                    this.workers[id] = new Worker(workerInstance, {
                        workerData: {
                            config: this.config, 
                            info: {
                                id,
                                ip: socket.remoteAddress,
                                port: socket.remotePort
                            }
                        }
                    });

                    this.workers[id].on('message', buffer => this.workers[id] && socket.write(Buffer.from(buffer)));
                    this.workers[id].on('exit', () => this.closeWorker(id));
                    this.workers[id].on('error', (e) => this.closeWorker(id));

                    if (this.config.debug) this.workers[id].on('stdout', msg => console.log(`[${id}]>`, msg));

                    socket.on('data', buffer => this.workers[id] && this.workers[id].postMessage(buffer));
                    socket.on('error', () => this.closeWorker(id));
                    socket.on('close', () => this.closeWorker(id));
                }
            });

            this.server.listen(this.config.LOCAL.PORT, this.config.LOCAL.HOST);

            console.log(`[${this.config.module}]->${JSON.stringify(this.config.LOCAL)}->(ready)`);
        } catch (error) {
            throw new Error(error);
        }
    }
}

export default Gateway;