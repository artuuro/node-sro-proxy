import { Database } from "@config";
import { MSSQL } from "@service";

class CreateDB {
    constructor() {
        this.database = new MSSQL({
            debug: true,
            MSSQL: Database
        });
    }

    async run() {
        await this.database.connect();
        await this.database.sync();
        process.exit(0);
    }
}

export default CreateDB;
