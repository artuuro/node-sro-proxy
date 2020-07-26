class PacketHandler {
  constructor(config = {}) {
    this.config = config;
  }

  async handle(context, security, data, side) {

    
    
    console.log(data, side);


    context.write(data);
  }
}

export default PacketHandler; 