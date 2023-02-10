function cityComponent() {
  const container = document.createElement('div');
  const cityName = document.createElement('p');
  const countryName = document.createElement('p');

  container.classList.add('card-names-container');
  cityName.classList.add('card-name');
  countryName.classList.add('card-country');

  container.append(cityName, countryName);

  return container;
}

export default cityComponent;
