import crypto from 'crypto';
import Long from 'long';
import SecurityTable from '@root/SecurityTable.json';
import helper from '@sro/helpers';
import Blowfish from '@sro/Blowfish';
import PacketWriter from '@sro/packet/Writer';
import PacketReader from '@sro/packet/Reader';

class Security {
  constructor() {
    this.m_initial_blowfish_key = Buffer.from([0, 0, 0, 0, 0, 0, 0, 0]);
    this.m_seed_count = 0;
    this.m_crc_seed = 0;
    this.m_handshake_blowfish_key = Buffer.from([0, 0, 0, 0, 0, 0, 0, 0]);
    this.m_value_g = 0;
    this.m_value_p = 0;
    this.m_value_A = 0;
    this.m_value_x = 0;
    this.m_value_B = 0;
    this.m_value_K = 0;
    this.m_count_byte_seeds = Buffer.from([0, 0, 0]);
    this.m_client_key = Buffer.from([0, 0, 0, 0, 0, 0, 0, 0]);
    this.m_challenge_key = 0;
    this.key_array = Buffer.from([0, 0, 0, 0, 0, 0, 0, 0]);

    this.m_client_security = false;
    this.m_security_flag = 0;
    this.m_security_flags = {
      none: 0,
      blowfish: 0,
      security_bytes: 0,
      handshake: 0,
      handshake_response: 0,
      _6: 0,
      _7: 0,
      _8: 0,
    };
    this.m_accepted_handshake = false;
    this.m_started_handshake = false;

    this.m_blowfish = new Blowfish();

    this.m_identity_flag = 0;
    this.m_identity_name = "SR_Client";
  }

  generateValue(val) {
    for (let i = 0; i < 32; ++i) {
      val = (
        (
          (
            (
              (
                (
                  (
                    (
                      (
                        (
                          (val >>> 2) ^ val
                        ) >>> 2
                      ) ^ val
                    ) >>> 1
                  ) ^ val
                ) >>> 1
              ) ^ val
            ) >>> 1
          ) ^ val
        ) & 1
      ) | (
          (
            (
              (val & 1) << 31
            ) | (
              val >>> 1
            )
          ) & 0xFFFFFFFE
        );
    }
    val = helper.toUInt32(val);
    return val;
  }

  setupCountByte(seed) {
    if (seed == 0) seed = 0x9ABFB3B6;
    let mut = seed;
    let mut1 = this.generateValue(mut);
    mut = mut1;
    let mut2 = this.generateValue(mut);
    mut = mut2;
    let mut3 = this.generateValue(mut);
    mut = mut3;
    mut = this.generateValue(mut);

    let byte1 = ((mut & 0xff) ^ (mut3 & 0xff));
    let byte2 = ((mut1 & 0xff) ^ (mut2 & 0xff));

    if (byte1 == 0) byte1 = 1;
    if (byte2 == 0) byte2 = 1;

    this.m_count_byte_seeds[0] = (byte1 ^ byte2);
    this.m_count_byte_seeds[1] = byte2;
    this.m_count_byte_seeds[2] = byte1;
  }

  gPowXmodP(P, X, G) {
    let result = Long.fromNumber(1);
    let mult = Long.fromNumber(G);
    let modP = Long.fromNumber(P);
    if (X == 0) {
      return 1;
    }
    while (X != 0) {
      if ((X & 1) > 0) {

        result = result.multiply(mult);
        result = result.modulo(modP);
      }
      X = X >>> 1;
      mult = mult.multiply(mult);
      mult = mult.modulo(modP);
    }


    return result.toInt();
  }

