async function HardwareID({ stream, config, memory, info }, packet) {
    const { reader } = stream;
    const { ip } = info;
    const read = new reader(packet.data);

    // retrieve HWID:
    const HWID = Buffer.from(read.string()).toString('base64');

    // Remember HWID for login:
    memory.set('hwid', HWID);

    return;
}

export default HardwareID;