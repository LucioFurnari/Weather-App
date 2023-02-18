import { fetchAPI } from './Fetch';

function getHours(time) {
  const actualDate = new Date().getHours();
  const list = [];
  time.forEach((date, index) => {
    const tempTime = new Date(date).getHours();
    if (tempTime === actualDate) {
      list.push(index);
    }
  });
  return list;
}
function getDays(date) {
  const listOfDays = [];
  const actualHour = new Date().getHours();
  date.map((day) => {
    const newDate = new Date(`${day} ${actualHour}:00:00`);
    const newDay = newDate.getDay();
    listOfDays.push(newDay);
    return false;
  });
  return listOfDays;
}
function getDate(date) {
  const listOfDate = [];
  const actualHour = new Date().getHours();
  date.map((day) => {
    const newDate = new Date(`${day} ${actualHour}:00:00`);
    const numberDate = newDate.getDate();
    listOfDate.push(numberDate);
    return false;
  });
  return listOfDate;
}
function getMonths(date) {
  const listOfMonths = [];
  const actualHour = new Date().getHours();
  date.map((day) => {
    const newDate = new Date(`${day} ${actualHour}:00:00`);
    const newDay = newDate.getMonth();
    listOfMonths.push(newDay);
    return false;
  });
  return listOfMonths;
}
function monthList(date) {
  const months = [];
  date.map((month) => {
    switch (month) {
      case 0:
        months.push('January');
        break;
      case 1:
        months.push('February');
        break;
      case 2:
        months.push('March');
        break;
      case 3:
        months.push('April');
        break;
      case 4:
        months.push('May');
        break;
      case 5:
        months.push('June');
        break;
      case 6:
        months.push('July');
        break;
      case 7:
        months.push('August');
        break;
      case 8:
        months.push('September');
        break;
      case 9:
        months.push('October');
        break;
      case 10:
        months.push('November');
        break;
      case 11:
        months.push('December');
        break;
      default:
        break;
    }
    return false;
  });
  return months;
}
function dayOfTheWeek(date) {
  const dayOfWeek = [];
  date.map((day) => {
    switch (day) {
      case 0:
        dayOfWeek.push('Sunday');
        break;
      case 1:
        dayOfWeek.push('Monday');
        break;
      case 2:
        dayOfWeek.push('Tuesday');
        break;
      case 3:
        dayOfWeek.push('Wednesday');
        break;
      case 4:
        dayOfWeek.push('Thursday');
        break;
      case 5:
        dayOfWeek.push('Friday');
        break;
      case 6:
        dayOfWeek.push('Saturday');
        break;
      default:
        break;
    }
    return false;
  });
  return dayOfWeek;
}
function getActualData(arr, indexArr) {
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
    time,
    temperature_2m: actualTemperature,
    apparent_temperature: apparentTemperature,
    weathercode: weatherCode,
    winddirection_10m: windDirection,
    windspeed_10m: windSpeed,
    relativehumidity_2m: humidity,
  } = data.hourly;
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
    actualTemperature: getActualData(actualTemperature, actualTime),
    apparentTemperature: getActualData(apparentTemperature, actualTime),
    weatherCode: getActualData(weatherCode, actualTime),
    windDirection: getActualData(windDirection, actualTime),
    windSpeed: getActualData(windSpeed, actualTime),
    humidity: getActualData(humidity, actualTime),
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
  console.log(newData);
  return newData;
}

export default getData;
