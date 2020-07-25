"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _net = _interopRequireDefault(require("net"));

var _PacketHandler = _interopRequireDefault(require("./PacketHandler"));

var Instance = /*#__PURE__*/function () {
  function Instance(config, socket) {
    (0, _classCallCheck2["default"])(this, Instance);
    this.config = config;
    this.localSocket = socket;
  }

  (0, _createClass2["default"])(Instance, [{
    key: "connect",
    value: function connect() {
      this.worker = new _PacketHandler["default"](this.config);
      this.remoteSocket = new _net["default"].Socket();
      this.remoteSocket.connect({
        host: this.config.REMOTE.HOST,
        port: this.config.REMOTE.PORT,
        onread: {
          buffer: Buffer.alloc(8 * 1024)
        }
      });
    }
  }, {
    key: "attachListeners",
    value: function attachListeners() {
      var _this = this;

      this.localSocket.on('error', function () {});
      this.localSocket.on('close', function () {
        return console.log("[CONENCTION CLOSED]");
      }); // Sockets from remote (server)

      this.remoteSocket.on('data', /*#__PURE__*/function () {
        var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(data) {
          return _regenerator["default"].wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _this.worker.handle(_this.localSocket, data, 'server');

                case 2:
                  return _context.abrupt("return", _context.sent);

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }()); // Sockets from local (client)

      this.localSocket.on('data', /*#__PURE__*/function () {
        var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(data) {
          return _regenerator["default"].wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return _this.worker.handle(_this.remoteSocket, data, 'client');

                case 2:
                  return _context2.abrupt("return", _context2.sent);

                case 3:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    }
  }]);
  return Instance;
}();

var _default = Instance;
exports["default"] = _default;