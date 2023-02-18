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

  humiditySvg.src = '../src/images/humidity.svg';
  windSvg.src = '../src/images/wind.svg';
  windDirection.src = '../src/images/arrow.svg';

  windDirection.style = `transform: rotate(${direction}deg)`;

  humiditySection.append(humidityPercentage, humiditySvg);
  windSection.append(windSpeed, windSvg, windDirection);
  conditionsSection.append(humiditySection, windSection);

  return conditionsSection;
}

export default conditionsComponent;
