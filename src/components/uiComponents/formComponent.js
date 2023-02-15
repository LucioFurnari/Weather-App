function formSection() {
  const cityForm = document.createElement('form');
  const cityInput = document.createElement('input');
  const submitButton = document.createElement('button');

  cityForm.classList.add('card-form');
  cityInput.classList.add('card-input');
  submitButton.textContent = 'Submit';
  cityForm.append(cityInput, submitButton);

  return cityForm;
}

export default formSection;
