import temperatureSection from './tempComponent';
import cityComponent from './namesComponent';

export function weatherCard() {
  const card = document.createElement('div');
  const weather = document.createElement('p');
  const cityForm = document.createElement('form');
  const cityInput = document.createElement('input');
  const submitButton = document.createElement('button');
  const tempSection = temperatureSection();
  const citySection = cityComponent();

  card.classList.add('card');
  weather.classList.add('card-weather');
  cityForm.classList.add('card-form');
  cityInput.classList.add('card-input');

  submitButton.textContent = 'Submit';

  cityForm.append(cityInput, submitButton);
  card.append(cityForm, weather, citySection, tempSection);

  const root = document.querySelector('#root');
  root.append(card);
}

export function loadingComponent() {
  const loading = document.createElement('p');
  loading.textContent = 'Loading...';
  return loading;
}
