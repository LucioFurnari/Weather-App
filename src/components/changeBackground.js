function changeBackground(weather) {
  const root = document.querySelector('body');
  const currentClass = (root.className === '') ? 'empty' : root.className;
  switch (weather) {
    case 0:
      root.classList.remove(currentClass);
      root.classList.add('clear-bg');
      break;
    case 1:
    case 2:
    case 3:
      root.classList.remove(currentClass);
      root.classList.add('cloud-bg');
      break;
    case 61:
    case 63:
    case 65:
    case 66:
    case 67:
    case 80:
    case 81:
    case 82:
      root.classList.remove(currentClass);
      root.classList.add('rain-bg');
      break;
    case 95:
    case 96:
    case 99:
      root.classList.remove(currentClass);
      root.classList.add('thunder-bg');
      break;
    case 45:
    case 48:
      root.classList.remove(currentClass);
      root.classList.add('mist-bg');
      break;
    case 51:
    case 53:
    case 55:
    case 56:
    case 57:
      root.classList.remove(currentClass);
      root.classList.add('drizzle-bg');
      break;
    case 71:
    case 73:
    case 75:
    case 77:
    case 85:
    case 86:
      root.classList.remove(currentClass);
      root.classList.add('snow-bg');
      break;
    default:
      break;
  }
}

export default changeBackground;
