export default {
  debug: true,
  module: 'GatewayServer',
  CAPTCHA: '0',
  FAKE_PLAYERS: 82,
  LOCAL: {
    HOST: "0.0.0.0",
    PORT: 7001
  },
  REMOTE: {
    HOST: "138.201.58.79",
    PORT: 15779
  },
  REDIRECT: {
    AgentServer: {
      HOST: "138.201.58.79",
      PORT: 7002
    },
    DownloadServer: {
      HOST: "138.201.58.79",
      PORT: 7003
    }
  },
  whitelist: {
    0x2002: 'CLIENT_GLOBAL_PING',
    0x9000: 'CLIENT_GLOBAL_HANDSHAKE_ACCEPT',
    0x6100: 'CLIENT_GATEWAY_PATCH_REQUEST',
    0x6101: 'CLIENT_GATEWAY_SHARD_LIST_REQUEST',
    0x6102: 'CLIENT_GATEWAY_LOGIN_REQUEST',
    0x6104: 'CLIENT_GATEWAY_NOTICE_REQUEST',
    0x6106: 'CLIENT_GATEWAY_SHARD_LIST_PING_REQUEST'
  }
};