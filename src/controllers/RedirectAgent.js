import { stream } from 'silkroad-security';

export default async (packet, ctx) => {
  const read = new stream.reader(packet.data);
  const status = read.uint8();

  switch (status) {
    case 1:
      const token = read.uint32();
      const _packet = new stream.writer();

      _packet.uint8(status);
      _packet.uint32(token);
      _packet.string(ctx.config.AGENT_REDIRECT.HOST);
      _packet.uint16(ctx.config.AGENT_REDIRECT.PORT);

      return {
        ...packet,
        data: _packet.toData()
      };
    default:
      return packet;
  }

};