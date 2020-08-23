import ORM from 'sequelize';
import * as models from '@model/index';

class MSSQL {
  constructor(config) {
    this.config = config;
    this.modelNames = Object.keys(models);
    this.connection = {};
  }

  async registerModels() {
    try {
      for (const key of this.modelNames) {
        await models[key](this.connection, ORM);
        if (this.config.debug) console.log(`[DB MODEL][${key}]->(ready)`);
      }
    } catch(e) {
      throw new Error(e);
    }
  }

  async model(name) {
    try {
      return this.connection.models[name];
    } catch(e) {
      throw new Error(e);
    }
  }

  async sync() {
    try {
      await this.connection.sync({
        force: true
      });
      if (this.config.debug) console.log(`[DB SYNC]->(complete)`);
    } catch (e) {
      throw new Error(e);
    }
  }

  async connect() {
    try {
      const { HOST, INDEX, USERNAME, PASSWORD } = this.config.MSSQL;
      this.connection = new ORM(INDEX, USERNAME, PASSWORD, {
        host: HOST,
        dialect: 'mssql'
      });
      await this.connection.authenticate();
      if (this.config.debug) console.log(`[MSSQL]->(connected)`);

      await this.registerModels();
    } catch (e) {
      throw new Error(e);
    }
  }

  async attach() {
    await this.connect();
  }

  async destruct() {
    try {
      await this.pool.close();
      if (this.config.debug) console.log(`[MSSQL]->(close)`);
    } catch (e) {
      throw new Error(e);
    }
  }
}

export default MSSQL;