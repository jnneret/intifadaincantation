let textTopLeft = "I SAID";
let textBottomRight = "I LOVED YOU";

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(100);
  textAlign(LEFT, TOP);
  textFont('Zen Tokyo Zoo');
}

function draw() {
  // Define gradient colors
  let color1 = color("#595331");  // Dark brown
  let color2 = color("#A69C6D");  // Light brown
  let color3 = color("#BF964B");  // Goldish color

  // Create gradient background based on mouse position
  let bgColor1to2 = lerpColor(color1, color2, map(mouseX, 0, width, 0, 1));
  let bgColor = lerpColor(bgColor1to2, color3, map(mouseY, 0, height, 0, 1));
  background(bgColor);

  // Calculate transparency based on mouse position
  let alphaTopLeft = map(mouseX, 0, width, 0, 255);
  let alphaBottomRight = map(mouseY, 0, height, 0, 255);

  // Draw top-left text with gradient transparency
  fill(color("#BF964B"), alphaTopLeft);
  text(textTopLeft, width * 0.1, height * 0.1);

  // Draw bottom-right text with gradient transparency
  fill(color("#595331"), alphaBottomRight);
  text(textBottomRight, width * 0.5, height * 0.7);
}
