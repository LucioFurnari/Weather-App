function drawSvgGraphic() {
  const graphic = document.createElement('div');
  graphic.innerHTML = `
  <svg width="100%" height="100">
    <path d="M0 27 H 90 L 180 38 " stroke="black" fill="none"/>
  </svg>
  `;
  return graphic;
}

export default drawSvgGraphic;
