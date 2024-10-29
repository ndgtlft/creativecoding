const countLine = 200;

function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB,360,100,100,100);
    background(180,14,90,100);
}

function draw() {
    stroke(155, 82, 40);
    strokeWeight(0.5);

    for (let i = 0; i < countLine; i++) {
        line(0,0,5*i,height);
    }

    for (let i = 0; i < countLine; i++) {
        line(width,0,width-(5*i),height);
    }
}