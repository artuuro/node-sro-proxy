class PacketWriter {
  constructor(buffer) {
    this.buffer = Buffer.alloc(4096);
    this.pointer = 0;
    this.size = 0;

    if (buffer) {
      buffer.copy(this.buffer);
      this.pointer = this.size = buffer.length;
    }
  }

  writeByte(b) {
    this.buffer.writeUInt8(b, this.pointer);
    if (this.pointer == this.size) {
      this.pointer += 1;
      this.size += 1;
    } else {
      this.pointer += 1;
    }
  }

  writeWord(w) {
    this.buffer.writeUInt16LE(w, this.pointer);
    if (this.pointer == this.size) {
      this.pointer += 2;
      this.size += 2;
    } else {
      this.pointer += 2;
    }
  }

  writeDWord(dw) {
    this.buffer.writeUInt32LE(dw, this.pointer);
    if (this.pointer == this.size) {
      this.pointer += 4;
      this.size += 4;
    } else {
      this.pointer += 4;
    }
  }

  writeQWord(qw) {
    this.buffer.writeDoubleLE(qw, this.pointer);
    if (this.pointer == this.size) {
      this.pointer += 8;
      this.size += 8;
    } else {
      this.pointer += 8;
    }
  }

  writeString(str) {
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

  writeFloat(f) {
    this.buffer.writeFloatLE(f, this.pointer);
    if (this.pointer == this.size) {
      this.pointer += 4;
      this.size += 4;
    } else {
      this.pointer += 4;
    }
  }

  setPointer(i) {
    this.pointer = i;
  }

  resetPointer() {
    this.pointer = this.size;
  }

  getBytes() {
    return this.buffer.slice(0, this.size);
  }
}

export default PacketWriter;