import fetchAPI from './Fetch';

async function getData(location) {
  const data = await fetchAPI(location);
  if (data.cod !== '404') {
    const [{ main: weather, description: weatherDescription }] = data.weather;
    const { deg: windDeg, speed: windSpeed } = data.wind;
    const {
      temp,
      temp_max: tempMax,
      temp_min: tempMin,
      humidity,
    } = data.main;
    const newData = {
      weather,
      temp,
      tempMax,
      tempMin,
      humidity,
      windDeg,
      windSpeed,
      weatherDescription,
      timezone: new Date(data.timezone * 1000).toISOString().slice(11, 19),
    };
    return newData;
  }
  return false;
}

export default getData;
