import getData from '../Data';
import changeBackground from './changeBackground';
import loadingComponent from './uiComponents/loadingComponent';
import weatherCard from './uiComponents/cardComponent';
import drawSvgGraphic from './uiComponents/graphicComponent';

function getTempForHour(arr, index = 0) {
  const arrOfDays = [24, 48, 72, 96, 120, 144, 168];
  const newArr = [];
  for (let i = arrOfDays[index] - 24; i < arrOfDays[index]; i += 1) {
    newArr.push(arr[i]);
  }
  return newArr;
}
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
    main.append(drawSvgGraphic(getTempForHour(hourlyTemperature)), gridContainer);
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
      card.dataset.id = index;
      card.addEventListener('click', (event) => { // Evento para dibujar svg por card clickead.
        while (main.firstChild) {
          main.removeChild(main.firstChild);
        }
        main.append(drawSvgGraphic(getTempForHour(
          hourlyTemperature,
          event.target.closest('.card').dataset.id,
        )), gridContainer);
      });
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
