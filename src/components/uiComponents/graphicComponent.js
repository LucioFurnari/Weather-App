function createLines(arr, element) {
  const pathVector = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  element.append(pathVector);
  let path = 'M10';
  const point = 200;
  let line = 50;
  let textLine = 10;
  arr.forEach((elem) => {
    let temp = point - parseInt(elem, 10);
    if (elem > 30 && elem < 35) {
      temp -= 40;
      path += ` ${temp} L ${line - 40} `;
    } else if (elem >= 35) {
      temp -= 60;
      path += ` ${temp} L ${line - 40} `;
    } else {
      temp = point - parseInt(elem, 10);
    }
    path += ` ${temp} L ${line + 10} `;
    line += 50;
    const textVector = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    textVector.setAttribute('x', textLine - 10);
    textVector.setAttribute('y', temp - 10);
    textVector.textContent = elem;
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
    element.append(textVector, circle);
    textLine += 50;
  });
  pathVector.setAttribute('d', `${path}`);
  return { path };
}

function drawSvgGraphic(arr) {
  const svgGraphic = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  // svgGraphic.setAttribute('viewBox', '0 0 100 100');
  svgGraphic.setAttribute('height', 200);
  svgGraphic.setAttribute('width', 1200);
  createLines(arr, svgGraphic);
  const graphicContainer = document.createElement('div');
  graphicContainer.classList.add('row');
  graphicContainer.append(svgGraphic);
  return graphicContainer;
}

export default drawSvgGraphic;
