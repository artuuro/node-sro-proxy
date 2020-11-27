import config from '@config/Database';
import SQLAdapter from '@lib/SQLAdapter';
import * as models from '@models/gateway';
class CreateDB {
    constructor() {
        this.adapter = new SQLAdapter(config, models);
    }

    async run() {
        try {
            const instance = await this.adapter.instance();
            await instance.sync({ force: true });
            console.log(`Database Recreated`);
            process.exit(0);
        } catch (e) {
            throw new Error(e);
        }
    }
}

export default CreateDB;
