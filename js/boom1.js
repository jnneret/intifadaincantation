/*
----- Coding Tutorial by Patt Vira ----- 
Name: Interactive Floating Typography
Video Tutorial: https://youtu.be/-6v_AYyn49k
*/


let fonts = [];
let letters = [];

function preload() {
  fonts[0] = loadFont("fonts/Doto-VariableFont_ROND,wght.ttf");
  fonts[1] = loadFont("fonts/RubikPixels-Regular.ttf");
  fonts[2] = loadFont("fonts/Staatliches-Regular.ttf");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  
}

function draw() {
  background("#400101");
  for (let i=letters.length-1; i >= 0; i--) {
    letters[i].update();
    letters[i].display();
    
    if (letters[i].offScreen() == true) {
      letters.splice(i, 1);
    }
  }
  
}

function mouseDragged() {
  letters.push(new Letter(mouseX, mouseY));
}