  keyTransformValue(val1, val2, key, key_byte) {
    let stream = Buffer.alloc(8);
    stream.writeUInt32LE(val1, 0);
    stream.writeUInt32LE(val2, 4);

    stream[0] ^= (stream[0] + helper.LOBYTE_(helper.LOWORD_(key)) + key_byte);
    stream[1] ^= (stream[1] + helper.HIBYTE_(helper.LOWORD_(key)) + key_byte);
    stream[2] ^= (stream[2] + helper.LOBYTE_(helper.HIWORD_(key)) + key_byte);
    stream[3] ^= (stream[3] + helper.HIBYTE_(helper.HIWORD_(key)) + key_byte);
    stream[4] ^= (stream[4] + helper.LOBYTE_(helper.LOWORD_(key)) + key_byte);
    stream[5] ^= (stream[5] + helper.HIBYTE_(helper.LOWORD_(key)) + key_byte);
    stream[6] ^= (stream[6] + helper.LOBYTE_(helper.HIWORD_(key)) + key_byte);
    stream[7] ^= (stream[7] + helper.HIBYTE_(helper.HIWORD_(key)) + key_byte);
    return stream; //Should be correct
  }

  generateCountByte(update) {

    let result = helper.LOBYTE_(this.m_count_byte_seeds[2] * (~this.m_count_byte_seeds[0] + this.m_count_byte_seeds[1]));

    result = (result ^ (result >>> 4));

    if (update) {
      this.m_count_byte_seeds[0] = result;
    }
    return result;
  }

  generateCheckByte(stream, offset, lenght) {
    let checksum = 0xFFFFFFFF;

    let lchecksum = Long.fromNumber(0xffffffff);
    let ff = Long.fromNumber(0xff);
    let moddedseed = this.m_crc_seed << 8;
    for (let x = offset; x < offset + lenght; ++x) {
      let tmp = Long.fromNumber(stream[x]);
      tmp = tmp.xor(lchecksum);
      tmp = tmp.and(ff);
      let index = moddedseed + tmp.toInt();

      lchecksum = lchecksum.shiftRight(8);
      let tablevalue = Long.fromNumber(SecurityTable[index]);
      lchecksum = lchecksum.xor(tablevalue);

    }

    let tmp = lchecksum.shiftRightUnsigned(24); tmp = tmp.and(ff);
    let v1 = lchecksum.shiftRightUnsigned(8); v1 = v1.and(ff);
    let v2 = lchecksum.shiftRightUnsigned(16); v2 = v2.and(ff);
    let v3 = lchecksum.and(ff);

    tmp = tmp.add(v1); tmp = tmp.add(v2); tmp = tmp.add(v3);

    let test = tmp.toInt();

    let bit = helper.LOBYTE_(test);
    return bit;
  }

  decode(data, offset, length) {
   
    return this.m_blowfish.Decode(data, offset, length);
  }

  getOutputLength(len) {
    return this.m_blowfish.GetOutputLength(len);
  }

  handshake10(packet) {
    let flag = packet.readByte();
    let handshakelow = packet.readDWord();
    let handshakehigh = packet.readDWord();

    let handshakeKey = Long.fromBits(handshakelow, handshakehigh);
    let expectedKey = Long.fromBits(this.m_value_A, this.m_value_B);

    let challengekey = this.keyTransformValue(this.m_value_A, this.m_value_B, this.m_value_K, helper.LOBYTE_(helper.LOWORD_(this.m_value_A)) & 0x07);
    this.m_blowfish.Encode(challengekey, 0, 8);
    let key = Long.fromBits(challengekey.readUInt32LE(0), challengekey.readUInt32LE(4));

    this.m_handshake_blowfish_key = this.keyTransformValue(this.m_handshake_blowfish_key.readUInt32LE(0), this.m_handshake_blowfish_key.readUInt32LE(4), this.m_value_K, 3);
    this.m_blowfish.Initialize(this.m_handshake_blowfish_key);
    //
    let response = Buffer.alloc(6);
    response.writeUInt16LE(0, 0);
    response.writeUInt16LE(0x9000, 2);
    response.writeUInt16LE(0, 4);
    let countByte = this.generateCountByte(true);
    response.writeUInt8(countByte, 4);
    let checkByte = this.generateCheckByte(response, 0, 6);
    response.writeUInt8(checkByte, 5);

    return response;
  }

