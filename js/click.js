let messages = [
    "I WANTED",
    "NOBODY ROLL BACK THE TREES",
    "I WANTED",
    "NOBODY TAKE AWAY DAYBREAK!",
    "I WANTED",
    "NOBODY FREEZE ALL THE PEOPLE ON THEIR KNEES",
  ];
  
  let currentIndex = 0;
  let font;
  
  function preload() {
    font = loadFont("fonts/Jersey25Charted-Regular.ttf");
  }
  
  function setup() {
    createCanvas(windowWidth, windowHeight);
    textFont(font);
    textSize(48);
    fill(255);
    textAlign(CENTER, CENTER);
    background(0);
  }
  
  function draw() {
    background(0);
    if (currentIndex < messages.length) {
      text(messages[currentIndex], width / 2, height / 2);
    }
  }
  
  function mousePressed() {
    if (currentIndex < messages.length - 1) {
      currentIndex++;
    }
  }
  