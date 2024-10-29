
function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB, 360, 100, 100, 100); //HSBカラーモード + 透明度α値
    background(214, 40, 100, 100); //乳青色
}

function draw() {
    noStroke();
    fill(214, 44, 100, 100);
    rect(0,height/2,windowWidth,windowHeight);
}
