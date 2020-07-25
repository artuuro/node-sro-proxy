"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _ProxyServer = _interopRequireDefault(require("./core/ProxyServer"));

var _Download = _interopRequireDefault(require("./config/Download"));

new _ProxyServer["default"](_Download["default"]).init();