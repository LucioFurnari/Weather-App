import { fetchAPI } from './Fetch';

async function getData(location) {
  const data = await fetchAPI(location);
  if (data.cod !== '404' && data.cod !== '400') {
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
      city: data.name, // Check for the Geocoding API to get the exact location
      country: data.sys.country, // Check for the Geocoding API to get the exact location
    };
    return newData;
  }
  return false;
}

export default getData;
