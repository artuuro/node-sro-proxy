import { stream } from 'silkroad-security';

async function SiegeActionSQLi(Event, packet, target) {
  const read = new stream.reader(packet.data);

  if (/[^A-Z a-z0-9.,!?]+/g.test(read.string())) return;
  
  await Event.instance[target].security.Send(
    packet.opcode,
    packet.data,
    packet.encrypted,
    packet.massive
  );
}

export default SiegeActionSQLi;