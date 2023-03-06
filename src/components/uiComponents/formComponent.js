import SearchIcon from '../../images/magnify.svg';

function formComponent() {
  const cityForm = document.createElement('form');
  const cityInput = document.createElement('input');
  const submitButton = document.createElement('button');
  const buttonImage = document.createElement('img');

  cityForm.classList.add('card-form', 'row');
  cityInput.classList.add('card-input');
  cityInput.required = 'true';
  submitButton.append(buttonImage);
  buttonImage.src = SearchIcon;
  cityForm.append(cityInput, submitButton);

  return cityForm;
}

export default formComponent;
