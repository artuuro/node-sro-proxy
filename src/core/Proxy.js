import { createServer } from 'net';
import child from 'child_process';

class Proxy {
    constructor(config) {
        Object.assign(this, {
            config: {
                debug: process.env.NODE_ENV == 'development',
                ...config
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
            if (this.config.debug) console.log(`[Client]->{${id}}->(disconnected)`);
        }
    }

    async start() {
        try {
            this.server = createServer(socket => {
                // Base64 id
                const id = this.generateUniqueId(`${socket.remoteAddress}:${socket.remotePort}`);
                
                // Fork
                this.workers[id] = child.fork(`${__dirname}\\Worker`, [JSON.stringify(this.config)]);
                
                // S -> C
                this.workers[id].on('message', buffer => socket.write(Buffer.from(buffer)));

                // C -> S
                socket.on('data', buffer => this.workers[id].send(buffer));

                // Disconnect / error
                socket.on('error', () => this.closeWorker(id));
                socket.on('close', () => this.closeWorker(id));

                if (this.config.debug) console.log(`[Client]->(${socket.remoteAddress}:${socket.remotePort}){${id}}->(connected)`);
            });

            this.server.listen(this.config.LOCAL.PORT, this.config.LOCAL.HOST);

            console.log(`[${this.config.module}]->${JSON.stringify(this.config.LOCAL)}->(ready)`);
        } catch (error) {
            throw new Error(error);
        }
    }
}

export default Proxy;