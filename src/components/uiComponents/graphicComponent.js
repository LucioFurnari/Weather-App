function createHoursLine(width, hours) {
  const tinyLine = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  const hoursText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  hoursText.textContent = hours;
  if (hours < 10) {
    hoursText.textContent = `0${hours}`;
  }
  hoursText.setAttribute('x', width - 10);
  hoursText.setAttribute('y', 380);
  tinyLine.setAttribute('d', `M${width} 400 L ${width} 380`);
  return {
    tinyLine,
    hoursText,
  };
}
function createLines(arr, element) {
  const pathVector = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  const hLine = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  const tinyLinesContainer = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  const hoursLinesContainer = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  hLine.setAttribute('d', 'M0 400 L 1210 400');
  let hours = 0;
  let path = 'M10';
  const svgHeight = 600;
  let line = 50;
  let textLine = 10;
  element.append(pathVector);
  arr.forEach((elem) => {
    const temp = svgHeight - (svgHeight - parseInt(((svgHeight / parseInt(elem, 10)) * 10), 10));
    tinyLinesContainer.append(createHoursLine(textLine).tinyLine);
    hoursLinesContainer.append(createHoursLine(textLine, hours).hoursText);
    hours += 1;
    path += ` ${temp} L ${line + 10} `;
    line += 50;
    const textVector = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    textVector.setAttribute('x', textLine - 10);
    textVector.setAttribute('y', temp - 10);
    textVector.textContent = parseInt(elem, 10);
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', textLine);
    circle.setAttribute('cy', temp);
    circle.setAttribute('r', 6);
    element.append(textVector, circle, hLine, tinyLinesContainer, hoursLinesContainer);
    textLine += 50;
  });
  pathVector.setAttribute('d', `${path}`);
  return { path };
}

function drawSvgGraphic(arr) {
  const svgGraphic = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  // svgGraphic.setAttribute('viewBox', '0 0 100 100');
  svgGraphic.setAttribute('height', 400);
  svgGraphic.setAttribute('width', 1200);
  createLines(arr, svgGraphic);
  const graphicContainer = document.createElement('div');
  graphicContainer.classList.add('row');
  graphicContainer.append(svgGraphic);
  return graphicContainer;
}

export default drawSvgGraphic;
