const array = [27, 32, 38, 21, 27, 25, 24, 26];
function createLines(arr) {
  let path = '';
  const point = 100;
  const numberList = [];
  let line = 50;
  let textLine = 0;
  arr.forEach((elem) => {
    const temp = point - elem;
    const text = `<text x=${textLine} y=${temp}>${elem}</text>`;
    const circle = document.createElement('circle');
    circle.setAttribute('cx', textLine);
    circle.setAttribute('cy', temp);
    circle.setAttribute('r', 4);
    circle.setAttribute('fill', 'red');
    // const circle = `<circle cx=${textLine} cy=${temp} r="4" fill="red"/>`;
    circle.addEventListener('mouseover', (event) => {
      event.target.setAttribute('r', 10);
    });
    numberList.push(text);
    numberList.push(circle);
    path += `${temp} L ${line} `;
    line += 50;
    textLine += 50;
  });
  // numberList = numberList.join(' ');
  return { path, numberList };
}

function drawSvgGraphic() {
  const data = createLines(array);
  console.log(data);
  const graphicContainer = document.createElement('div');
  graphicContainer.classList.add('row');
  graphicContainer.innerHTML = `
  <svg width="100%" height="100">
    <path d="M0 ${data.path}"
    stroke="black" stroke-width="2" fill="none"/>
    ${data.numberList}
  </svg>
  `;
  return graphicContainer;
}

export default drawSvgGraphic;
