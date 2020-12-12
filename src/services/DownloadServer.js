import config from '@config/DownloadServer';
import AsyncServer from '@lib/AsyncServer';

class Download extends AsyncServer {
    constructor() {
        super(config);
    }
}

export default Download;