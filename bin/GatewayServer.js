"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _ProxyServer = _interopRequireDefault(require("./core/ProxyServer"));

var _Gateway = _interopRequireDefault(require("./config/Gateway"));

new _ProxyServer["default"](_Gateway["default"]).init();