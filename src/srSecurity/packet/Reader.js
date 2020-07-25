class PacketReader {
  constructor(data) {
    var buffer;

    buffer = this.buffer = data;
    this.size = buffer.readUInt16LE(0);
    this.opcode = buffer.readUInt16LE(2);
    this.encrypted = false;
    this.securityCount = buffer.readUInt8(4);
    this.securityCRC = buffer.readUInt8(5);
    this.pointer = 6;
  }


  readByte() {
    var tmp = this.buffer.readUInt8(this.pointer);
    this.pointer++;
    return tmp;
  }

  readWord() {
    var tmp = this.buffer.readUInt16LE(this.pointer);
    this.pointer += 2;
    return tmp;
  }

  readDWord() {
    var tmp = this.buffer.readUInt32LE(this.pointer);
    this.pointer += 4;
    return tmp;
  }

  readQWord() {
    var tmp = this.buffer.readDoubleLE(this.pointer);
    this.pointer += 8;
    return tmp;
  }

  readString(ascii) {
    if (ascii) {
      var len = this.readWord();
      var str = this.buffer.toString('utf8', this.pointer, this.pointer + len);
      this.pointer += len;
      return str;
    }
  }

  readFloat() {
    var tmp = this.buffer.readFloatLE(this.pointer);
    this.pointer += 4;
    return tmp;
  }

  readBool() {
    var tmp = this.buffer.readUInt8(this.pointer);
    if (tmp == 1) {
      return true;
    }
    else {
      return false;
    }
  }

  readByteArray(size) {
    return this.buffer.slice(this.pointer, this.pointer + size);
  }

  rawBuffer() {
    return this.buffer;
  }
}

export default PacketReader;
