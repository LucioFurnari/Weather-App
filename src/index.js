import { weatherCard } from './components/uiComponents';
import controlEvents from './components/Control';
import './styles/style.css';
import './styles/bgClass.css';

document.addEventListener('DOMContentLoaded', () => {
  weatherCard();
  controlEvents();
});
