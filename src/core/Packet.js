async function Packet(event) {
  const target = event.sender == 'client' ? 'remote' : 'client';
  const receive = await event.instance[event.sender].security.GetPacketToRecv() || [];
  for (const packet of receive) {
    if ((target === 'remote' && event.config.whitelist[packet.opcode]) || target == 'client') {
      const middleware = event.middlewares ? event.middlewares[packet.opcode] || false : false;

      if (middleware) {
        await middleware(event, packet, target);
      } else {
        await event.instance[target].security.Send(
          packet.opcode,
          packet.data,
          packet.encrypted,
          packet.massive
        );
      }
    }
  }

  const send = await event.instance[target].security.GetPacketToSend() || [];
  for (const packet of send) {
    await event.instance[target].socket.write(Buffer.from(packet));
  }
}

// class Packet {
//   constructor(stream) {
//     Object.assign(this, stream);
//     this.target = this.sender == 'client' ? 'remote' : 'client';
//     this.side = {
//       from: this.instance[this.sender],
//       to: this.instance[this.target]
//     };
//   }

//   async handle() {
//     await this.receive();
//     await this.send();
//   }

//   async receive() {
//     for (const packet of await this.side.from.security.GetPacketToRecv() || []) {
//       if ((this.targetName === 'remote' && this.config.whitelist[packet.opcode]) || this.targetName == 'client') {
//         const middleware = this.config.middlewares ? this.config.middlewares[packet.opcode] || false : false;

//         if (middleware) {
//           await middleware(this, packet, this.side.to);
//         } else {
//           await this.side.to.security.Send(
//             packet.opcode,
//             packet.data,
//             packet.encrypted,
//             packet.massive
//           );
//         }
//       }
//     }
//   }

//   async send() {
//     for (const packet of await this.side.to.security.GetPacketToSend() || []) {
//       await this.side.to.socket.write(Buffer.from(packet));
//     }
//   }
// }

export default Packet;