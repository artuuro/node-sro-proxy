"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var PacketReader = /*#__PURE__*/function () {
  function PacketReader(data) {
    (0, _classCallCheck2["default"])(this, PacketReader);
    var buffer;
    buffer = this.buffer = data;
    this.size = buffer.readUInt16LE(0);
    this.opcode = buffer.readUInt16LE(2);
    this.encrypted = false;
    this.securityCount = buffer.readUInt8(4);
    this.securityCRC = buffer.readUInt8(5);
    this.pointer = 6;
  }

  (0, _createClass2["default"])(PacketReader, [{
    key: "readByte",
    value: function readByte() {
      var tmp = this.buffer.readUInt8(this.pointer);
      this.pointer++;
      return tmp;
    }
  }, {
    key: "readWord",
    value: function readWord() {
      var tmp = this.buffer.readUInt16LE(this.pointer);
      this.pointer += 2;
      return tmp;
    }
  }, {
    key: "readDWord",
    value: function readDWord() {
      var tmp = this.buffer.readUInt32LE(this.pointer);
      this.pointer += 4;
      return tmp;
    }
  }, {
    key: "readQWord",
    value: function readQWord() {
      var tmp = this.buffer.readDoubleLE(this.pointer);
      this.pointer += 8;
      return tmp;
    }
  }, {
    key: "readString",
    value: function readString(ascii) {
      if (ascii) {
        var len = this.readWord();
        var str = this.buffer.toString('utf8', this.pointer, this.pointer + len);
        this.pointer += len;
        return str;
      }
    }
  }, {
    key: "readFloat",
    value: function readFloat() {
      var tmp = this.buffer.readFloatLE(this.pointer);
      this.pointer += 4;
      return tmp;
    }
  }, {
    key: "readBool",
    value: function readBool() {
      var tmp = this.buffer.readUInt8(this.pointer);

      if (tmp == 1) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "readByteArray",
    value: function readByteArray(size) {
      return this.buffer.slice(this.pointer, this.pointer + size);
    }
  }, {
    key: "rawBuffer",
    value: function rawBuffer() {
      return this.buffer;
    }
  }]);
  return PacketReader;
}();

var _default = PacketReader;
exports["default"] = _default;