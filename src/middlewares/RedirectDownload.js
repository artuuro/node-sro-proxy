import { stream } from 'silkroad-security';

async function RedirectAgent(Event, packet, target) {
  const { DownloadServer } = Event.config.REDIRECT;
  const read = new stream.reader(packet.data);

  const status = read.uint8();

  let data = {};

  if (status == 2) {
    const statusCode = read.uint8();
    if (statusCode == 2) {
      read.string();
      read.uint16();

      let version = read.uint32();
      let loop = read.uint8();

      const _packet = new stream.writer();
      _packet.uint8(status);
      _packet.uint8(statusCode);
      _packet.string(DownloadServer.HOST);
      _packet.uint16(DownloadServer.PORT);
      _packet.uint32(version);
      _packet.uint8(loop);

      while (loop == 1) {
        const file = {
          id: read.uint32(),
          name: read.string(),
          path: read.string(),
          size: read.uint32(),
          toPack: read.uint8()
        };

        loop = read.uint8();

        _packet.uint32(file.id);
        _packet.string(file.name);
        _packet.string(file.path);
        _packet.uint32(file.size);
        _packet.uint8(file.toPack);
        _packet.uint8(loop);
      }

      data = {
        ...packet,
        data: _packet.toData()
      };
    }
  } else {
    data = packet;
  }

  await Event.instance[target].security.Send(data.opcode, data.data, data.encrypted, data.massive);
}

export default RedirectAgent;