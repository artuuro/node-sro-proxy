import config from '@config/AgentServer';
import AsyncServer from '@lib/AsyncServer';
class Agent extends AsyncServer {
    constructor() {
        super(config);
    }
}

export default Agent;