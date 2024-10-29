let a = 0.0;
let inc;

function setup() {
    createCanvas(windowWidth, windowHeight);
    // angleMode(DEGREES);
    colorMode(HSB,360,100,100,1);
    background(200,85,45,1);
    inc = TWO_PI / 200.0;
}

function draw() {
    for (let i = 0; i < 200; i++) {
        line(i*5, 300, i*5, 300+sin(a)*200.0);
        a = a+inc;
    }
}