  handshakeE(packet) {
    let flag = packet.readByte();

    let key1 = packet.readDWord();
    let key2 = packet.readDWord();

    this.m_initial_blowfish_key.writeUInt32LE(key1, 0);
    this.m_initial_blowfish_key.writeUInt32LE(key2, 4);

    this.m_seed_count = packet.readDWord();
    this.m_crc_seed = packet.readDWord();
    this.setupCountByte(this.m_seed_count);

    let handshake1 = packet.readDWord();
    let handshake2 = packet.readDWord();

    this.m_handshake_blowfish_key.writeUInt32LE(handshake1, 0);
    this.m_handshake_blowfish_key.writeUInt32LE(handshake2, 4);

    this.m_value_g = packet.readDWord();
    this.m_value_p = packet.readDWord();
    this.m_value_A = packet.readDWord();

    this.m_value_x = 0x33; //Soooo random ;)
    this.m_value_B = this.gPowXmodP(this.m_value_p, this.m_value_x, this.m_value_g);
    this.m_value_K = this.gPowXmodP(this.m_value_p, this.m_value_x, this.m_value_A);

    this.key_array = this.keyTransformValue(this.m_value_A, this.m_value_B, this.m_value_K, helper.LOBYTE_(helper.LOWORD_(this.m_value_K)) & 0x03);

    this.m_client_key = this.keyTransformValue(this.m_value_B, this.m_value_A, this.m_value_K, helper.LOBYTE_(helper.LOWORD_(this.m_value_B)) & 0x07);



    this.m_blowfish.Initialize(this.key_array);
    this.m_client_key = this.m_blowfish.Encode(this.m_client_key, 0, 8).buff;
    let response = Buffer.alloc(18);
    let payload = Buffer.alloc(12);

    payload.writeUInt32LE(this.m_value_B, 0);
    this.m_client_key.copy(payload, 4, 0, 8);

    return payload;
  }

