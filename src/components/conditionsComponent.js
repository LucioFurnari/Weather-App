function conditionsComponent() {
  const conditionsSection = document.createElement('div');
  const humiditySection = document.createElement('div');
  const humidityPercentage = document.createElement('span');
  const humiditySvg = document.createElement('img');
  const windSection = document.createElement('div');
  const windDeg = document.createElement('span');
  const windSvg = document.createElement('img');
  const windSpeed = document.createElement('span');

  conditionsSection.classList.add('condition-section', 'row');
  humiditySection.classList.add('card-humidity', 'row');
  windSection.classList.add('card-wind', 'row');

  humiditySvg.src = '../src/images/humidity.svg';
  windSvg.src = '../src/images/wind.svg';

  humidityPercentage.innerText = '40%';
  humiditySection.append(humidityPercentage, humiditySvg);
  windSection.append(windDeg, windSvg);
  conditionsSection.append(humiditySection, windSection);

  return conditionsSection;
}

export default conditionsComponent;
