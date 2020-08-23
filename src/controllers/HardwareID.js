async function HardwareID(Event, packet) {
  const { stream, config, service } = Event;
  const { database } = service;
  const { reader } = stream;
  const read = new reader(packet.data);
  const HWID = Buffer.from(read.string()).toString('base64');
  

  if (config.debug) console.log(`[HWID RECEIVED]->${JSON.stringify(Event.client)}->"${HWID}"`);

  // Model access:
  const account = await database.model('account');

  console.log(account);

  return;
}

export default HardwareID;