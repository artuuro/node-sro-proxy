import Proxy from '@core/Proxy';
import config from '@config/DownloadServer';

class DownloadServer {
    constructor() {
        this.module = new Proxy(config);
    }

    async run() {
        return this.module.start();
    }
}

export default DownloadServer;

