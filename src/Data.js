import { fetchAPI } from './Fetch';
import {
  getHours, getDays, getDate, getMonths, monthList, dayOfTheWeek,
} from './dateFunctions';

function getActualData(arr, indexArr) { // Devuelve las condiciones de la hora actual de cada dia.
  const newArr = [];
  arr.forEach((elem, index) => {
    indexArr.forEach((i) => {
      if (index === i) {
        newArr.push(elem);
      }
    });
  });
  return newArr;
}
async function getData(location) {
  const returnedData = await fetchAPI(location);
  const { data, geoData } = returnedData;
  const [{ country, name, state }] = geoData;
  const {
    time, // Cada hora de todos los dias.
    temperature_2m: hourlyTemperature,
    apparent_temperature: apparentTemperature,
    weathercode: weatherCode,
    winddirection_10m: windDirection,
    windspeed_10m: windSpeed,
    relativehumidity_2m: humidity,
  } = data.hourly;
  console.table(time);
  const {
    time: dailyTime,
    temperature_2m_max: dailyTempMax,
    temperature_2m_min: dailyTempMin,
    weathercode: dailyWeatherCode,
  } = data.daily;

  const actualTime = getHours(time);
  const listOfDays = getDays(dailyTime);
  const dayOfWeek = dayOfTheWeek(listOfDays);
  const listOfMonths = getMonths(dailyTime);
  const calendarYear = monthList(getMonths(dailyTime));
  const numberDate = getDate(dailyTime);

  const newData = {
    country,
    name,
    state,
    hourlyTemperature, // Temperatura de cada hora de todos los dias.
    actualTemperature: getActualData(hourlyTemperature, actualTime), // Condición actual de cada dia
    apparentTemperature: getActualData(apparentTemperature, actualTime), // *
    weatherCode: getActualData(weatherCode, actualTime), // *
    windDirection: getActualData(windDirection, actualTime), //*
    windSpeed: getActualData(windSpeed, actualTime), // *
    humidity: getActualData(humidity, actualTime), // *
    dailyTime,
    dailyTempMax,
    dailyTempMin,
    dailyWeatherCode,
    listOfDays,
    dayOfWeek,
    listOfMonths,
    numberDate,
    calendarYear,
  };
  return newData;
}

export default getData;
