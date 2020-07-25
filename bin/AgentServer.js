"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _ProxyServer = _interopRequireDefault(require("./core/ProxyServer"));

var _Agent = _interopRequireDefault(require("./config/Agent"));

new _ProxyServer["default"](_Agent["default"]).init();