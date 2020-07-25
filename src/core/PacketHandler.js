
import PacketReader from '@sro/packet/Reader';

class PacketHandler {
  constructor(config = {}) {
    this.config = config;
  }

  async handle(context, data, side) {
    const { size, opcode, encrypted } = new PacketReader(data);
    
    console.log(`---\nfrom: ${side}\nsize: ${size}\nopcode: ${opcode}\nencrypted: ${encrypted}\n---`);


    // Write the packet to the target context
    context.write(data);
  }
}

export default PacketHandler; 