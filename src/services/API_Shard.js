import * as models from '@models/shard';
import WebServer from '@lib/WebServer';
import config from '@config/API';

class API_Shard extends WebServer {
    constructor() {
        super(config.shard, models);
    }
}

export default API_Shard;
