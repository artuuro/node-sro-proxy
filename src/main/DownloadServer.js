import Proxy from "@core/Proxy";
import { DownloadServer as config } from "@config";

class DownloadServer {
    constructor() {
        this.module = new Proxy(config);
    }

    async run() {
        return this.module.start();
    }
}

export default DownloadServer;

