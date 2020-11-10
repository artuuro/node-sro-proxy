async function ServerStatus(Event, packet) {
  const { FAKE_PLAYERS } = Event.config;
  const { reader, writer } = Event.stream;

  const read = new reader(packet.data);
  const write = new writer();

  let hasFarmEntries = read.uint8();

  write.uint8(hasFarmEntries);

  if (hasFarmEntries == 1) {
    let farm = {};
    farm.id = read.uint8();
    farm.name = read.string();
    hasFarmEntries = read.uint8();

    write.uint8(farm.id);
    write.string(farm.name);
    write.uint8(hasFarmEntries);
  }

  let hasShardEntries = read.uint8();

  write.uint8(hasShardEntries);


  if (hasShardEntries == 1) {
    let shard = {};
    shard.id = read.uint16();

    const shardName = read.string('ascii');
    const playersOnline = read.uint16();

    shard.name = `${shardName} (${playersOnline + FAKE_PLAYERS})`;

    shard.onlineCount = playersOnline + FAKE_PLAYERS;
    shard.capacity = read.uint16();
    shard.status = read.uint8();
    shard.farmId = read.uint8();

    hasShardEntries = read.uint8();

    write.uint16(shard.id);
    write.string(shard.name);
    write.uint16(shard.onlineCount);
    write.uint16(shard.capacity);
    write.uint8(shard.status);
    write.uint8(shard.farmId);
    write.uint8(hasShardEntries);
  }

  return {
    ...packet,
    data: write.toData()
  };
}

export default ServerStatus;