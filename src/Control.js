import getData from './Data';
import changeBackground from './components/changeBackground';
import loadingComponent from './components/uiComponents/loadingComponent';
import weatherCard from './components/uiComponents/cardComponent';
import drawSvgGraphic from './components/uiComponents/graphicComponent';

function getTempForHour(arr, index = 0) {
  const arrOfDays = [24, 48, 72, 96, 120, 144, 168];
  const newArr = [];
  for (let i = arrOfDays[index] - 24; i < arrOfDays[index]; i += 1) {
    newArr.push(arr[i]);
  }
  return newArr;
}
let scaleFlag = false;
let listener;
function changeScale(event, arr) {
  const { target } = event;
  const listOFTempSection = document.querySelectorAll('.main-temperature');
  const listOfMinTemp = document.querySelectorAll('.min-temp');
  const listOfMaxTemp = document.querySelectorAll('.max-temp');
  if (listOFTempSection.length) {
    const fahrenheit = arr.map((item) => parseInt((item * 1.8) + 32, 10));
    if (!scaleFlag) {
      fahrenheit.forEach((item, index) => {
        target.textContent = '°C';
        listOFTempSection[index].textContent = `${item} °F`;
        listOfMinTemp[index].textContent = `${item} °F Min`;
        listOfMaxTemp[index].textContent = `${item} °F Max`;
      });
    } else {
      target.textContent = '°F';
      arr.forEach((item, index) => {
        listOFTempSection[index].textContent = `${item} °C`;
        listOfMinTemp[index].textContent = `${item} °C Min`;
        listOfMaxTemp[index].textContent = `${item} °C Max`;
      });
    }
    scaleFlag = !scaleFlag;
  }
}
function addListener(arr, flag) {
  const tempScaleButton = document.querySelector('.change-button');
  if (scaleFlag) {
    tempScaleButton.textContent = '°F';
  }
  tempScaleButton.removeEventListener('click', listener);
  listener = (e) => { changeScale(e, arr, flag); };
  tempScaleButton.addEventListener('click', listener);
}
async function setUiContent(location = 'Pergamino') {
  const main = document.querySelector('main');
  // const tempScaleButton = document.querySelector('.change-button');
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
    const message = document.querySelector('.form-message'); // Mensaje de error
    message.textContent = '';
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
      card.dataset.id = index;
      card.addEventListener('click', (event) => { // Evento para dibujar svg por card clickead.
        const cardList = document.querySelectorAll('.card');
        cardList.forEach((elem) => elem.classList.remove('selected'));
        while (main.firstChild) {
          main.removeChild(main.firstChild);
        }
        card.classList.add('selected');
        main.append(drawSvgGraphic(getTempForHour(
          hourlyTemperature,
          event.target.closest('.card').dataset.id,
        )), gridContainer);
      });
      gridContainer.append(card);
    });

    addListener(actualTemperature);
    scaleFlag = false;
  } else {
    main.removeChild(loaded);
    const message = document.querySelector('.form-message'); // Mensaje de error
    message.textContent = 'City not found';
  }
}

async function searchCity(e) {
  e.preventDefault();
  const formInput = document.querySelector('.form-input');
  const inputValue = formInput.value.trim();
  setUiContent(inputValue);
}

function loadUiContent() {
  setUiContent();
  const formInput = document.querySelector('.form-input');
  if (formInput.validity.valueMissing) {
    formInput.setCustomValidity("Don't leave the input empty");
  }
  formInput.addEventListener('input', (ev) => {
    const input = ev.target;
    const reg = /^[a-zA-Z ]+$/g;
    const isValid = reg.test(input.value.trim());
    if (!isValid) {
      input.setCustomValidity('Use only alphabetic characters');
    } else {
      input.setCustomValidity('');
    }
  });
  const cityForm = document.querySelector('.city-form');
  cityForm.addEventListener('submit', searchCity);
}
export default loadUiContent;
