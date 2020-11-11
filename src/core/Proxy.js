import { createServer } from 'net';
import { Worker } from 'worker_threads';
import IPValidation from '@core/IPValidation';

class Proxy {
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
                const validate = new IPValidation(socket.remoteAddress);
                const { isProxy, country } = validate.info();

                if ( this.config.BANNED_COUNTRY_CODES.has(country.short) || isProxy) {
                    console.log(`[Blocked Client]->(${socket.remoteAddress}:${socket.remotePort})->(Country (${country.short}): ${isBlockedCountry} | VPN: ${vpnDetected} | Proxy: ${isProxy})`);
                    socket.destroy();
                } else {
                    const id = this.generateUniqueId(`${socket.remoteAddress}:${socket.remotePort}`);
                    const workerInstance = this.config.debug ? `${__dirname}/babel-worker.js` : `${__dirname}/Worker.js`;
                    
                    this.workers[id] = new Worker(workerInstance, {
                        workerData: {
                            config: this.config, instanceId: id
                        }
                    });

                    this.workers[id].on('message', buffer => this.workers[id] && socket.write(Buffer.from(buffer)));
                    this.workers[id].on('exit', () => this.closeWorker(id));
                    this.workers[id].on('error', (e) => this.closeWorker(id));

                    socket.on('data', buffer => this.workers[id] && this.workers[id].postMessage(buffer));
                    socket.on('error', () => this.closeWorker(id));
                    socket.on('close', () => this.closeWorker(id));

                    if (this.config.debug) console.log(`[Client]->(${socket.remoteAddress}:${socket.remotePort}){${id}}->(launched)`);
                }
            });

            this.server.listen(this.config.LOCAL.PORT, this.config.LOCAL.HOST);

            console.log(`[${this.config.module}]->${JSON.stringify(this.config.LOCAL)}->(ready)`);
        } catch (error) {
            throw new Error(error);
        }
    }
}

export default Proxy;