import * as models from '@models/account';
import WebServer from '@lib/WebServer';
import config from '@config/API';

class API_Account extends WebServer {
    constructor() {
        super(config.account, models);
    }
}

export default API_Account;
