function temperatureSection(temp, max, min) {
  const tempSection = document.createElement('div');
  const tempSeparation = document.createElement('div');
  const currentTemperature = document.createElement('span');
  const minTemperature = document.createElement('span');
  const maxTemperature = document.createElement('span');

  tempSection.classList.add('temp-section');
  tempSeparation.classList.add('temp-section', 'row');
  currentTemperature.classList.add('main-temperature');
  currentTemperature.textContent = `${temp} C°`;
  maxTemperature.textContent = `${max} C° Max`;
  minTemperature.textContent = `${min} C° Min`;
  minTemperature.classList.add('min-temp');
  maxTemperature.classList.add('max-temp');

  tempSeparation.append(minTemperature, maxTemperature);
  tempSection.append(currentTemperature, tempSeparation);
  return tempSection;
}

export default temperatureSection;
