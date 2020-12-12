import axios from 'axios';
import config from '@config/API';

export default Object.keys(config).reduce((obj, module) => ({
    ...obj,
    [module]: axios.create({
        baseURL: `${config[module].host}:${config[module].port}/`,
        headers: { token: config[module].auth }
    })
}), {});