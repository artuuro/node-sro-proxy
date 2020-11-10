import { createServer } from 'net';
import child from 'child_process';
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
            this.workers[id].kill();
            delete this.workers[id];
            if (this.config.debug) console.log(`[Client]->{${id}}->(disconnected)`);
        }
    }

    async start() {
        try {
            this.server = createServer(async socket => {
                const validate = new IPValidation(socket.remoteAddress);

                const { isProxy, vpnDetected, country } = await validate.info();

                const isBlockedCountry = this.config.BANNED_COUNTRY_CODES.has(country.short);
                const isBlockedVPN = this.config.VALIDATE_VPN ? vpnDetected : false;
                const isBlockedProxy = this.config.VALIDATE_VPN ? isProxy : false;

                if (isBlockedVPN || isBlockedCountry || isBlockedProxy) {
                    console.log(`[Blocked Client]->(${socket.remoteAddress}:${socket.remotePort})->(Country (${country.short}): ${isBlockedCountry} | VPN: ${vpnDetected} | Proxy: ${isProxy})`);
                    socket.destroy();
                } else {
                    const id = this.generateUniqueId(`${socket.remoteAddress}:${socket.remotePort}`);

                    // Fork
                    this.workers[id] = child.fork(`${__dirname}\\Worker`, [JSON.stringify(this.config), id]);

                    // S -> C
                    this.workers[id].on('message', buffer => this.workers[id] && socket.write(Buffer.from(buffer)));

                    // When worker exits:
                    this.workers[id].on('disconnect', () => this.workers[id] && this.closeWorker(id));

                    // C -> S
                    socket.on('data', buffer => this.workers[id] && this.workers[id].send(buffer));

                    // Disconnect / error
                    socket.on('error', () => this.closeWorker(id));
                    socket.on('close', () => this.closeWorker(id));

                    if (this.config.debug) console.log(`[Client]->(${socket.remoteAddress}:${socket.remotePort}){${id}}->(connected)`);
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