function conditionsComponent() {
  const humidity = document.createElement('p');
  // const windDeg = document.createElement('p');
  // const windSpeed = document.createElement('p');
  humidity.classList.add('card-humidity');
  const humiditySvg = document.createElement('img');
  humiditySvg.src = '../src/images/humidity.svg';

  humidity.append(humiditySvg);

  return humidity;
}

export default conditionsComponent;
