let lines = [
  { text: "I SAID I LOVED YOU I SAID I LOVED YOU I SAID I LOVED YOU I SAID I LOVED YOU I SAID I LOVED YOU", x: -100, yFactor: 1 / 7, direction: 1 },
  { text: "AND I WANTED AND I WANTED AND I WANTED AND I WANTED AND I WANTED",       x: 100, yFactor: 2 / 7, direction: -1 },
  { text: "GENOCIDE TO STOP GENOCIDE TO STOP GENOCIDE TO STOP GENOCIDE TO STOP GENOCIDE TO STOP GENOCIDE TO STOP",   x: -200, yFactor: 3 / 7, direction: 1 },
  { text: "I SAID I LOVED YOU I SAID I LOVED YOU I SAID I LOVED YOU I SAID I LOVED YOU I SAID I LOVED YOU ", x: 100, yFactor: 4 / 7, direction: -1 },
  { text: "AND I WANTED AND I WANTED AND I WANTED AND I WANTED AND I WANTED",       x: -100, yFactor: 5 / 7, direction: 1 },
  { text: "AFFIRMATIVE ACTION AFFIRMATIVE ACTION AFFIRMATIVE ACTION AFFIRMATIVE ACTION AFFIRMATIVE ACTION", x: -200, yFactor: 6 / 7, direction: -1 },
  { text: "AND REACTION AND REACTION AND REACTION AND REACTION",       x: 150, yFactor: 7 / 7, direction: 1 }
];

let font;
let moving = true;

function preload() {
  font = loadFont('fonts/ZenTokyoZoo-Regular.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(font);
  textSize(100); 
  textAlign(LEFT, CENTER);
}

function draw() {
  background('#a2d2ff');
  fill(0);


  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    
    text(line.text, line.x, height * line.yFactor);

    if (moving) {
      line.x += 2 * line.direction;
    }

    if (line.direction > 0 && line.x > width) {
      line.x = -textWidth(line.text);
    } else if (line.direction < 0 && line.x < -textWidth(line.text)) {
      line.x = width + textWidth(line.text);
    }
  }
}

function mousePressed() {
  moving = !moving;
}
