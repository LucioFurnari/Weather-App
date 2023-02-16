import { fetchAPI, newFetch } from './Fetch';

function getHours(time) {
  const actualDate = new Date().getHours();
  const index = time.findIndex((date) => {
    const tempTime = new Date(date).getHours();
    if (tempTime === actualDate) {
      return date;
    }
    return false;
  });
  return index;
}
async function newGetData(location) {
  const data = await newFetch(location);
  const {
    time,
    temperature_2m: actualTemperature,
    apparent_temperature: apparentTemperature,
    weathercode: weatherCode,
    winddirection_10m: windDirection,
    windspeed_10m: windSpeed,
  } = data.hourly;
  const {
    time: dailyTime,
    temperature_2m_max: dailyTempMax,
    temperature_2m_min: dailyTempMin,
    weathercode: dailyWeatherCode,
  } = data.daily;
  const actualTime = getHours(time);

  const newData = {
    actualTemperature: actualTemperature[actualTime],
    apparentTemperature: apparentTemperature[actualTime],
    weatherCode: weatherCode[actualTime],
    windDirection: windDirection[actualTime],
    windSpeed: windSpeed[actualTime],
    dailyTime,
    dailyTempMax,
    dailyTempMin,
    dailyWeatherCode,
  };
  console.log(newData);
}
newGetData('Pergamino');

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
