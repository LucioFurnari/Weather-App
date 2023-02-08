function changeBackground(weather) {
  const root = document.querySelector('#root');
  const currentClass = (root.className === '') ? 'class' : root.className;
  switch (weather) {
    case 'Clear':
      root.classList.remove(currentClass);
      root.classList.add('clear-bg');
      break;
    case 'Clouds':
      root.classList.remove(currentClass);
      root.classList.add('cloud-bg');
      break;
    case 'Rain':
      root.classList.remove(currentClass);
      root.classList.add('rain-bg');
      break;
    case 'Thunderstorm':
      root.classList.remove(currentClass);
      root.classList.add('thunder-bg');
      break;
    case 'Mist':
      root.classList.remove(currentClass);
      root.classList.add('mist-bg');
      break;
    case 'Drizzle':
      root.classList.remove(currentClass);
      root.classList.add('drizzle-bg');
      break;
    case 'Snow':
      root.classList.remove(currentClass);
      root.classList.add('snow-bg');
      break;
    default:
      break;
  }
}

export default changeBackground;
