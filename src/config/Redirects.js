export default {
    // AgentServer
    ':13': { // <-- IP FROM
        host: process.env.REDIRECT_AGENT_IP || '127.0.0.1', // <-- IP TO
        port: process.env.REDIRECT_AGENT_PORT || 8002, // <-- PORT TO
    },
    // ':14': { // <-- This would be another agent or download.. depends what you need.
    //     host: process.env.REDIRECT_AGENT_IP || '127.0.0.2', // <-- IP TO
    //     port: process.env.REDIRECT_AGENT_PORT || 8002, // <-- PORT TO
    // },
    // DownloadServer
    '138.201.58.79:16002': { // <-- IP FROM
        host: process.env.REDIRECT_DOWNLOAD_IP || '127.0.0.1', // <-- IP TO
        port: process.env.REDIRECT_DOWNLOAD_PORT || 8003, // <-- PORT TO
    },
};