import Router from '@lib/Gateway';
import config from '@config/DownloadServer';

class DownloadServer {
    constructor() {
        this.module = new Router(config);
    }

    async run() {
        return this.module.start();
    }
}

export default DownloadServer;

