async function GameLoginReply ({ stream, memory, api }, packet) {
    const { reader } = stream;
    const { get, put } = api.proxy;
    const read = new reader(packet.data);
    
    const status = read.uint8();
    
    if (status == 1) {
        const username = memory.get('username');

        // Retrieve db record by username
        const {
            data: [{ id }]
        } = await get(`/instances`, {
            params: {
                filter: JSON.stringify({
                    username
                }),
                sort: JSON.stringify(['updatedAt', 'DESC']),
                limit: 1
            }
        });
        
        // Set the user status = online
        await put(`/instances/${id}`, {
            connected: 1
        });

        // Register the session ID to memory (id from Instances table)
        memory.set('session', id);
    }
    
    return { packet };
}

export default GameLoginReply;