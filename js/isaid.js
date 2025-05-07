let font;
let msg = "MUSIC!";
let fontPath;
let size = 170;
let points = [];
let path;
let particles = [];

function setup() {
  createCanvas(800, 400);
  opentype.load("fonts/ZenTokyoZoo-Regular.ttf", function(err, f) {
    if (err) {
      console.log(err);
    } else {
      font = f;
    }
    fontPath = font.getPath(msg, 0, 0, size);
    path = new g.Path(fontPath.commands);
    path = g.resampleByLength(path, 10);
    for (let i = 0; i < path.commands.length; i++) {
      if (path.commands[i].type == "M") {
        points.push([]);
      }
      if (path.commands[i].type != "Z") {
        points[points.length - 1].push(createVector(path.commands[i].x, path.commands[i].y));
      }
    }
  });
}

function draw() {
  background(0);
  translate(width / 2, height / 2);

  // Oscillating effect
  let offsetX = sin(frameCount * 0.05) * 50;
  let offsetY = cos(frameCount * 0.05) * 50;

  // Particle trail effect
  particles.push(createVector(mouseX, mouseY));

  // Limit the number of particles
  if (particles.length > 100) {
    particles.splice(0, 1);
  }

  // Draw particles
  for (let i = 0; i < particles.length; i++) {
    let alpha = map(i, 0, particles.length, 0, 255);
    fill(255, 204, 0, alpha);
    noStroke();
    ellipse(particles[i].x, particles[i].y, 10, 10);
  }

  // Draw the text outline
  noFill();
  stroke(255);
  strokeWeight(2);
  for (let i = 0; i < points.length; i++) {
    beginShape();
    for (let j = 0; j < points[i].length; j++) {
      let p = points[i][j];
      let x = p.x + offsetX;
      let y = p.y + offsetY;
      vertex(x, y);
    }
    endShape(CLOSE);
  }
}
