async function LoginResponse({ config, stream, memory, api }, packet) {
    const { AgentServer } = config.REDIRECT;
    const { writer, reader } = stream;
    const read = new reader(packet.data);
    const status = read.uint8();
    const { get, put } = api.proxy;
    const username = memory.get('username');

    if (status == 1) {
        const {
            data,
        } = await get(`/instances`, {
            filter: JSON.stringify({ username }),
            limit: 1
        });

        const [instance] = data;

        if (instance) {
            await put(`/instances/${instance.id}`, {
                connected: 1
            });

            const token = read.uint32();
            const write = new writer();

            write.uint8(status);
            write.uint32(token);
            write.string(AgentServer.HOST);
            write.uint16(AgentServer.PORT);

            return {
                packet: {
                    ...packet,
                    data: write.toData(),
                }
            };
        } else {
            return { exit: true };
        }
    }

    return { packet };
}

export default LoginResponse;