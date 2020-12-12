async function AutoCaptcha(Event, packet) {
    const { serverSocket, security } = Event.instance;
    const { writer } = Event.stream;

    const write = new writer();
    write.string(Event.config.CAPTCHA);

    return {
        packet: {
            ...packet,
            encrypted: false,
            opcode: 0x6323,
            data: write.toData()
        },
        target: 'remote'
    };
}

export default AutoCaptcha;