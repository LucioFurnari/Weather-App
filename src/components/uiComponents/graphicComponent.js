const array = [27, 32, 38, 21, 27, 25, 24, 26];
function createLines(arr) {
  let path = '';
  const point = 100;
  let line = 50;
  arr.forEach((elem) => {
    const temp = point - elem;
    path += `${temp} L ${line} `;
    line += 50;
  });
  return path;
}
console.log(createLines(array));

function drawSvgGraphic() {
  const path = createLines(array);
  const graphic = document.createElement('div');
  graphic.classList.add('row');
  graphic.innerHTML = `
  <svg width="100%" height="100">
    <path d="M0 ${path}"
    stroke="black" stroke-width="2" fill="none"/>
  </svg>
  `;
  return graphic;
}

export default drawSvgGraphic;
