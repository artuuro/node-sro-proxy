async function HardwareID(Event, packet) {
    const { stream, config, memory } = Event;
    const { reader, writer } = stream;
    const { ip } = Event.instance.info;
    const read = new reader(packet.data);
    const HWID = Buffer.from(read.string()).toString('base64');
    
    if (config.debug) console.log(`[HWID RECEIVED]->${ip}->"${HWID}"`);

    // Cache this:
    memory.set('hwid', HWID);

    return;
}

export default HardwareID;