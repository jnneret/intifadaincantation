let xPos, yPos;  
let trail = [];  
let textContent = "I wanted";

function preload() {
  jerseyFont = loadFont('fonts/Jersey25Charted-Regular.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(50);
  textAlign(CENTER, CENTER);
  xPos = mouseX;
  yPos = mouseY;
  
  textFont(jerseyFont);
}

function draw() {
  
  let targetX = mouseX;
  let targetY = mouseY;


  xPos += (targetX - xPos) * 0.3;
  yPos += (targetY - yPos) * 0.2;


  trail.push({ x: xPos, y: yPos });
  

  for (let i = 0; i < trail.length; i++) {
    let alpha = map(i, 0, trail.length, 0, 255);
    fill(255, 255, 255, alpha); 
    text(textContent, trail[i].x, trail[i].y);
  }

  if (trail.length > 30) {
    trail.shift();  
  }
}
