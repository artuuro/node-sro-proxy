async function EventHandler(event) {
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

export default EventHandler;