  handshake(packet) {
    if (packet.encrypted) {
      throw new Error('[Security::Handshake] Received an illogical (encrypted) handshake packet.');
    }

    if (this.m_client_security) {

      // If this object does not need a handshake
      if (this.m_security_flags.handshake == 0) {

        // Client should only accept it then
        if (packet.opcode == 0x9000) {

          if (this.m_accepted_handshake) {
            throw new Error('[Security::Handshake] Received an illogical handshake packet (duplicate 0x9000).');
          }
          this.m_accepted_handshake = true; // Otherwise, all good here
          return;
        }
        // Client should not send any 0x5000s!
        else if (packet.opcode == 0x5000) {
          throw new Error('[Security::Handshake] Received an illogical handshake packet (0x5000 with no handshake).');
        }
        // Programmer made a mistake in calling this function
        else {
          throw new Error('[Security::Handshake] Received an illogical handshake packet (programmer error).');
        }
      } else {
        // Client accepts the handshake
        if (packet.opcode == 0x9000) {
          // Can't accept it before it's started!
          if (!this.m_started_handshake) {
            throw new Error('[Security::Handshake] Received an illogical handshake packet (out of order 0x9000).');
          }
          if (this.m_accepted_handshake) { // Client error
            throw new Error('[Security::Handshake] Received an illogical handshake packet (duplicate 0x9000).');
          }
          // Otherwise, all good here
          this.m_accepted_handshake = true;
          return;
        }
        // Client sends a handshake response
        else if (packet.opcode == 0x5000) {
          if (this.m_started_handshake) { // Client error
            throw new Error('[Security::Handshake] Received an illogical handshake packet (duplicate 0x5000).');
          }
          this.m_started_handshake = true;
        }
        // Programmer made a mistake in calling this function
        else {
          throw new Error('[Security::Handshake] Received an illogical handshake packet (programmer error).');
        }
      }

      this.m_value_B = packet.readDWord();
      this.m_client_key.writeDoubleLE(packet.readQWord(), 0);

      this.m_value_K = this.gPowXmodP(this.m_value_p, this.m_value_x, this.m_value_B);

      this.key_array = this.keyTransformValue(this.m_value_A, this.m_value_B, this.m_value_K, helper.LOBYTE_(helper.LOWORD_(this.m_value_K)) & 0x03);
      this.m_blowfish.Initialize(this.key_array);

      this.m_client_key = this.m_blowfish.Decode(this.m_client_key, 0, 8);

      this.key_array = this.keyTransformValue(this.m_value_B, this.m_value_A, this.m_value_K, helper.LOBYTE_(helper.LOWORD_(this.m_value_B)) & 0x07);

      if (this.m_client_key.readDoubleLE(0) != this.key_array.readDoubleLE(0)) {
        throw new Error('[Security::Handshake] Client signature error.');
      }

      this.key_array = this.keyTransformValue(this.m_value_A, this.m_value_B, this.m_value_K, helper.LOBYTE_(helper.LOWORD_(this.m_value_K)) & 0x03);
      this.m_blowfish.Initialize(this.key_array);

      this.m_challenge_key = this.keyTransformValue(this.m_value_A, this.m_value_B, this.m_value_K, helper.LOBYTE_(helper.LOWORD_(this.m_value_K)) & 0x07);
      this.m_challenge_key = this.m_blowfish.Encode(this.m_challenge_key, 0, 8).buff;

      this.m_handshake_blowfish_key = this.keyTransformValue(this.m_handshake_blowfish_key.readUInt32LE(0), this.m_handshake_blowfish_key.readUInt32LE(4), this.m_value_K, 0x3);

      this.m_blowfish.Initialize(this.m_handshake_blowfish_key);

      let tmp_flag, response, returnPackets;
      returnPackets = [];

      tmp_flag = this._fromSecurityFlags({
        none: 0,
        blowfish: 0,
        security_bytes: 0,
        handshake: 0,
        handshake_response: 1,
        _6: 0,
        _7: 0,
        _8: 0,
      });

      response = new PacketWriter();
      response.writeByte(tmp_flag);
      response.writeQWord(this.m_challenge_key.readDoubleLE(0));

      returnPackets.push({ opcode: 0x5000, packet: response, encrypted: false });

      return returnPackets;

    } else {
      if (packet.opcode != 0x5000) {
        throw new Error('[Security::Handshake] Received an illogical handshake packet (programmer error).');
      }

      let flag, flags;
      flag = packet.readByte();

      flags = this._toSecurityFlags(flag);

      if (this.m_security_flag == 0) {
        this.m_security_flag = flag;
        this.m_security_flags = flags;
      }

      if (flags.blowfish == 1) {
        this.m_initial_blowfish_key.writeDoubleLE(packet.readQWord(), 0);
        this.m_blowfish.Initialize(this.m_initial_blowfish_key);
      }
      if (flags.security_bytes == 1) {
        this.m_seed_count = packet.readDWord();
        this.m_crc_seed = packet.readDWord();
        this.setupCountByte(this.m_seed_count);
      }
      if (flags.handshake == 1) {
        this.m_handshake_blowfish_key.writeDoubleLE(packet.readQWord(), 0);
        this.m_value_g = packet.readDWord();
        this.m_value_p = packet.readDWord();
        this.m_value_A = packet.readDWord();

        this.m_value_x = 0x33333333 & 0x7FFFFFFF; // "Random"

        this.m_value_B = this.gPowXmodP(this.m_value_p, this.m_value_x, this.m_value_g);
        this.m_value_K = this.gPowXmodP(this.m_value_p, this.m_value_x, this.m_value_A);

        this.key_array = this.keyTransformValue(this.m_value_A, this.m_value_B, this.m_value_K, helper.LOBYTE_(helper.LOWORD_(this.m_value_K)) & 0x03);

        this.m_client_key = this.keyTransformValue(this.m_value_B, this.m_value_A, this.m_value_K, helper.LOBYTE_(helper.LOWORD_(this.m_value_B)) & 0x07);

        this.m_blowfish.Initialize(this.key_array);
        this.m_client_key = this.m_blowfish.Encode(this.m_client_key, 0, 8).buff;
      }
      if (flags.handshake_response == 1) {
        let expected_challenge_key;

        this.m_challenge_key = packet.readQWord();
        expected_challenge_key = this.keyTransformValue(this.m_value_A, this.m_value_B, this.m_value_K, helper.LOBYTE_(helper.LOWORD_(this.m_value_A)) & 0x07);
        expected_challenge_key = this.m_blowfish.Encode(expected_challenge_key, 0, 8).buff;
        expected_challenge_key = expected_challenge_key.readDoubleLE(0);
        if (this.m_challenge_key != expected_challenge_key) {
          throw new Error('[Security::Handshake] Server signature error.');
        }

        this.m_handshake_blowfish_key = this.keyTransformValue(this.m_handshake_blowfish_key.readUInt32LE(0), this.m_handshake_blowfish_key.readUInt32LE(4), this.m_value_K, 0x3);
        this.m_blowfish.Initialize(this.m_handshake_blowfish_key);
      }

      //Generate outgoing packets
      if (flags.handshake == 1 && flags.handshake_response == 0) {
        let returnPackets, response;

        returnPackets = [];

        // Check to see if we already started a handshake
        if (this.m_started_handshake || this.m_accepted_handshake) {
          throw new Error('[Security::Handshake] Received an illogical handshake packet (duplicate 0x5000).');
        }
        response = new PacketWriter();
        response.writeDWord(this.m_value_B);
        response.writeQWord(this.m_client_key.readDoubleLE(0));

        returnPackets.push({ opcode: 0x5000, packet: response, encrypted: false });

        this.m_started_handshake = true;

        return returnPackets;
      } else {
        let returnPackets, response1, response2;

        returnPackets = [];

        if (this.m_accepted_handshake) {
          throw new Error('[Security::Handshake] Received an illogical handshake packet (duplicate 0x5000).');
        }

        //Handshake accept
        response1 = new PacketWriter();
        returnPackets.push({ opcode: 0x9000, packet: response1, encrypted: false });

        // Identify
        response2 = new PacketWriter();
        response2.writeString(this.m_identity_name);
        response2.writeByte(this.m_identity_flag);
        returnPackets.push({ opcode: 0x2001, packet: response2, encrypted: true });

        // Mark the handshake as accepted now
        this.m_started_handshake = true;
        this.m_accepted_handshake = true;

        return returnPackets;
      }
    }
  }

