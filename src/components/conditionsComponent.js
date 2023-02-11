function conditionsComponent() {
  const humiditySection = document.createElement('div');
  const humidityPercentage = document.createElement('span');
  const humiditySvg = document.createElement('img');
  const windDeg = document.createElement('p');
  const windSvg = document.createElement('img');
  const windSpeed = document.createElement('p');

  humiditySection.classList.add('card-humidity');

  humiditySvg.src = '../src/images/humidity.svg';
  windSvg.src = '../src/images/wind.svg';

  humidityPercentage.innerText = '40%';
  humiditySection.append(humidityPercentage, humiditySvg);

  return humiditySection;
}

export default conditionsComponent;
