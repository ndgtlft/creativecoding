let img;
let color;
let colorMove;
let moveSpeedUp = 0.7;
let moveSpeedDown = 0.7;
let colorFish;

function preload() {
  img = loadImage('ducshi.png');
}

function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100, 100);
  colorUp = random(10, 70);
  colorDown = random(10, 70);
  colorFish = random(0, 360);
  clear();
}

function draw() { 

  fill(colorFish, colorUp, 100);
  beginShape();
    vertex(185, 115);
    vertex(195, 115);
    vertex(230, 124);
    vertex(250, 129);
    vertex(280, 141);
    vertex(310, 157);
    vertex(340, 197);
    vertex(350, 220);
    vertex(350, 250);
    vertex(350, 270);
    vertex(335, 287);
    vertex(335, 260);
    vertex(300, 220);
    vertex(200, 170);
    vertex(194, 130);
  endShape(CLOSE);  

  fill(colorFish, colorDown, 100);
  beginShape();
    vertex(180, 235);
    vertex(310, 250);
    vertex(330, 290);
    vertex(308, 306);
    vertex(220, 290);
    vertex(168, 278);
    vertex(152, 277);
    vertex(152, 260);
  endShape(CLOSE);  

  colorUp += moveSpeedUp;
  colorDown += moveSpeedDown;

  if (colorUp > 70 || colorUp < 10) {
    moveSpeedUp *= -1;
  }
  if (colorDown > 70 || colorDown < 10) {
    moveSpeedDown *= -1;
  }

  image(img, 0, 0, 400, 400);  
  
}