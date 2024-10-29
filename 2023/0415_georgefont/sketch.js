let font;
let fontSize = 300;
let shapeSize = 11; // 形の大きさを調整可能にする

function preload() {
  font = loadFont("https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmWUlfBBc9.ttf");
}

function setup() {
  createCanvas(1500, 500);
  noLoop();
}

function draw() {
  clear(); // 背景を透明にする
  textFont(font);
  textSize(fontSize);
  fill(255);

  let points = font.textToPoints("George", 100, 300, fontSize);

  for (let i = 0; i < points.length; i++) {
    let pt = points[i];

    if (i % 4 == 0) {
      noStroke(); // 線をなくす
      fill(255);
      ellipse(pt.x, pt.y, shapeSize, shapeSize);
    } else if (i % 4 == 1) {
      noStroke(); // 線をなくす
      fill(255);
      triangle(pt.x, pt.y, pt.x + shapeSize, pt.y, pt.x + shapeSize / 2, pt.y - shapeSize);
    } else if (i % 4 == 2) {
      noStroke(); // 線をなくす
      fill(255);
      ellipse(pt.x, pt.y, shapeSize, shapeSize);
    } else {
      noStroke(); // 線をなくす
      fill(255);
      rect(pt.x, pt.y, shapeSize, shapeSize);
    }
  }
}
