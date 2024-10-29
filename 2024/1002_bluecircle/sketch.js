const circleCount = 70;

function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB,360,100,100,100);
    background(360,100,1,100);
}

function draw() {
    for (let i = 0; i < circleCount; i++) {
        stroke(240,(100-circleCount)+i,95,100);
        strokeWeight(0.2);
        noFill();
        ellipse(10*i, 10*i, 50, 50);
    }

    for (let i = 0; i < circleCount; i++) {
        stroke(240,(100-circleCount)+i,95,100);
        strokeWeight(0.2);
        noFill();
        ellipse(width-(10*i), height-(10*i), 50, 50);
    }

    for (let i = 0; i < circleCount; i++) {
        stroke(240,100-i,95,100);
        strokeWeight(0.2);
        noFill();
        ellipse(100+10*i, 10*i, 50, 50);
    }

    for (let i = 0; i < circleCount; i++) {
        stroke(240,(100-circleCount)+i,95,100);
        strokeWeight(0.2);
        noFill();
        ellipse(width-100-(10*i), height-(10*i), 50, 50);
    }
}