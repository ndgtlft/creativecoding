let xa = 50;
let xb = 70;
let ya = 100;
let yb = 200;

function setup() {
    createCanvas(650, 750);
    background(220);
}

function draw() {
    for (let i = 0; i < 100; i++) {
        line(5*i+xa,ya,5*i+xb,yb);
        line(4*i+xa,105+ya,4*i+xb,105+yb);
        line(3*i+xa,210+ya,3*i+xb,210+yb);
        line(2.5*i+xa,315+ya,2.5*i+xb,315+yb);
        line(2*i+xa,420+ya,2*i+xb,420+yb);
    }
}