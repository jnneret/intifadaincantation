let font;
let string = `Intifada Incantation, poem by June Jordan, interactive website by Jayla Neret`;
let currentCharacter = 0;
let pageMargin = 25;

function preload() {
  font = loadFont('fonts/Staatliches-Regular.ttf'); 
}

function setup() {
  createCanvas(700, 150);
  textFont(font);
  textAlign(LEFT, TOP);
  textSize(64);
}

function draw() {
  background('#a2d2ff');

  fill(255);
  noStroke();
  rect(pageMargin, pageMargin, width - pageMargin * 2, height - pageMargin * 2);

  let currentString = string.substring(0, floor(currentCharacter));
  fill(0); 
  textSize(40);
  text(currentString, pageMargin + 10, pageMargin + 10, width - pageMargin * 2, height - pageMargin * 2);
  
  if (currentCharacter < string.length) {
    currentCharacter += 0.3;
  }
}
