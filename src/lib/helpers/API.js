import axios from 'axios';
import config from '@config/Database';

const { HOST, PORT, AUTH } = config.API;

const API = axios.create({
    baseURL: `${HOST}:${PORT}`,
    timeout: 500,
    headers: { token: AUTH }
});

export default API;