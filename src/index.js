import { weatherCard } from './components/uiComponents';
import controlEvents from './components/Control';
import './styles/style.css';

document.addEventListener('DOMContentLoaded', () => {
  weatherCard();
  controlEvents();
});
