import PacketReader from '@sro/packet/Reader';

class PacketHandler {
  constructor(config = {}) {
    this.config = config;
  }

  async handle(context, data, side) {
    const { size, opcode, encrypted } = new PacketReader(data);
    
    console.log(context.security);

    console.log(`from: ${side}\nsize: ${size}\nopcode: ${opcode}\nencrypted: ${encrypted}`);


    // Write the packet to the target context
    context.write(data);
  }
}

export default PacketHandler; 