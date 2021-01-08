async function SiegeActionSQLi({ stream }, packet) {
    const { reader } = stream;
    const read = new reader(packet.data);

    read.uint32();

    const type = read.uint8();

    if (type == 26) {
        read.uint32();
        read.uint16();

        const message = read.string('ascii');

        if (/[^A-Z a-z0-9.,!?]+/g.test(message)) return; // block the edit
        //TODO:
        // Send a message to user that using invalid characters..
    }

   return { packet };
}

export default SiegeActionSQLi;