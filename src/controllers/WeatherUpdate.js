async function WeatherUpdate(Event, packet) {
    const { config, stream } = Event;
    const { writer } = stream;
    const { type, intensity } = config.weather;

    const write = new writer();

    write.uint8(type);
    write.uint8(intensity);

    return {
        packet: {
            ...packet,
           data: write.toData()
        }
    };
}

export default WeatherUpdate;