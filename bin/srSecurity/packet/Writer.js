"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var PacketWriter = /*#__PURE__*/function () {
  function PacketWriter(buffer) {
    (0, _classCallCheck2["default"])(this, PacketWriter);
    this.buffer = Buffer.alloc(4096);
    this.pointer = 0;
    this.size = 0;

    if (buffer) {
      buffer.copy(this.buffer);
      this.pointer = this.size = buffer.length;
    }
  }

  (0, _createClass2["default"])(PacketWriter, [{
    key: "writeByte",
    value: function writeByte(b) {
      this.buffer.writeUInt8(b, this.pointer);

      if (this.pointer == this.size) {
        this.pointer += 1;
        this.size += 1;
      } else {
        this.pointer += 1;
      }
    }
  }, {
    key: "writeWord",
    value: function writeWord(w) {
      this.buffer.writeUInt16LE(w, this.pointer);

      if (this.pointer == this.size) {
        this.pointer += 2;
        this.size += 2;
      } else {
        this.pointer += 2;
      }
    }
  }, {
    key: "writeDWord",
    value: function writeDWord(dw) {
      this.buffer.writeUInt32LE(dw, this.pointer);

      if (this.pointer == this.size) {
        this.pointer += 4;
        this.size += 4;
      } else {
        this.pointer += 4;
      }
    }
  }, {
    key: "writeQWord",
    value: function writeQWord(qw) {
      this.buffer.writeDoubleLE(qw, this.pointer);

      if (this.pointer == this.size) {
        this.pointer += 8;
        this.size += 8;
      } else {
        this.pointer += 8;
      }
    }
  }, {
    key: "writeString",
    value: function writeString(str) {
      var test = String(str);
      var len = test.length;
      this.writeWord(len);
      this.buffer.write(str, this.pointer);

      if (this.pointer == this.size) {
        this.pointer += len;
        this.size += len;
      } else {
        this.pointer += len;
      }
    }
  }, {
    key: "writeFloat",
    value: function writeFloat(f) {
      this.buffer.writeFloatLE(f, this.pointer);

      if (this.pointer == this.size) {
        this.pointer += 4;
        this.size += 4;
      } else {
        this.pointer += 4;
      }
    }
  }, {
    key: "setPointer",
    value: function setPointer(i) {
      this.pointer = i;
    }
  }, {
    key: "resetPointer",
    value: function resetPointer() {
      this.pointer = this.size;
    }
  }, {
    key: "getBytes",
    value: function getBytes() {
      return this.buffer.slice(0, this.size);
    }
  }]);
  return PacketWriter;
}();

var _default = PacketWriter;
exports["default"] = _default;