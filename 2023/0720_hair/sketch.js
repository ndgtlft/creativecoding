const lines = [];
const numLines = 500;
const turnFrames = [25, 40, 60, 100, 200];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);

  for (let i = 0; i < numLines; i++) {
    lines.push(new Line());
  }
}

function draw() {
  for (let i = 0; i < numLines; i++) {
    lines[i].move();
    lines[i].display();
  }
}

class Line {
  constructor() {
    this.pos = createVector(0, random(windowHeight));
    this.vel = createVector(1, 0);
    this.turnTimer = random(turnFrames);
    this.noiseOffset = random(1000);
  }

  move() {
    this.pos.add(this.vel);

    this.turnTimer--;
    if (this.turnTimer <= 0) {
      this.turnTimer = random(turnFrames);
      const angle = (floor(random(3)) - 1) * PI / 2;
      this.vel.rotate(angle);
    }

    let noiseValue = noise(this.noiseOffset);
    this.pos.x += map(noiseValue, 0, 1, -1, 1);
    this.pos.y += map(noiseValue, 0, 1, -1, 1);
    this.noiseOffset += 0.01;

    // キャンバスの上端または下端を超えた場合に反対側から出てくるようにする
    if (this.pos.y > windowHeight) {
      this.pos.y = 0;
    } else if (this.pos.y < 0) {
      this.pos.y = windowHeight;
    }
  }

  display() {
    stroke(0);
    strokeWeight(0.7);
    point(this.pos.x, this.pos.y);
  }
}

//クリックで保存
function mousePressed(){
	save("" + year() + month() + day() + hour() + minute() + second() + ".png");
}
