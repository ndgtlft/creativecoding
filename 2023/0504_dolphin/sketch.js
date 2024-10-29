let img;
let a = 1;
let as = 1;

function preload() {
  img = loadImage("dolphin.png");
}

function setup() {
  createCanvas(500, 500);
  colorMode(HSB, 360, 100, 100);
  background(0, 0, 0);
  imageMode(CENTER);  
  angleMode(DEGREES);
}

function draw() {
  push();
  translate(width/2, height/2);
  rotate(a);
  image(img, 0, 0, 200, 200);
  pop();

}
