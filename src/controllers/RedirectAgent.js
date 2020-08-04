import { stream } from 'silkroad-security';

async function RedirectAgent(Event, packet, target) {
  const { AGENT_REDIRECT } = Event.config;
  const read = new stream.reader(packet.data);
  const status = read.uint8();
  let data = {};
  
  switch (status) {
    case 1:
      const token = read.uint32();
      const _packet = new stream.writer();

      _packet.uint8(status);
      _packet.uint32(token);
      _packet.string(AGENT_REDIRECT.HOST);
      _packet.uint16(AGENT_REDIRECT.PORT);

      data = {
        ...packet,
        data: _packet.toData()
      };
      break;
    default:
      data = packet;
      break;
  }

  await Event.instance[target].security.Send(data.opcode, data.data, data.encrypted, data.massive);
}

export default RedirectAgent;