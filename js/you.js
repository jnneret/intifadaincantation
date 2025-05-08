/*
----- Coding Tutorial by Patt Vira ----- 
Name: Intro to openType.js
Video Tutorial: https://youtu.be/97VC4PZTX7U?si=zHkIUrF8xqChXeQ0
---------
*/

let font; 
let msg = "I WANTED YOU!"; 
let fontPath; let size = 150;
let points = [];
let path;

function setup() {
createCanvas(windowWidth, windowHeight);
  
  opentype.load("fonts/RubikPixels-Regular.ttf", function(err, f) {
    if (err) {
      console.log(err);
    } else {
      font = f;
    }
    
    
    fontPath = font.getPath(msg, 0, 0, size);
    path = new g.Path(fontPath.commands);
    path = g.resampleByLength(path, 10);
    
    for (let i=0; i<path.commands.length; i++) {
      if (path.commands[i].type == "M") {
        points.push([]);
      }
      
      if (path.commands[i].type != "Z") {
        points[points.length-1].push(createVector(path.commands[i].x, path.commands[i].y));
      }
    }
    
  });
}

function draw() {
  background('#400101');
  noFill();
  translate(20, 200);
  
  for (let i=0; i<points.length; i++) {
    fill(255, 255, 255, i*50);
    for (let j=0; j<points[i].length; j++) {
      ellipse(points[i][j].x, points[i][j].y, 10, 10);
    }
  }
  

  
}