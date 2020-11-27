async function WeatherUpdate(Event, packet) {
    const { config, stream } = Event;
    const { reader, writer } = stream;
    const read = new reader(packet.data);
    const write = new writer();
    const type = read.uint8();
    const intensity = read.uint8();

    /**
     * type 
     * 1 normal, 
     * 2 raining,
     * 3 snowing?
     */
    write.uint8(3); // < = type
    write.uint8(intensity); // change intensity

    return {
        ...packet,
       data: write.toData()
    };
}

export default WeatherUpdate;