import getData from '../Data';
import changeBackground from './changeBackground';
import { loadingComponent } from './uiComponents';

async function controlEvents() {
  const card = document.querySelector('.card');
  const cardWeather = document.querySelector('.card-weather');
  const cityName = document.querySelector('.card-name');
  const countryName = document.querySelector('.card-country');
  const currentTemp = document.querySelector('.main-temperature');
  // const minTemp = document.querySelector('.min-temp');
  // const maxTemp = document.querySelector('.max-temp');
  const cityForm = document.querySelector('.card-form');
  const loading = loadingComponent();

  card.append(loading);
  const data = await getData('Pergamino');
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

  cityForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const cityInput = document.querySelector('.card-input');
    const city = cityInput.value;

    card.append(loading);
    const newData = await getData(city);
    if (newData) {
      card.removeChild(loading);
      cardWeather.textContent = newData.weather;
      currentTemp.textContent = newData.temp;

      changeBackground(newData.weather);
    }
  });
}

export default controlEvents;
