let myFont;

function preload() {
  myFont = loadFont('fonts/Sixtyfour-Regular-VariableFont_BLED,SCAN.ttf');
}

function setup() {
  textFont(myFont);
  textSize(100);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(255);
  fill(0);
  text('music out the window', width / 2, height / 2);
}
