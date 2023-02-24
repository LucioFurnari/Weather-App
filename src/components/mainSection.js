import formComponent from './uiComponents/formComponent';
import drawSvgGraphic from './uiComponents/graphicComponent';

function mainSection() {
  const root = document.querySelector('#root');
  const nav = document.createElement('nav');
  const main = document.createElement('main');
  const form = formComponent();

  main.classList.add('grid');
  // nav.classList.add('column');
  nav.append(form, drawSvgGraphic());
  root.append(nav, main);
}

export default mainSection;
