import getData from '../Data';
import changeBackground from './changeBackground';
import loadingComponent from './uiComponents/loadingComponent';
import weatherCard from './uiComponents/cardComponent';
import drawSvgGraphic from './uiComponents/graphicComponent';

async function setUiContent(location = 'Pergamino') {
  const main = document.querySelector('main');
  const gridContainer = document.createElement('div');
  gridContainer.classList.add('grid');
  const loaded = loadingComponent();
  main.classList.add('column');
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }
  main.append(loaded);

  const data = await getData(location);
  if (data) {
    const {
      country,
      name,
      state,
      hourlyTemperature,
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

    while (main.firstChild) {
      main.removeChild(main.firstChild);
    }
    main.append(drawSvgGraphic(hourlyTemperature), gridContainer);
    changeBackground(weatherCode[0]);
    while (gridContainer.firstChild) {
      gridContainer.removeChild(gridContainer.firstChild);
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
      gridContainer.append(card);
    });
  }
}

async function searchCity(e) {
  const formInput = document.querySelector('.form-input');
  const inputValue = formInput.value.trim();
  const reg = /^[a-zA-Z ]+$/g;
  e.preventDefault();
  if (reg.test(inputValue)) {
    setUiContent(inputValue);
  } else {
    console.error('Incorrect Input');
  }
}

function loadUiContent() {
  setUiContent();
  const cityForm = document.querySelector('.city-form');
  cityForm.addEventListener('submit', searchCity);
}
export default loadUiContent;
