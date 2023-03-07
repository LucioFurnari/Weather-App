function formComponent() {
  const cityForm = document.createElement('form');
  const cityInput = document.createElement('input');
  const messageSpan = document.createElement('span');
  const submitButton = document.createElement('button');

  cityForm.classList.add('city-form', 'row');
  cityInput.classList.add('form-input');
  cityInput.placeholder = 'City name';
  cityInput.required = 'true';
  messageSpan.classList.add('form-message');
  submitButton.classList.add('form-button');
  cityForm.append(cityInput, messageSpan, submitButton);

  return cityForm;
}

export default formComponent;
