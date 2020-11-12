import config from '@config/Database';
import Adapter from './Adapter';
import { parentPort } from 'worker_threads';

const database = new Adapter(config);

(async () => {
    const instance = await database.instance();
    const { Client } = instance.models;



    parentPort.on('message', query => console.log(query));
})();

