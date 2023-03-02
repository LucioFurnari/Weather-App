function createHoursLine(width) {
  const tinyLine = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  tinyLine.setAttribute('d', `M${width} 400 L ${width} 380`);
  return tinyLine;
}
function createLines(arr, element) {
  const pathVector = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  const hLine = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  const tinyLinesContainer = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  hLine.setAttribute('d', 'M0 400 L 1210 400');
  let path = 'M10';
  const svgHeight = 400;
  let line = 50;
  let textLine = 10;
  element.append(pathVector);
  arr.forEach((elem) => {
    let temp = svgHeight - parseInt(elem, 10);
    if (elem > 10 && elem < 15) {
      temp -= 30;
      path += ` ${temp} L ${line - 40} `;
    } else if (elem > 25) {
      temp -= 60;
      path += ` ${temp} L ${line - 40} `;
    } else if (elem > 30 && elem < 35) {
      temp -= 100;
      path += ` ${temp} L ${line - 40} `;
    } else if (elem >= 35) {
      temp -= 120;
      path += ` ${temp} L ${line - 40} `;
    } else {
      temp = svgHeight - parseInt(elem, 10);
    }
    tinyLinesContainer.append(createHoursLine(textLine));
    path += ` ${temp} L ${line + 10} `;
    line += 50;
    const textVector = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    textVector.setAttribute('x', textLine - 10);
    textVector.setAttribute('y', temp - 10);
    textVector.textContent = parseInt(elem, 10);
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', textLine);
    circle.setAttribute('cy', temp);
    circle.setAttribute('r', 4);
    circle.setAttribute('fill', 'red');
    circle.addEventListener('mouseover', (event) => {
      event.target.setAttribute('r', 10);
    });
    circle.addEventListener('mouseleave', (event) => {
      event.target.setAttribute('r', 4);
    });
    element.append(textVector, circle, hLine, tinyLinesContainer);
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
