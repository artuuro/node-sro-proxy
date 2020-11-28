import Router from '@lib/Gateway';
import config from '@config/GatewayServer';
import { API } from '@config/Database';
class GatewayServer {
    constructor() {
        this.module = new Router({
            ...config,
            API
        });
    }

    async run() {
        return this.module.start();
    }
}

export default GatewayServer;