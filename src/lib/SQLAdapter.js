import { Sequelize, DataTypes } from 'sequelize';

class SQLAdapter {
    constructor({ host, database, username, password, dialect = 'mssql' }, models) {
        this.models = models;
        this.database = new Sequelize(
            database,
            username,
            password,
            {
                host,
                dialect,
                logging: false
            }
        );
    }

    async instance() {
        try {
            await this.database.authenticate();
            for (const key of Object.keys(this.models)) {
                this.models[key](this.database, DataTypes);
            }
            return this.database;
        } catch (error) {
            throw new Error(`Failed to retrieve SQL adapter instance!`);
        }
    }
}

export default SQLAdapter;