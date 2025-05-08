let textTopLeft = "I SAID";
let textBottomRight = "I LOVED YOU";
let myFont;

function preload() {
  myFont = loadFont('fonts/Jersey25Charted-Regular.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(150);
  textAlign(LEFT, TOP);
  textFont('Jersey25Charted-Regular');
}

function draw() {
  let color1 = color("#BF0413");  
  let color2 = color("#400101");  
  let color3 = color("#400101");  

  let bgColor1to2 = lerpColor(color1, color2, map(mouseX, 0, width, 0, 1));
  let bgColor = lerpColor(bgColor1to2, color3, map(mouseY, 0, height, 0, 1));
  background(bgColor);

  let alphaTopLeft = map(mouseX, 0, width, 0, 255);
  let alphaBottomRight = map(mouseY, 0, height, 0, 255);

  fill(color("#BF0413"), alphaTopLeft);
  text(textTopLeft, width * 0.1, height * 0.1);

  fill(color("#400101"), alphaBottomRight);
  text(textBottomRight, width * 0.5, height * 0.7);
}
