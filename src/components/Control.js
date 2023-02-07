import getData from '../Data';

async function controlEvents() {
  const card = document.querySelector('.card');
  const loading = document.createElement('p');
  const weather = document.querySelector('.weather');
  const mainTemperature = document.querySelector('.main-temperature');
  const cityForm = document.querySelector('.city-form');

  loading.textContent = 'Loading...';
  card.append(loading);
  const data = await getData('Pergamino');
  if (data) {
    card.removeChild(loading);
    weather.textContent = data.weather;
    mainTemperature.textContent = data.temp;
  }
  loading.textContent = 'ERROR';

  cityForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const cityInput = document.querySelector('.city-input');
    const city = cityInput.value;
    loading.textContent = 'Loading...';
    card.append(loading);
    const newData = await getData(city);
    if (newData) {
      card.removeChild(loading);
      weather.textContent = newData.weather;
      mainTemperature.textContent = newData.temp;
    }
    loading.textContent = 'ERROR';
  });
}

export default controlEvents;
