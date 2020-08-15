import { stream } from 'silkroad-security';

async function RedirectAgent(Event, packet, target) {
  const { AgentServer } = Event.config.REDIRECT;
  const read = new stream.reader(packet.data);
  const status = read.uint8();
  let _packet = {};

  switch (status) {
    case 1:
      const token = read.uint32();
      const write = new stream.writer();

      write.uint8(status);
      write.uint32(token);
      write.string(AgentServer.HOST);
      write.uint16(AgentServer.PORT);

      _packet = {
        ...packet,
        data: write.toData()
      };
      break;
    default:
      _packet = packet;
      break;
  }
  
  await Event.instance[target].security.Send(
    _packet.opcode,
    _packet.data,
    _packet.encrypted,
    _packet.massive
  );
}

export default RedirectAgent;