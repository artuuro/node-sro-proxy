import * as models from '@models/proxy';
import WebServer from '@lib/WebServer';
import config from '@config/API';

class API_Proxy extends WebServer {
    constructor() {
        super(config.proxy, models);
    }
}

export default API_Proxy;
