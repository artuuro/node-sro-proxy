import Router from '@lib/Router';
import config from '@config/GatewayServer';
import dbConfig from '@config/Database';
class GatewayServer {
    constructor() {
        this.module = new Router({
            ...config,
            API: dbConfig.API
        });
    }

    async run() {
        return this.module.start();
    }
}

export default GatewayServer;