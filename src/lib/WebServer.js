import config from '@config/Database';
import SQLAdapter from '@lib/SQLAdapter';
import express from 'express';
import crud, { sequelizeCrud } from 'express-sequelize-crud';

class WebServer {
    constructor(serverConfig, models) {
        this.serverConfig = serverConfig;
        this.adapter = new SQLAdapter({
            ...config,
            database: this.serverConfig.database
        }, models);
    }

    async run() {
        try {
            this.database = await this.adapter.instance();
            this.app = new express();

            // LOCAL AUTH:
            // this.app.use((req, res, next) => {
            //     console.log(req.url)
            //     if (req.headers.token && req.headers.token === this.serverConfig.auth) return next();
            //     return res.status(401).json({ message: 'Not Authorized' });
            // });

            for (const name of Object.keys(this.database.models)) {
                this.app.use(crud(`/${name.toLowerCase()}`, sequelizeCrud(this.database.models[name])));
                console.log(`Model ${name} registered route: /${name.toLowerCase()}`);
            }

            this.app.use((err, req, res, next) => {
                console.log(err)
                res.status(404).json({ message: 'Not Found' });
            });

            this.app.listen(this.serverConfig.port);
            console.log(`Webserver online: ${this.serverConfig.port} (${this.serverConfig.database})`);
        } catch (e) {
            throw new Error(e);
        }
    }
}

export default WebServer;