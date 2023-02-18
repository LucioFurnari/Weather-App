import loadUiContent from './components/Control';
import mainSection from './components/mainSection';
import './styles/style.css';
import './styles/bgClass.css';
import './styles/loading.css';

document.addEventListener('DOMContentLoaded', () => {
  mainSection();
  loadUiContent();
});
