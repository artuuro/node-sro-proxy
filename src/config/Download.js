import opcodes from "@config/global.opcodes";

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
  packets: Object.assign(opcodes, {
    24580: "FILE_REQUEST",
    4097:  "FILE_CHUNK",
    40964:  "FILE_COMPLETE"
  })
};