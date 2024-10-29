const countX = 50;
const countY = 50;

function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB,360,100,100,100);
    background(360,0,100,100); // 白
}

function draw() {
    stroke(360,100,0,100); // 黒

    for (let i = 0; i < countX; i++) {
        line(0,2*i,width,20*i);
    }

    for (let i = 0; i < countY; i++) {
        line(20*i,0,20*i,height);
    }
}