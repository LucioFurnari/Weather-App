export function weatherCard() {
  const card = document.createElement('div');
  const weather = document.createElement('p');
  const mainTemperature = document.createElement('p');
  const cityForm = document.createElement('form');
  const cityInput = document.createElement('input');
  const submitButton = document.createElement('button');

  card.classList.add('card');
  weather.classList.add('weather');
  mainTemperature.classList.add('main-temperature');
  cityForm.classList.add('city-form');
  cityInput.classList.add('city-input');

  submitButton.textContent = 'Submit';

  cityForm.append(cityInput, submitButton);
  card.append(cityForm, weather, mainTemperature);

  const root = document.querySelector('#root');
  root.append(card);
}

export function loadingComponent() {
  const loading = document.createElement('p');
  loading.textContent = 'Loading...';
  return loading;
}