  formatPacket(opcode, data, encrypted) {
    let dataLength, packet, countByte, checkByte;
    dataLength = data.length;

    // Sanity check
    if (dataLength >= 0x8000) {
      throw new Error('[Security::FormatPacket] Payload is too large!');
    }

    packet = Buffer.alloc(dataLength + 6);

    // Add the packet header to the start of the data
    packet.writeUInt16LE(dataLength, 0);
    packet.writeUInt16LE(opcode, 2);
    packet.writeUInt16LE(0, 4);
    if (dataLength) {
      data.copy(packet, 6);
    }

    // Determine if we need to mark the packet size as encrypted
    if (encrypted && (this.m_security_flags.blowfish == 1 || (this.m_security_flags.security_bytes == 1 && this.m_security_flags.blowfish == 0))) {
      packet.writeUInt16LE((dataLength | 0x8000), 0);
    }

    // Only need to stamp bytes if this is a clientless object
    if (this.m_client_security == false && this.m_security_flags.security_bytes == 1) {

      countByte = this.generateCountByte(true);
      packet.writeUInt8(countByte, 4);

      checkByte = this.generateCheckByte(packet, 0, packet.length);
      packet.writeUInt8(checkByte, 5);
    }

    // If the packet should be physically encrypted, return an encrypted version of it
    if (encrypted && this.m_security_flags.blowfish == 1) {
      let encryptedData, realPacket;
      encryptedData = this.m_blowfish.Encode(packet, 2, dataLength + 4).buff;

      packet = Buffer.alloc(encryptedData.length + 2);
      packet.writeUInt16LE((dataLength | 0x8000), 0);
      encryptedData.copy(packet, 2);
    } else {
      packet.writeUInt16LE(dataLength, 0);
    }

    return packet;
  }

