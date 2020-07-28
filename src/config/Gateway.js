import opcodes from "@config/global.opcodes";

export default {
  debug: true,
  module: 'GatewayServer',
  LOCAL: {
    HOST: "0.0.0.0",
    PORT: 7001
  },
  REMOTE: {
    HOST: "138.201.58.79",
    PORT: 15779
  },
  AGENT_REDIRECT: {
    HOST: "127.0.0.1",
    PORT: 7002
  },
  packets: Object.assign(opcodes, {
    8994: "LOGIN_IBUV_CHALLENGE",
    24832: "PATCH_REQUEST",
    24836: "NOTICE_REQUEST",
    24833: "SHARD_LIST_REQUEST",
    24838: "SHARD_LIST_PING_REQUEST",
    24834: "LOGIN_REQUEST",
    25379: "LOGIN_IBUV_CONFIRM_REQUEST",
    41216: "PATCH_RESPONSE",
    41220: "NOTICE_RESPONSE",
    41217: "SHARD_LIST_RESPONSE",
    41222: "SHARD_LIST_PING_RESPONSE",
    41763: "LOGIN_IBUV_CONFIRM_RESPONSE",
    41218: "LOGIN_RESPONSE"
  })
};