import Proxy from '@core/Proxy';
import config from '@config/GatewayServer';

class GatewayServer {
    constructor() {
        this.module = new Proxy(config);
    }

    async run() {
        return this.module.start();
    }
}

export default GatewayServer;