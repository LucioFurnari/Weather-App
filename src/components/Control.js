import getData from '../Data';
import changeBackground from './changeBackground';
import { loadingComponent } from './uiComponents';

async function setUi(location = 'Pergamino') {
  const card = document.querySelector('.card');
  const cardWeather = document.querySelector('.card-weather');
  const cityName = document.querySelector('.card-name');
  const countryName = document.querySelector('.card-country');
  const currentTemp = document.querySelector('.main-temperature');

  const loading = loadingComponent();
  card.append(loading);

  const data = await getData(location);
  if (data) {
    const {
      city,
      country,
      weather,
      temp,
    } = data;
    card.removeChild(loading);

    cityName.textContent = city;
    countryName.textContent = country;
    cardWeather.textContent = weather;
    currentTemp.textContent = `${temp} C°`;

    changeBackground(data.weather);
  }
}

async function searchCity(e) {
  const cardInput = document.querySelector('.card-input');
  e.preventDefault();
  setUi(cardInput.value);
}

function loadUi() {
  setUi();
  const cityForm = document.querySelector('.card-form');
  cityForm.addEventListener('submit', searchCity);
}
export default loadUi;
