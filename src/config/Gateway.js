import opcodes from "@config/global.opcodes";

export default {
  module: 'GatewayServer',
  LOCAL: {
    HOST: "0.0.0.0",
    PORT: 7001
  },
  REMOTE: {
    HOST: "138.201.58.79",
    PORT: 15779
  },
  middlewares: {
    41218: 'RedirectAgent'
  },
  packets: {
    client: opcodes.client.concat([
      {
        code: 24832, name: "PATCH_REQUEST"
      },
      {
        code: 24836, name: "NOTICE_REQUEST"
      },
      {
        code: 24833, name: "SHARD_LIST_REQUEST"
      },
      {
        code: 24838, name: "SHARD_LIST_PING_REQUEST"
      },
      {
        code: 24834, name: "LOGIN_REQUEST"
      },
      {
        code: 25379, name: "LOGIN_IBUV_CONFIRM_REQUEST"
      }
    ]),
    server: opcodes.server.concat([
      {
        code: 41216, name: "PATCH_RESPONSE"
      },
      {
        code: 41220, name: "NOTICE_RESPONSE"
      },
      {
        code: 41217, name: "SHARD_LIST_RESPONSE"
      },
      {
        code: 41222, name: "SHARD_LIST_PING_RESPONSE"
      },
      {
        code: 8994, name: "LOGIN_IBUV_CHALLENGE"
      },
      {
        code: 41763, name: "LOGIN_IBUV_CONFIRM_RESPONSE"
      },
      {
        code: 41218, name: "LOGIN_RESPONSE"
      }, {
        code: 58850, name: "LOGIN_RESPONSE"
      }
    ])
  }
};