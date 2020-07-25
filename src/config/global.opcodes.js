export default {
  client: [
    {
      code: 20480, name: "HANDSHAKE_RESPONSE"
    },
    {
      code: 36864, name: "HANDSHAKE_ACCEPT"
    },
    {
      code: 8193, name: "MODULE_IDENTIFICATION"
    },
    {
      code: 8194, name: "MODULE_KEEP_ALIVE"
    },
    {
      code: 24579, name: "MODULE_CERTIFICATION_REQUEST"
    },
    {
      code: 40963, name: "MODULE_CERTIFICATION_RESPONSE"
    },
    {
      code: 24584, name: "MODULE_RELAY_REQUEST"
    },
    {
      code: 40968, name: "MODULE_RELAY_RESPONSE"
    },
    {
      code: 24589, name: "MASSIVE_MESSAGE"
    }
  ],
  server: [
    {
      code: 20480, name: "HANDSHAKE_SETUP_CHALLENGE"
    },
    {
      code: 8193, name: "MODULE_IDENTIFICATION"
    },
    {
      code: 8197, name: "NODE_STATUS1"
    },
    {
      code: 24581, name: "NODE_STATUS2"
    },
    {
      code: 24589, name: "MASSIVE_MESSAGE"
    }
  ]
};