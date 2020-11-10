export default {
    debug: true,
    fork_mode: true,
    module: 'GatewayServer',
    CAPTCHA: '0',
    FAKE_PLAYERS: 0,
    HWID_LIMIT: 1,
    BANNED_COUNTRY_CODES: ['TR', 'GB'],
    LOCAL: {
        HOST: '0.0.0.0',
        PORT: 7001
    },
    REMOTE: {
        HOST: '138.201.58.79',
        PORT: 15779
    },
    REDIRECT: {
        AgentServer: {
            HOST: '127.0.0.1', //138.201.58.79
            PORT: 7002
        },
        DownloadServer: {
            HOST: '127.0.0.1', //138.201.58.79
            PORT: 7003
        }
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
    services: ['MSSQL'],
    middlewares: {
        client: {
            0xCAFE: 'HardwareID'
        },
        remote: {
            0xA100: 'RedirectDownload',
            0xA101: 'RewriteShardList',
            0xA102: 'LoginResponse',
            0x2322: 'AutoCaptcha'
        }
    }
};
