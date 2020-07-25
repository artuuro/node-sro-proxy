"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Security = _interopRequireDefault(require("../srSecurity/Security"));

var _Reader = _interopRequireDefault(require("../srSecurity/packet/Reader"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var PacketHandler = /*#__PURE__*/function () {
  function PacketHandler() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, PacketHandler);
    this.config = config;
    this.security = new _Security["default"]();
  }

  (0, _createClass2["default"])(PacketHandler, [{
    key: "handle",
    value: function () {
      var _handle = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(context, data, side) {
        var read, check;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                read = new _Reader["default"](data);
                check = this.config.packets[side].find(function (i) {
                  return i.code == read.opcode;
                });

                if (check) {
                  if (check.name !== 'PING') console.log(_objectSpread({
                    service: this.config.module,
                    from: side
                  }, check));
                } else {
                  console.log("-------------------------");
                  console.log("!MISSING");
                  console.log("[".concat(this.config.module, "] from: \"").concat(side, "\":"));
                  console.log({
                    name: "UNKNOWN_".concat(read.opcode),
                    code: read.opcode
                  });
                  console.log("-------------------------");
                }

                context.write(data);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handle(_x, _x2, _x3) {
        return _handle.apply(this, arguments);
      }

      return handle;
    }()
  }]);
  return PacketHandler;
}();

var _default = PacketHandler;
exports["default"] = _default;