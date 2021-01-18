import redirects from '@config/redirects';

async function LoginResponse({ config, stream, memory, api }, packet) {
    const { writer, reader } = stream;
    const { get, put } = api.proxy;

    const username = memory.get('username');

    const read = new reader(packet.data);
    const status = read.uint8();

    if (status == 1) {
        const token = read.uint16();
        const host = read.string();
        const port = read.uint16();

        const redirect = redirects[`${host}:${port}`];

        console.log(redirect);

        const {
            data,
        } = await get(`/instances?limit=1`, {
            filter: JSON.stringify({ username }),
        });

        const { id } = data.find(i => i.username == username);

        if (instance) {
            await put(`/instances/${id}`, {
                connected: 1
            });

            const write = new writer();

            write.uint8(status);
            write.uint32(token);
            write.string(redirect.host);
            write.uint16(redirect.port);

            return {
                packet: {
                    ...packet,
                    data: write.toData(),
                }
            };
        }
    }

    return { packet };
}

export default LoginResponse;