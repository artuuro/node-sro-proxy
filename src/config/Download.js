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
  middlewares: {},
  packets: {
    client: opcodes.client.concat([
      {
        name: "FILE_REQUEST",
        code: 24580
      }
    ]),
    server: opcodes.server.concat([
      {
        name: "FILE_CHUNK",
        code: 4097
      },
      {
        name: "FILE_COMPLETE",
        code: 40964
      }
    ])
  }
};