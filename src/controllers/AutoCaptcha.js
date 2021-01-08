async function AutoCaptcha({ stream, config }, packet) {
    const { writer } = stream;

    const write = new writer();
    write.string(config.CAPTCHA);

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