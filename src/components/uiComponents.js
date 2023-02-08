import temperatureSection from './tempComponent';

export function weatherCard() {
  const card = document.createElement('div');
  const weather = document.createElement('p');
  const cityForm = document.createElement('form');
  const cityInput = document.createElement('input');
  const submitButton = document.createElement('button');
  const tempSection = temperatureSection();

  card.classList.add('card');
  weather.classList.add('weather');
  cityForm.classList.add('city-form');
  cityInput.classList.add('city-input');

  submitButton.textContent = 'Submit';

  cityForm.append(cityInput, submitButton);
  card.append(cityForm, weather, tempSection);

  const root = document.querySelector('#root');
  root.append(card);
}

export function loadingComponent() {
  const loading = document.createElement('p');
  loading.textContent = 'Loading...';
  return loading;
}
