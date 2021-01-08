export default {
    module: process.env.MODULE || 'DownloadServer',
    BANNED_COUNTRY_CODES: process.env.BLOCKED_COUNTRIES ? process.env.BLOCKED_COUNTRIES.split(',') : [],
    LIMITS: {
        IP: process.env.IP_LIMIT || 3,
    },
    LOCAL: {
        HOST: process.env.BIND_IP || '0.0.0.0',
        PORT: process.env.BIND_PORT || 8003
    },
    REMOTE: {
        HOST: process.env.REMOTE_IP || '138.201.58.79',
        PORT: process.env.REMOTE_PORT || 16002
    },
    middlewares: {
        client: {},
        remote: {},
    },
    whitelist: {
        0x2002: 'PING',
        0x9000: 'HANDSHAKE_ACCEPT',
        0x6004: 'FILE_REQUEST'
    }
};