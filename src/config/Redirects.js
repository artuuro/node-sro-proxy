export default {
    // AgentServer1
    ':13': {
        host: process.env.REDIRECT_AGENT_IP || '127.0.0.1',
        port: process.env.REDIRECT_AGENT_PORT || 8002,
    },
    // DownloadServer
    '138.201.58.79:16002': { // <-- IP FROM
        host: process.env.REDIRECT_DOWNLOAD_IP || '127.0.0.1', // <-- IP TO
        port: process.env.REDIRECT_DOWNLOAD_PORT || 8003, //<-- PORT TO
    },
};