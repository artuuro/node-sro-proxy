import Proxy from '@core/Proxy';
import { GatewayServer as config, Database } from '@config';

class GatewayServer {
    constructor() {
        this.module = new Proxy({
            ...config,
            MSSQL: Database
        });
    }

    async run() {
        return this.module.start();
    }
}

export default GatewayServer;