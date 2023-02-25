const array = [27, 32, 38, 21, 27, 25, 24, 26];
function createLines(arr) {
  let path = '';
  const point = 100;
  let numberList = [];
  let line = 50;
  let textLine = 0;
  arr.forEach((elem) => {
    const temp = point - elem;
    const text = `<text x=${textLine} y=${temp}>${elem}</text>`;
    const circle = `<circle cx=${textLine} cy=${temp} r="4" fill="red"/>`;
    numberList.push(text);
    numberList.push(circle);
    path += `${temp} L ${line} `;
    line += 50;
    textLine += 50;
  });
  numberList = numberList.join(' ');
  return { path, numberList };
}
console.log(createLines(array));

function drawSvgGraphic() {
  const data = createLines(array);
  const graphic = document.createElement('div');
  graphic.classList.add('row');
  graphic.innerHTML = `
  <svg width="100%" height="100">
    <path d="M0 ${data.path}"
    stroke="black" stroke-width="2" fill="none"/>
    ${data.numberList}
  </svg>
  `;
  return graphic;
}

export default drawSvgGraphic;
