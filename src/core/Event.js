async function Event(event) {
  const target = event.sender == 'client' ? 'remote' : 'client';
  const receive = await event.instance[event.sender].security.GetPacketToRecv() || [];

  for (const packet of receive) {
    if ((target === 'remote' && event.config.whitelist[packet.opcode]) || target == 'client') {
      const middleware = event.middlewares ? event.middlewares[packet.opcode] || false : false;
      const _packet = middleware ? await middleware(event, packet, target) : packet;

      if (_packet) await event.instance[target].security.Send(
        _packet.opcode,
        _packet.data,
        _packet.encrypted,
        _packet.massive
      );
    } else if (event.config.debug && target === 'remote') console.log(`[${event.sender}]->(${packet.opcode})->${target}: NOT WHITELISTED`);
    
  }

  const send = await event.instance[target].security.GetPacketToSend() || [];

  for (const packet of send) {
    await event.instance[target].socket.write(Buffer.from(packet));
  }
}

export default Event;