import Router from '@lib/Gateway';
import config from '@config/AgentServer';

class AgentServer {
    constructor() {
        this.module = new Router(config);
    }

    async run() {
        return this.module.start();
    }
}

export default AgentServer;