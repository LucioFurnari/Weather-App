import temperatureSection from './tempComponent';
import cityComponent from './namesComponent';
import conditionsComponent from './conditionsComponent';

function getWeather(code) {
  const weather = {
    weatherName: '',
    weatherIcon: '',
  };
  switch (code) {
    case 0:
      weather.weatherName = 'Clear';
      weather.weatherIcon = 'wi-day-sunny';
      break;
    case 1:
    case 2:
    case 3:
      weather.weatherName = 'Clouds';
      weather.weatherIcon = 'wi-cloudy';
      break;
    case 61:
    case 63:
    case 65:
    case 66:
    case 67:
    case 80:
    case 81:
    case 82:
      weather.weatherName = 'Rain';
      weather.weatherIcon = 'wi-rain';
      break;
    case 95:
    case 96:
    case 99:
      weather.weatherName = 'Thunderstorm';
      weather.weatherIcon = 'wi-thunderstorm';
      break;
    case 45:
    case 48:
      weather.weatherName = 'Fog';
      weather.weatherIcon = 'wi-fog';
      break;
    case 51:
    case 53:
    case 55:
    case 56:
    case 57:
      weather.weatherName = 'Drizzle';
      weather.weatherIcon = 'wi-sleet';
      break;
    case 71:
    case 73:
    case 75:
    case 77:
    case 85:
    case 86:
      weather.weatherName = 'Snow';
      weather.weatherIcon = 'wi-snow';
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

  const wObjet = getWeather(weatherCode);
  weather.innerHTML = `
    <p>${wObjet.weatherName}</p>
    <i class="wi ${wObjet.weatherIcon}"></i>
  `;

  card.append(dayOfWeek, weather, citySection, tempSection, conditionSection);

  return card;
}

export default weatherCard;
