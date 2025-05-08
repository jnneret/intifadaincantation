function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont('Jersey 25 Charted');
}
  
const horizontal = document.getElementById("horizontal");
let hPos = -window.innerWidth;

function animateHorizontal() {
  hPos += 4;
  if (hPos > window.innerWidth) hPos = -horizontal.offsetWidth;
  horizontal.style.left = hPos + "px";
  requestAnimationFrame(animateHorizontal);
}
animateHorizontal();

const lines = Array.from(document.getElementsByClassName("vertical-text"));
let vPos = -100;

function animateVertical() {
  vPos += 2;
  const lineSpacing = 60;

  if (vPos > window.innerHeight + lines.length * lineSpacing) vPos = -100;

  lines.forEach((line, i) => {
    line.style.top = `${vPos + i * lineSpacing}px`;
  });

  requestAnimationFrame(animateVertical);
}
animateVertical();


  