function conditionsComponent() {
  const humiditySection = document.createElement('div');
  const humidityPercentage = document.createElement('span');
  const humiditySvg = document.createElement('img');
  const windSection = document.createElement('div');
  const windDeg = document.createElement('span');
  const windSvg = document.createElement('img');
  const windSpeed = document.createElement('span');

  humiditySection.classList.add('card-humidity', 'row');
  windSection.classList.add('card-wind', 'row');

  humiditySvg.src = '../src/images/humidity.svg';
  windSvg.src = '../src/images/wind.svg';

  humidityPercentage.innerText = '40%';
  humiditySection.append(humidityPercentage, humiditySvg);
  windSection.append(windDeg, windSvg);

  return humiditySection;
}

export default conditionsComponent;
