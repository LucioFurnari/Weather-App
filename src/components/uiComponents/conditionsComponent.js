function conditionsComponent() {
  const conditionsSection = document.createElement('div');
  const humiditySection = document.createElement('div');
  const humidityPercentage = document.createElement('span');
  const humiditySvg = document.createElement('img');
  const windSection = document.createElement('div');
  const windSvg = document.createElement('img');
  const windSpeed = document.createElement('span');

  conditionsSection.classList.add('condition-section', 'row');
  humiditySection.classList.add('humidity-section', 'row');
  windSection.classList.add('card-wind', 'row');
  humidityPercentage.classList.add('card-humidity');
  windSpeed.classList.add('card-speed');

  humiditySvg.src = '../src/images/humidity.svg';
  windSvg.src = '../src/images/wind.svg';

  humiditySection.append(humidityPercentage, humiditySvg);
  windSection.append(windSpeed, windSvg);
  conditionsSection.append(humiditySection, windSection);

  return conditionsSection;
}

export default conditionsComponent;
