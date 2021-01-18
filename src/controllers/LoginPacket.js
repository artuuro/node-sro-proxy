async function LoginPacket ({ stream, memory, api, config }, packet) {
    const { reader, writer } = stream;
    const { get, put } = api.proxy;
    const read = new reader(packet.data);
    const write = new writer();

    // destructure packet:
    const {
        arg0,
        username,
        password,
        locale,
        arg1,
        arg2,
    } = {
        arg0: read.uint32(),
        username: read.string('ascii').toLowerCase(),
        password: read.string('ascii'),
        locale: read.uint8(),
        arg1: read.uint32(),
        arg2: read.uint16(),
    };

    // Remember the username
    memory.set('username', username);

    if (locale == 51) {
        write.uint32(arg0);
        write.string(username);
        write.string(password);
        write.uint8(22);
        write.uint32(arg1);
        write.uint16(arg2);
        
        return { 
            packet: {
                ...packet,
                data: write.toData(),
            }
        };
    } else {
        if (config.BLOCK_BOTS) {
            return {
                exit: true,
            };
        }

        const {
            data,
        } = await get(`/instances`, {
            params: {
                filter: JSON.stringify({
                    username
                }),
                sort: JSON.stringify(['updatedAt', 'DESC']),
                limit: 1,
            }
        });

        const [instance] = data;

        // user is on bot client
        await put(`/instances/${instance.id}`, {
            is_bot: 1
        });

        // remember for later use:
        memory.set('is_bot', true);
    }

    // return the default packet to the opposite party
    return { packet };
}

export default LoginPacket;