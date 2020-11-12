import config from '@config/Database';
import Adapter from '@core/workers/Database/Adapter';

class CreateDB {
    constructor() {
        this.adapter = new Adapter(config);
    }

    async run() {
        try {
            console.log(`------SYNC------`);
            const instance = await this.adapter.instance();
            await instance.sync({ force: true });
            console.log(`------DONE------`);
            process.exit(0);
        } catch (e) {
            throw new Error(e);
        }
    }
}

export default CreateDB;
