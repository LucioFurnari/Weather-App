import humidityImage from '../../images/humidity.svg';
import windImage from '../../images/wind.svg';
import windDirectionImage from '../../images/arrow.svg';

function conditionsComponent(humidity, windS, direction) {
  const conditionsSection = document.createElement('div');
  const humiditySection = document.createElement('div');
  const humidityPercentage = document.createElement('span');
  const windSpeed = document.createElement('span');
  const windDirection = document.createElement('img');
  const humiditySvg = document.createElement('img');
  const windSection = document.createElement('div');
  const windSvg = document.createElement('img');

  conditionsSection.classList.add('condition-section', 'row');
  humiditySection.classList.add('humidity-section', 'row');
  windSection.classList.add('card-wind', 'row');
  humidityPercentage.classList.add('card-humidity');
  windSpeed.classList.add('card-speed');
  windDirection.classList.add('card-direction');

  humidityPercentage.textContent = humidity;
  windSpeed.textContent = windS;

  humiditySvg.src = humidityImage;
  windSvg.src = windImage;
  windDirection.src = windDirectionImage;

  windDirection.style = `transform: rotate(${direction}deg)`;

  humiditySection.append(humidityPercentage, humiditySvg);
  windSection.append(windSpeed, windSvg, windDirection);
  conditionsSection.append(humiditySection, windSection);

  return conditionsSection;
}

export default conditionsComponent;
