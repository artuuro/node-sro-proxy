async function HardwareID(Event, packet) {
    const { stream, config } = Event;
    const { reader } = stream;
    const read = new reader(packet.data);
    const HWID = Buffer.from(read.string()).toString('base64');
    
    if (config.debug) console.log(`[HWID RECEIVED]->${JSON.stringify(Event.instance.info)}->"${HWID}"`);

    const { get } = Event.api;

    const { data } = await get(`/blacklist`, {
        params: {
            sort: JSON.stringify(['createdAt']),
            filter: JSON.stringify({ remote: HWID })
        }
    });

    //console.log(data);
    if (data && data.length) {
        const { remote, reason, createdAt } = data[0];
        const message = `Access denied: ${reason} (${createdAt})`;
        console.log(`[${remote}] >`, message);

        // // Todo: 
        // // Construct custom login response telling that user is banned for {data[0].reason}
        process.exit(0);
    }

    return;
}

export default HardwareID;