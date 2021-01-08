import { sample } from 'lodash';

async function WeatherUpdate({ config, stream }, packet) {
    const { writer } = stream;
    const { type, intensity } = config.weather;

    const selectedWeather = sample(type);
    const selectedIntensity = sample(intensity);

    const write = new writer();

    write.uint8(selectedWeather);
    write.uint8(selectedIntensity);

    return {
        packet: {
            ...packet,
           data: write.toData()
        }
    };
}

export default WeatherUpdate;