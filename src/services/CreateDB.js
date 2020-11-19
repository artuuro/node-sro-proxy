import config from '@config/Database';
import Adapter from '@lib/SQLAdapter';

class CreateDB {
    constructor() {
        this.adapter = new Adapter(config);
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
