async function HardwareID(Event, packet) {
    const { stream, config } = Event;
    const { reader } = stream;
    const read = new reader(packet.data);
    const HWID = Buffer.from(read.string()).toString('base64');

    const footprint = {
        ...Event.instance.info,
        HWID
    };

    console.log(footprint);
    
    if (config.debug) console.log(`[HWID RECEIVED]->${JSON.stringify(Event.instance.info)}->"${HWID}"`);
    return;
}

export default HardwareID;