import getData from '../Data';
import changeBackground from './changeBackground';
import { loadingComponent } from './uiComponents';

async function controlEvents() {
  const card = document.querySelector('.card');
  const weather = document.querySelector('.weather');
  const currentTemp = document.querySelector('.main-temperature');
  // const minTemp = document.querySelector('.min-temp');
  // const maxTemp = document.querySelector('.max-temp');
  const cityForm = document.querySelector('.city-form');
  const loading = loadingComponent();

  card.append(loading);
  const data = await getData('Pergamino');
  if (data) {
    card.removeChild(loading);
    weather.textContent = data.weather;
    currentTemp.textContent = `${data.temp} C°`;

    changeBackground(data.weather);
  }

  cityForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const cityInput = document.querySelector('.city-input');
    const city = cityInput.value;

    card.append(loading);
    const newData = await getData(city);
    if (newData) {
      card.removeChild(loading);
      weather.textContent = newData.weather;
      currentTemp.textContent = newData.temp;

      changeBackground(newData.weather);
    }
  });
}

export default controlEvents;
