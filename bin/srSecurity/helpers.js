"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function toUInt32(sval) {
  var buffer = Buffer.alloc(4);
  buffer.writeInt32LE(sval, 0);
  var usigned = buffer.readUInt32LE(0);
  return usigned;
}

function toUInt32_(sval) {
  var buffer = Buffer.alloc(5);
  buffer.writeUInt32LE(sval, 0);
  var usigned = buffer.readUInt32LE(0);
  return usigned;
}

function MAKELONGLONG_(a, b) {
  var longlong = b << 32 | a;
  var buffer = Buffer.alloc(8);
  buffer.writeInt64LE(longlong, 0);
  longlong = buffer.readUInt64LE(0);
  return longlong;
}

function MAKELONG_(a, b) {
  var _long = b << 16 | a;

  var buffer = Buffer.alloc(4);
  buffer.writeInt32LE(_long, 0);
  _long = buffer.readUInt32LE(0);
  return _long;
}

function MAKEWORD_(a, b) {
  var word = b << 8 | a;
  var buffer = Buffer.alloc(2);
  buffer.writeInt16LE(word, 0);
  word = buffer.readUInt16LE(0);
  return word;
}

function LOWORD_(a) {
  a = a & 0xffff;
  var buffer = Buffer.alloc(2);
  buffer.writeUInt16LE(a, 0);
  a = buffer.readUInt16LE(0);
  return a;
}

function HIWORD_(a) {
  a = a >>> 16 & 0xffff;
  return a;
}

function LOBYTE_(a) {
  a = a & 0xff;
  return a;
}

function HIBYTE_(a) {
  a = a >>> 8 & 0xff;
  return a;
}

var _default = {
  toUInt32: toUInt32,
  toUInt32_: toUInt32_,
  MAKELONGLONG_: MAKELONGLONG_,
  MAKELONG_: MAKELONG_,
  MAKEWORD_: MAKEWORD_,
  LOWORD_: LOWORD_,
  HIWORD_: HIWORD_,
  LOBYTE_: LOBYTE_,
  HIBYTE_: HIBYTE_
};
exports["default"] = _default;