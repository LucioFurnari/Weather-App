function temperatureSection() {
  const tempSection = document.createElement('div');
  // const tempSeparation = document.createElement('div');
  const currentTemperature = document.createElement('span');
  // const minTemperature = document.createElement('span');
  // const maxTemperature = document.createElement('span');

  tempSection.classList.add('temp-section');
  currentTemperature.classList.add('main-temperature');
  // minTemperature.classList.add('min-temp');
  // maxTemperature.classList.add('max-temp');

  // tempSeparation.append(minTemperature, maxTemperature);
  tempSection.append(currentTemperature);
  return tempSection;
}

export default temperatureSection;
