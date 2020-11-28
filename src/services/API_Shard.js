import config from '@config/Database';
import SQLAdapter from '@lib/SQLAdapter';
import express from 'express';
import crud, { sequelizeCrud } from 'express-sequelize-crud';
import * as models from '@models/shard';

class API {
    constructor() {
        this.adapter = new SQLAdapter({
            ...config,
            database: 'SRO_VT_SHARD'
        }, models);
    }

    async run() {
        try {
            this.database = await this.adapter.instance();
            this.app = new express();

            this.app.use(function (req, res, next) {
                console.log(req.headers.token, req.params, req.query);
                if (req.headers.token && req.headers.token === config.API.AUTH) return next();
                return res.status(401).json({ message: 'Not Authorized' });
            });

            for (const name of Object.keys(this.database.models)) {
                this.app.use(crud(`/${name.toLowerCase()}`, sequelizeCrud(this.database.models[name])));
                console.log(`Model ${name} registered route: /${name.toLowerCase()}`);
            }

            this.app.use(function (err, req, res, next) {
                res.status(404).json({ message: 'Not Found' });
            });

            this.app.listen(config.API.PORTS.API_Shard);
            console.log(`Webserver online: ${config.API.PORTS.API_Shard}`);
        } catch (e) {
            throw new Error(e);
        }
    }
}

export default API;
