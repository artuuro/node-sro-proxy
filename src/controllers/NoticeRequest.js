async function NoticeRequest({
    stream: {
        writer,
    }
}, packet) {
    const write = new writer();

    write.uint8(22);

    return {
        packet: {
            ...packet,
            data: write.toData()
        },
    };
}

export default NoticeRequest;