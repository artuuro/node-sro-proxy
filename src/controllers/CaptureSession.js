async function CaptureSession ({ stream, memory, api, disconnect }, packet) {

    const { writer, reader } = stream;
    const { get } = api.proxy;
    const read = new reader(packet.data);
    const token = read.uint32();
    const username = read.string();

    try {
        const instance = await get(`/instances`, {
            filter: JSON.stringify({
                username: username
            }),
            limit: 1
        });
    
        memory.set('session', instance.data[0].id);
    
        return { packet };
    } catch (e) {
        disconnect();
    }
    
}

export default CaptureSession;