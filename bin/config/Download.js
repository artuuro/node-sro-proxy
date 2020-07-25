"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _global = _interopRequireDefault(require("./global.opcodes"));

var _default = {
  module: 'DownloadServer',
  LOCAL: {
    HOST: '0.0.0.0',
    PORT: 7003
  },
  REMOTE: {
    HOST: '138.201.58.79',
    PORT: 16002
  },
  packets: {
    client: _global["default"].client.concat([{
      name: "FILE_REQUEST",
      code: 24580
    }]),
    server: _global["default"].server.concat([{
      name: "FILE_CHUNK",
      code: 4097
    }, {
      name: "FILE_COMPLETE",
      code: 40964
    }])
  }
};
exports["default"] = _default;