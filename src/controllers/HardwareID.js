const createError = writer => {
  const write = new writer();
  write.uint8(3);
  write.uint8(8);
  return write.toData();
};

async function HardwareID(Event, packet) {
  const { stream, config, service } = Event;
  const { database } = service;
  const { reader } = stream;
  const read = new reader(packet.data);
  const HWID = Buffer.from(read.string()).toString('base64');
  
  if (config.debug) console.log(`[HWID RECEIVED]->${JSON.stringify(Event.client)}->"${HWID}"`);

  

  return;
}

export default HardwareID;