import { createServer } from 'net';
import { fork } from 'child_process';
import IPValidation from '@lib/IPValidation';
import DataApi from '@lib/DataAPI';

const WORKERS_PATH = `${__dirname}/workers/`;

class AsyncServer {
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
            this.workers[id].kill();
            delete this.workers[id];
        }
    }

    async run() {
        try {
            this.server = createServer(async socket => {
                const { data } = await DataApi.proxy.get(`/blacklist`, {
                    params: {
                        sort: JSON.stringify(['createdAt']),
                        filter: JSON.stringify({ 
                            remote: socket.remoteAddress,
                            active: true
                        }),
                    }
                });

                const ipBlacklisted = (data && data.length);
                const validate = new IPValidation(socket.remoteAddress);
                const { isProxy, country } = validate.info();

                if (this.config.BANNED_COUNTRY_CODES.has(country.short) || isProxy) {
                    socket.destroy(); 
                } else {
                    const id = this.generateUniqueId(`${socket.remoteAddress}:${socket.remotePort}`);
                    const workerInstance = this.config.debug ? `${WORKERS_PATH}/Client/index.dev` : `${WORKERS_PATH}/Client/index`;
                    const workerConfig = JSON.stringify({
                        config: this.config,
                        info: {
                            id,
                            ip: socket.remoteAddress,
                            port: socket.remotePort
                        }
                    });

                    this.workers[id] = fork(workerInstance, [workerConfig]);

                    // S -> C
                    this.workers[id].on('message', message => {
                        switch (message.type) {
                            case 'buffer':
                                socket.write(Buffer.from(message.data));
                                break;
                            case 'disconnect':
                                this.closeWorker(id);
                                break;
                        }
                    });

                    // C -> S
                    socket.on('data', buffer => this.workers[id] && this.workers[id].send({
                        code: 1, 
                        data: buffer
                    }));

                    socket.on('error', () => this.workers[id] && this.workers[id].send({ code: 0 }));
                    
                    socket.on('close', () => {
                        if (this.workers[id]) this.workers[id].send({ code: 0 });
                    });
                }
            });

            this.server.listen(this.config.LOCAL.PORT, this.config.LOCAL.HOST);

            console.log(`[${this.config.module}]->${JSON.stringify(this.config.LOCAL)}->(ready)`);
        } catch (error) {
            throw new Error(error);
        }
    }
}

export default AsyncServer;