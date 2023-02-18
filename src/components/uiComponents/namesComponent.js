function cityComponent(city, country) {
  const container = document.createElement('div');
  const cityName = document.createElement('p');
  const countryName = document.createElement('p');

  container.classList.add('card-names-container', 'row');
  cityName.classList.add('card-name');
  countryName.classList.add('card-country');

  cityName.textContent = city;
  countryName.textContent = country;

  container.append(cityName, countryName);

  return container;
}

export default cityComponent;
