import Proxy from '@core/Proxy';
import config from '@config/AgentServer';

class AgentServer {
    constructor() {
        this.module = new Proxy(config);
    }

    async run() {
        return this.module.start();
    }
}

export default AgentServer;