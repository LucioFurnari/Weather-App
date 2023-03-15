import formComponent from './uiComponents/formComponent';

function mainSection() {
  const root = document.querySelector('#root');
  const nav = document.createElement('nav');
  const main = document.createElement('main');
  const form = formComponent();

  nav.classList.add('row');

  nav.append(form);
  root.append(nav, main);
}

export default mainSection;
