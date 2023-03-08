import formComponent from './uiComponents/formComponent';

function mainSection() {
  const root = document.querySelector('#root');
  const nav = document.createElement('nav');
  const changeTemperature = document.createElement('button');
  const main = document.createElement('main');
  const form = formComponent();

  nav.classList.add('row');
  changeTemperature.classList.add('change-button');
  changeTemperature.textContent = '°F';
  nav.append(form, changeTemperature);
  root.append(nav, main);
}

export default mainSection;
