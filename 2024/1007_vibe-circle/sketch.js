let a=0;
let b=0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB,360,100,100,1);
    background(0,100,0,1);
}

function draw() {
    background(0,100,0,1);

    noFill();
    strokeWeight(30);
    stroke(0,0,100,1);

    if(width>=height){
        ellipse(width/2, height/2, height/2+a, height/2+b);
    } else{
        ellipse(width/2, height/2, width/2+a, width/2+b);
    }
    a=0;
    b=0;

    a = a + random(-6,6);
    b = b + random(-6,6);
}