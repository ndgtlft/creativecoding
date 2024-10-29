let pressCount = 1;
let size = 30;

function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB,360,100,100,1);
    background(0,0,20,1);
}

function draw() {
}

// クリックするたびに表示される文字が大きくなる
function mousePressed() {
    fill(0,0,100,1);
    textSize(size);
    text(pressCount, mouseX, mouseY);
    pressCount++;
    size = size + 20;
}