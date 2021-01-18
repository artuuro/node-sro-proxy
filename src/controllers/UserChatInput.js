async function UserChatInput({ config, stream, api, info, memory }, packet) {
    const { post } = api.proxy;
    const { reader } = stream;
    const { CHAT_TYPES } = config;
    const read = new reader(packet.data);
    const type = read.uint8();
    const typeName = CHAT_TYPES[type] || 'Unknown';

    read.uint8();

    const username = memory.get('username');

    const message = type == 2 ? {
        receiver: read.string(),
        message: read.string()
    } : {
        message: read.string()
    };

    console.log(`[${JSON.stringify(info)}]\r\n[CHAT](${type})[${typeName}]->${JSON.stringify(message)}`);

    return { packet };
}

export default UserChatInput;