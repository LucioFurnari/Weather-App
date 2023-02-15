import temperatureSection from './tempComponent';
import cityComponent from './namesComponent';
import conditionsComponent from './conditionsComponent';

function weatherCard() {
  const card = document.createElement('div');
  const weather = document.createElement('p');

  const tempSection = temperatureSection();
  const citySection = cityComponent();
  const conditionSection = conditionsComponent();

  card.classList.add('card');
  weather.classList.add('card-weather');

  card.append(weather, citySection, tempSection, conditionSection);

  const root = document.querySelector('#root');
  root.append(card);
}

export default weatherCard;
