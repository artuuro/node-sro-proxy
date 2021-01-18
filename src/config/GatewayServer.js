export default {
    module: process.env.MODULE || 'AgentServer',
    CAPTCHA: process.env.LOGIN_CAPTCHA || '0',
    FAKE_PLAYERS: process.env.FAKE_PLAYERS || 0,
    LIMITS: {
        IP: process.env.IP_LIMIT || 20,
        HWID: process.env.HWID_LIMIT || 3,
    },
    BANNED_COUNTRY_CODES: process.env.BLOCKED_COUNTRIES ? process.env.BLOCKED_COUNTRIES.split(',') : [],
    LOCAL: {
        HOST: process.env.BIND_IP || '0.0.0.0',
        PORT: process.env.BIND_PORT || 8001,
    },
    REMOTE: {
        HOST: process.env.REMOTE_IP || '138.201.58.79',
        PORT: process.env.REMOTE_PORT || 15779,
    },
    whitelist: {
        0x2002: 'GLOBAL_PING',
        0x9000: 'GLOBAL_HANDSHAKE_ACCEPT',
        0x6100: 'PATCH_REQUEST',
        0x6101: 'SHARD_LIST_REQUEST',
        0x6102: 'LOGIN_REQUEST',
        0x6104: 'NOTICE_REQUEST',
        0x6106: 'SHARD_LIST_PING_REQUEST',
        0xCAFE: 'HWID_REGISTRATION'
    },
    middlewares: {
        client: {
            0xCAFE: 'HardwareID',
            0x6102: 'Authentication',
            0x6104: 'NoticeRequest',
        },
        remote: {
            0xA100: 'RedirectDownload',
            0xA101: 'RewriteShardList',
            0xA102: 'LoginResponse',
            0x2322: 'AutoCaptcha',
        },
    },
};
