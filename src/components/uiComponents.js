function weatherCard() {
  const card = document.createElement('div');
  const weather = document.createElement('p');
  const mainTemperature = document.createElement('p');

  card.classList.add('card');
  weather.classList.add('weather');
  mainTemperature.classList.add('main-temperature');

  card.append(weather, mainTemperature);

  const root = document.querySelector('#root');
  root.append(card);
}

export default weatherCard;
