async function Authentication({ config, stream, memory, info, api }, packet) {
    const { reader, writer } = stream;
    const { ip } = info;
    const { get, post, put } = api.proxy;

    const write = new writer();
    const read = new reader(packet.data);

    const {
        locale,
        username,
        password,
        serverId,
    } = {
        locale: read.uint8(),
        username: read.string('ascii').toLowerCase(),
        password: read.string('ascii'),
        serverId: read.uint16(),
    };

    const { data: [ db_instance ] } = await get(`/instances`, {
        params: {
            filter: JSON.stringify({
                username
            }),
            sort: JSON.stringify(['updatedAt', 'DESC']),
            limit: 1
        }
    });

    memory.set('username', username);
    if (db_instance) memory.set('session', db_instance.id);

    const errorPacket = () => ({
        packet: {
            ...packet,
            opcode: 0xA102,
            data: write.toData()
        },
        target: 'client',
        exit: true
    });

    const hwid = memory.get('hwid');

    const instance = db_instance ? { 
        ...db_instance, 
        ip, 
        hwid: hwid || db_instance.hwid || false 
    } : {
        username, 
        ip, 
        hwid: hwid || false,
    };

    // Missing HWID
    if (!instance.hwid) {
        write.uint8(2);
        write.uint8(9);

        return errorPacket();
    }

    const [
        connections_per_ip, 
        connections_per_hwid, 
        blacklist
    ] = await Promise.all(
        [
            await get(`/instances`, {
                params: {
                    select: JSON.stringify(['id']),
                    filter: JSON.stringify({
                        ip: ip,
                        connected: 1
                    })
                }
            }),
            await get(`/instances`, {
                params: {
                    filter: JSON.stringify({
                        hwid: instance.hwid,
                        connected: 1
                    })
                }
            }),
            await get(`/blacklist`, {
                params: {
                    sort: JSON.stringify(['createdAt']),
                    filter: JSON.stringify({
                        remote: [
                            instance.hwid, 
                            instance.ip
                        ],
                        active: 1
                    })
                }
            })
        ]
    );

    const [ip_count, hwid_count] = [
        connections_per_ip.data.length,
        connections_per_hwid.data.length
    ];

    // Blacklist:
    if (blacklist.data.length) {
        write.uint8(2);
        write.uint8(2);
        write.uint8(3);

        return errorPacket();
    }

    // IP Limits:
    if (ip_count >= parseInt(config.LIMITS.IP) || hwid_count >= parseInt(config.LIMITS.HWID)) {

        write.uint8(2);
        write.uint8(10);

        return errorPacket();
    }

    if (instance.id) {
        await put(`/instances/${instance.id}`, {
            ip: instance.ip,
            hwid: instance.hwid,
        });
    } else {
        await post(`/instances`, {
            ...instance,
            connected: 0,
            is_bot: 0,
        });
    }

    // if (locale !== 22) {
    //     write.uint8(22);
    //     write.string(username);
    //     write.string(password);
    //     write.uint16(serverId);
    //     packet.data = write.toData();
    // }

    

    return { packet };
}

export default Authentication;