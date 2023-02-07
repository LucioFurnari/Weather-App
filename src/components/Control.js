import getData from '../Data';

async function controlEvents() {
  const card = document.querySelector('.card');
  const loading = document.createElement('p');
  const weather = document.querySelector('.weather');
  const mainTemperature = document.querySelector('.main-temperature');

  loading.textContent = 'Loading...';
  card.append(loading);
  const data = await getData('Rosario');

  card.removeChild(loading);
  weather.textContent = data.weather;
  mainTemperature.textContent = data.temp;
}

export default controlEvents;
