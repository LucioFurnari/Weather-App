import getData from '../Data';
import changeBackground from './changeBackground';
import loadingComponent from './uiComponents/loadingComponent';
import weatherCard from './uiComponents/cardComponent';

async function setUiContent(location = 'Pergamino') {
  const main = document.querySelector('main');

  const data = await getData(location);
  if (data) {
    const {
      country,
      name,
      state,
      actualTemperature,
      apparentTemperature,
      weatherCode,
      humidity,
      windDirection,
      windSpeed,
      dailyTime,
      dailyTempMax,
      dailyTempMin,
      dailyWeatherCode,
      listOfDays,
      dayOfWeek,
      numberDate,
      calendarYear,
    } = data;
    changeBackground(dailyWeatherCode[0]);
    dailyTime.map((day, index) => {
      const props = {
        country,
        name,
        state,
        dayNumber: numberDate[index],
        month: calendarYear[index],
        dayOfTheWeek: dayOfWeek[index],
        tempMax: dailyTempMax[index],
        tempMin: dailyTempMin[index],
        actualTemperature: actualTemperature[index],
        apparentTemperature: apparentTemperature[index],
        weatherCode: weatherCode[index],
        windDirection: windDirection[index],
        windSpeed: windSpeed[index],
        humidity: humidity[index],
      };
      const card = weatherCard(props);
      card.classList.add('loaded');
      main.append(card);
    });
    // const card = weatherCard();
    // main.append(card);
    // const cardWeather = document.querySelector('.card-weather');
    // const cityName = document.querySelector('.card-name');
    // const countryName = document.querySelector('.card-country');
    // const currentTemp = document.querySelector('.main-temperature');
    // card.classList.add('loaded');
    // // card.removeChild(loading);

    // cityName.textContent = city;
    // countryName.textContent = country;
    // cardWeather.textContent = weather;
    // currentTemp.textContent = `${temp} C°`;

  }
}

async function searchCity(e) {
  const cardInput = document.querySelector('.card-input');
  e.preventDefault();
  setUiContent(cardInput.value);
}

function loadUiContent() {
  setUiContent();
  const cityForm = document.querySelector('.card-form');
  cityForm.addEventListener('submit', searchCity);
}
export default loadUiContent;
