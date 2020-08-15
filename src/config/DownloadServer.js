export default {
  module: 'DownloadServer',
  LOCAL: {
    HOST: '0.0.0.0',
    PORT: 7003
  },
  REMOTE: {
    HOST: '138.201.58.79',
    PORT: 16002
  },
  whitelist: {
    0x2002: 'CLIENT_GLOBAL_PING',
    0x9000: 'CLIENT_GLOBAL_HANDSHAKE_ACCEPT',
    0x6004: 'CLIENT_DOWNLOAD_FILE_REQUEST'
  }
};