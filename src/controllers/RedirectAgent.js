async function RedirectAgent(Event, packet) {
  const { AgentServer } = Event.config.REDIRECT;
  const { writer, reader } = Event.stream;

  const read = new reader(packet.data);
  const status = read.uint8();
  let _packet = {};

  switch (status) {
    case 1:
      const token = read.uint32();
      const write = new writer();

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
  
  return _packet;
}

export default RedirectAgent;