  formatPacket_old(opcode, new_payload, length, encrypted) {
    let packet = Buffer.alloc(length + 6);

    //Header
    packet.writeUInt16LE(length, 0);
    packet.writeUInt16LE(opcode, 2);
    packet.writeUInt16LE(0, 4);
    //End Header 
    //Payload
    if (length != 0) {
      new_payload.copy(packet, 6);
    }
    //End Payload

    if (encrypted) {
      packet.writeUInt16LE((length | 0x8000), 0);
    }

    let countByte = this.generateCountByte(true);
    packet.writeUInt8(countByte, 4);

    let checkByte = this.generateCheckByte(packet, 0, length + 6);
    packet.writeUInt8(checkByte, 5);


    if (encrypted) {
      let encr = this.m_blowfish.Encode(packet, 2, length + 4);
      let realPacket = Buffer.alloc(encr.size + 2);
      realPacket.writeUInt16LE((length | 0x8000), 0);
      encr.buff.copy(realPacket, 2);
      return realPacket;
    }

    return packet;
  }

  // Extended security

  _fromSecurityFlags(flags) {
    return (flags.none | flags.blowfish << 1 | flags.security_bytes << 2 | flags.handshake << 3 | flags.handshake_response << 4 | flags._6 << 5 | flags._7 << 6 | flags._8 << 7);
  }

  _toSecurityFlags(value) {
    flags = {};
    flags.none = value & 1;
    value >>= 1;
    flags.blowfish = value & 1;
    value >>= 1;
    flags.security_bytes = value & 1;
    value >>= 1;
    flags.handshake = value & 1;
    value >>= 1;
    flags.handshake_response = value & 1;
    value >>= 1;
    flags._6 = value & 1;
    value >>= 1;
    flags._7 = value & 1;
    value >>= 1;
    flags._8 = value & 1;
    value >>= 1;
    return flags;
  }

  generateSecurity(blowfish, security_bytes, handshake) {
    let response, buffer;

    // Generate settings
    if (blowfish) {
      this.m_security_flags.none = 0;
      this.m_security_flags.blowfish = 1;
    }
    if (security_bytes) {
      this.m_security_flags.none = 0;
      this.m_security_flags.security_bytes = 1;
    }
    if (handshake) {
      this.m_security_flags.none = 0;
      this.m_security_flags.handshake = 1;
    }
    if (!blowfish && !security_bytes && !handshake) {
      this.m_security_flags.none = 1;
    }

    // Generate security
    this.m_security_flag = this._fromSecurityFlags(this.m_security_flags);
    this.m_client_security = true;

    response = new PacketWriter();
    response.writeByte(this.m_security_flag);

    const blowfishKey = 0xdeadbeefcafebabe;

    if (this.m_security_flags.blowfish == 1) {
      this.m_initial_blowfish_key.writeDoubleLE(blowfishKey, 0);
      response.writeQWord(blowfishKey);
    }
    if (this.m_security_flags.security_bytes == 1) {
      this.m_seed_count = 0x9ABFB3B6;
      this.setupCountByte(this.m_seed_count);
      this.m_crc_seed = 0x9ABFB3B6;

      response.writeDWord(this.m_seed_count);
      response.writeDWord(this.m_crc_seed);
    }
    if (this.m_security_flags.handshake == 1) {
      this.m_handshake_blowfish_key.writeDoubleLE(blowfishKey, 0);
      this.m_value_x = 0x9ABFB3C6 & 0x7FFFFFFF;
      this.m_value_g = 0x9ABFB3D6 & 0x7FFFFFFF;
      this.m_value_p = 0x9ABFB3E6 & 0x7FFFFFFF;
      this.m_value_A = this.gPowXmodP(this.m_value_p, this.m_value_x, this.m_value_g);

      response.writeQWord(blowfishKey);
      response.writeDWord(this.m_value_g);
      response.writeDWord(this.m_value_p);
      response.writeDWord(this.m_value_A);
    }

    return response;
  }
}

export default Security;

