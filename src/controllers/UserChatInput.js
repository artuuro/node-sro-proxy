async function UserChatInput(Event, packet) {
  const { config, stream, adapter, clientId } = Event;
  const { database, cache } = adapter;
  const { reader } = stream;
  const { CHAT_TYPES } = config;
  const read = new reader(packet.data);
 
  const type = read.uint8();
  const typeName = CHAT_TYPES[type] || 'Invalid';

  read.uint8();

  const message = type == 2 ? {
    receiver: read.string(),
    content: read.string()
  } : {
    content: read.string()
  };

  if (config.debug) console.log(`[${clientId}][CHAT][${typeName}]->${JSON.stringify(message)}`);

  return packet;
}

export default UserChatInput;