import { Sequelize, DataTypes } from 'sequelize';
import * as models from '@model';

class Adapter {
    constructor({ host, database, username, password, dialect = 'mssql' }) {
        this.database = new Sequelize(
            database,
            username,
            password,
            {
                host,
                dialect
            }
        );
    }

    async instance() {
        try {
            await this.database.authenticate();
            for (const key of Object.keys(models)) {
                models[key](this.database, DataTypes);
            }
            return this.database;
        } catch (error) {
            throw new Error(`Failed to retrieve SQL adapter instance!`);
        }
    }
}

export default Adapter;