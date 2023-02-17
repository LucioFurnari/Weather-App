import temperatureSection from './tempComponent';
import cityComponent from './namesComponent';
import conditionsComponent from './conditionsComponent';

function weatherCard(props) {
  const {
    dayOfTheWeek,
    tempMax,
    tempMin,
    actualTemperature,
  } = props;
  const card = document.createElement('div');
  const dayOfWeek = document.createElement('p');
  const weather = document.createElement('p');

  const tempSection = temperatureSection(actualTemperature, tempMax, tempMin);
  const citySection = cityComponent();
  const conditionSection = conditionsComponent();

  card.classList.add('card');
  dayOfWeek.textContent = dayOfTheWeek;
  weather.classList.add('card-weather');

  card.append(dayOfWeek, weather, citySection, tempSection, conditionSection);

  return card;
}

export default weatherCard;
