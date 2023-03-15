function formComponent() {
  const formContainer = document.createElement('div');
  const cityForm = document.createElement('form');
  const cityInput = document.createElement('input');
  const messageSpan = document.createElement('span');
  const submitButton = document.createElement('button');
  const changeTemperature = document.createElement('button');

  cityForm.classList.add('city-form', 'row');
  cityInput.classList.add('form-input');
  cityInput.placeholder = 'City name';
  cityInput.required = 'true';
  messageSpan.classList.add('form-message');
  submitButton.classList.add('form-button');
  submitButton.type = 'submit';
  changeTemperature.classList.add('change-button');
  changeTemperature.textContent = '°F';
  changeTemperature.type = 'button';
  cityForm.append(cityInput, submitButton, changeTemperature);
  formContainer.append(cityForm, messageSpan);

  return formContainer;
}

export default formComponent;
