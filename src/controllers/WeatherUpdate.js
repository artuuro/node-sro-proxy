async function WeatherUpdate(Event, packet) {
    const { config, stream } = Event;
    const { writer } = stream;
    const { type, intensity } = config.weather;

    write.uint8(type);
    write.uint8(intensity);

    return {
        ...packet,
       data: write.toData()
    };
}

export default WeatherUpdate;