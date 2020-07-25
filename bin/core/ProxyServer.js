"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _net = _interopRequireDefault(require("net"));

var _Instance = _interopRequireDefault(require("./Instance"));

var Server = /*#__PURE__*/function () {
  function Server(config) {
    (0, _classCallCheck2["default"])(this, Server);
    this.config = config;
  }

  (0, _createClass2["default"])(Server, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.listener = _net["default"].createServer(function (socket) {
        var instance = new _Instance["default"](_this.config, socket);
        instance.id = socket.remoteAddress + ':' + socket.remotePort;
        instance.connect();
        instance.attachListeners();
      });
      this.listener.on('connection', function (socket) {
        console.log("[CONNECTED]", socket.address());
      });
      this.listener.listen(this.config.LOCAL.PORT, this.config.LOCAL.PORT);
      console.log("[".concat(this.config.module, "]").concat(JSON.stringify(this.config.LOCAL)));
    }
  }]);
  return Server;
}();

var _default = Server;
exports["default"] = _default;