import config from '@config/GatewayServer';
import AsyncServer from '@lib/AsyncServer';

class Gateway extends AsyncServer {
    constructor() {
        super(config);
    }
}

export default Gateway;