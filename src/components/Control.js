import getData from '../Data';
import changeBackground from './changeBackground';
import loadingComponent from './uiComponents/loadingComponent';
import weatherCard from './uiComponents/cardComponent';

async function setUiContent(location = 'Pergamino') {
  const main = document.querySelector('main');
  const loaded = loadingComponent();
  main.append(loaded);

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
      dayOfWeek,
      numberDate,
      calendarYear,
    } = data;

    changeBackground(weatherCode[0]);
    while (main.firstChild) {
      main.removeChild(main.firstChild);
    }
    dailyTime.forEach((day, index) => {
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
