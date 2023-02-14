import { weatherCard } from './components/cardComponent';
import loadUiContent from './components/Control';
import './styles/style.css';
import './styles/bgClass.css';

document.addEventListener('DOMContentLoaded', () => {
  weatherCard();
  loadUiContent();
});
