import SearchIcon from '../../images/magnify.svg';

function formComponent() {
  const cityForm = document.createElement('form');
  const cityInput = document.createElement('input');
  const messageSpan = document.createElement('span');
  const submitButton = document.createElement('button');
  const buttonImage = document.createElement('img');

  cityForm.classList.add('city-form');
  cityInput.classList.add('form-input');
  cityInput.placeholder = 'City name';
  cityInput.required = 'true';
  messageSpan.classList.add('form-message');
  submitButton.append(buttonImage);
  buttonImage.src = SearchIcon;
  cityForm.append(cityInput, messageSpan, submitButton);

  return cityForm;
}

export default formComponent;
