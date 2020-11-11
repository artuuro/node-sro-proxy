import Proxy from "@core/Proxy";
import { AgentServer as config, Database } from "@config";

class AgentServer {
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

export default AgentServer;