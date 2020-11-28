export default {
    module: 'DownloadServer',
    BANNED_COUNTRY_CODES: ['TR'],
    LOCAL: {
        HOST: '0.0.0.0',
        PORT: 7003
    },
    REMOTE: {
        HOST: '138.201.58.79',
        PORT: 16002
    },
    whitelist: {
        0x2002: 'PING',
        0x9000: 'HANDSHAKE_ACCEPT',
        0x6004: 'FILE_REQUEST'
    }
};