import temperatureSection from './tempComponent';
import cityComponent from './namesComponent';
import conditionsComponent from './conditionsComponent';

function getWeather(code) {
  let weather;
  switch (code) {
    case 0:
      weather = 'Clear';
      break;
    case 1:
    case 2:
    case 3:
      weather = 'Clouds';
      break;
    case 61:
    case 63:
    case 65:
    case 66:
    case 67:
    case 80:
    case 81:
    case 82:
      weather = 'Rain';
      break;
    case 95:
    case 96:
    case 99:
      weather = 'Thunder';
      break;
    case 45:
    case 48:
      weather = 'Mist';
      break;
    case 51:
    case 53:
    case 55:
    case 56:
    case 57:
      weather = 'Drizzle';
      break;
    case 71:
    case 73:
    case 75:
    case 77:
    case 85:
    case 86:
      weather = 'Snow';
      break;
    default:
      break;
  }
  return weather;
}

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

  weather.textContent = getWeather(weatherCode);

  card.append(dayOfWeek, weather, citySection, tempSection, conditionSection);

  return card;
}

export default weatherCard;
