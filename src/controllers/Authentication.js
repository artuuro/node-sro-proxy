async function Authentication(Event, packet) {
    const { config, stream, memory } = Event;
    const { reader, writer } = stream;
    const { ip } = Event.instance.info;
    const { get, post, put } = Event.api.proxy;

    const write = new writer();
    const read = new reader(packet.data);
    const locale = read.uint8();
    const username = read.string('ascii').toLowerCase();

    const get_instance = await get(`/instances`, {
        params: {
            filter: JSON.stringify({
                username: username
            }),
            sort: JSON.stringify(['updatedAt', 'DESC']),
            limit: 1
        }
    });

    const errorPacket = () => ({
        packet: {
            ...packet,
            opcode: 0xA102,
            data: write.toData()
        },
        target: 'client',
        exit: true
    });

    const get_hwid = memory.get('hwid');

    const instance = get_instance.data.length ? {
        ...get_instance.data[0],
        ip,
        hwid: get_hwid || get_instance.data[0].hwid || false,
    } : {
        username,
        ip,
        hwid: get_hwid || false,
    };

    // Missing HWID
    if (instance.hwid === false) {
        const instance_by_ip = await get(`/instances`, {
            params: {
                filter: JSON.stringify({
                    ip,
                    connected: false
                }),
                sort: JSON.stringify(['updatedAt', 'DESC']),
                limit: 1
            }
        });

        if (instance_by_ip.data.length) {
            instance.hwid = instance_by_ip.data[0].hwid;
        } else {
            write.uint8(2);
            write.uint8(9);

            return errorPacket();
        }
    }

    const [connections_per_ip, connections_per_hwid, blacklist] = await Promise.all(
        [
            await get(`/instances`, {
                params: {
                    select: JSON.stringify(['id']),
                    filter: JSON.stringify({
                        ip: ip,
                        connected: true
                    })
                }
            }),
            await get(`/instances`, {
                params: {
                    filter: JSON.stringify({
                        hwid: instance.hwid,
                        connected: true
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
                        active: true
                    })
                }
            })
        ]
    );

    const [ip_count, hwid_count] = [
        connections_per_ip.data.length,
        connections_per_hwid.data.length
    ];

    // HWID Blacklisted
    if (blacklist.data.length) {
        write.uint8(2);
        write.uint8(2);
        write.uint8(3);

        return errorPacket();
    }

    // IP Blacklisted
    if (ip_count === config.LIMITS.IP || hwid_count === config.LIMITS.HWID) {
        write.uint8(2);
        write.uint8(10);

        return errorPacket();
    }

    if (instance.id) {
        await put(`/instances/${instance.id}`, {
            ip: instance.ip,
            hwid: instance.hwid
        });
    } else {
        await post(`/instances`, {
            ...instance
        });
    }

    return { packet };
}

export default Authentication;