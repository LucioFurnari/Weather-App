import temperatureSection from './tempComponent';
import cityComponent from './namesComponent';
import conditionsComponent from './conditionsComponent';

function weatherCard(props) {
  const {
    country,
    name,
    state,
    dayOfTheWeek,
    dayNumber,
    month,
    tempMax,
    tempMin,
    actualTemperature,
    apparentTemperature,
    weatherCode,
    windDirection,
    windSpeed,
    humidity,
  } = props;
  const card = document.createElement('div');
  const dayOfWeek = document.createElement('p');
  const weather = document.createElement('p');

  const tempSection = temperatureSection(actualTemperature, tempMax, tempMin);
  const citySection = cityComponent(name, country);
  const conditionSection = conditionsComponent(humidity, windSpeed, windDirection);

  card.classList.add('card');
  dayOfWeek.textContent = `${dayOfTheWeek} ${dayNumber} ${month}`;
  weather.classList.add('card-weather');

  card.append(dayOfWeek, weather, citySection, tempSection, conditionSection);

  return card;
}

export default weatherCard;
