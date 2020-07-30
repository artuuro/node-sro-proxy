export default async ctx => {
  const target = ctx.sender == 'client' ? 'remote' : 'client';
  const receive = await ctx.instance[ctx.sender].security.GetPacketToRecv() || [];
  for (const packet of receive) {
    if ((target === 'remote' && ctx.config.whitelist[packet.opcode]) || target == 'client') {
      const middleware = ctx.middleware[packet.opcode] || false;
      if (middleware) {
        const _packet = middleware(packet, ctx);
        await ctx.instance[target].security.Send(
          _packet.opcode, 
          _packet.data,
          _packet.encrypted, 
          _packet.massive
        );
      } else {
        await ctx.instance[target].security.Send(
          packet.opcode, 
          packet.data, 
          packet.encrypted, 
          packet.massive
        );
      }
    }
  }
  const send = await ctx.instance[target].security.GetPacketToSend() || [];
  for (const packet of send) {
    await ctx.instance[target].socket.write(Buffer.from(packet));
  }
};