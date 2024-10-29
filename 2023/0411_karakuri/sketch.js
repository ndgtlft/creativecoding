let lines = [];
let img;
let lineC;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100);
  background(0, 0, 0);
  for (let i = 0; i < 1000; i++) {
    lines.push(new Line());
  }
  lineC = random(0, 200);
}

function draw() {
  for (let line of lines) {
    line.update();
    line.display();
  }
}

class Line {
  constructor() {
    this.startPoint = this.generateRandomBottomEdgePoint();
    this.currentPoint = this.startPoint.copy();
    this.prevPoint = this.currentPoint.copy();
    this.direction = this.generateRandomDirection();
    this.timeSpeed = 1;
    this.turnDuration = this.randomTurnDuration();
    this.turnTimer = 0;
    this.shouldTurn = false;
    this.firstStep = true;
    this.turnType = -1;
  }

  generateRandomBottomEdgePoint() {
    return createVector(random(windowWidth), windowHeight);
  }

  generateRandomDirection() {
    return createVector(0, -1);
  }

  randomTurnDuration() {
    let durations = [25, 40, 60, 100, 155];
    return random(durations);
  }

  update() {
    this.prevPoint.set(this.currentPoint);
    if (!this.shouldTurn) {
      this.currentPoint.add(p5.Vector.mult(this.direction, this.timeSpeed));
      if (this.currentPoint.x < 0 || this.currentPoint.x > windowWidth || this.currentPoint.y < 0 || this.currentPoint.y > windowHeight) {
        this.startPoint = this.generateRandomBottomEdgePoint();
        this.currentPoint = this.startPoint.copy();
        this.prevPoint = this.currentPoint.copy();
        this.direction = this.generateRandomDirection();
      }
      this.turnTimer++;
      if (this.turnTimer >= this.turnDuration) {
        this.shouldTurn = true;
        this.firstStep = false;
      }
    } else {
      if (!this.firstStep) {
        this.turnType = Math.floor(random(3));
        switch (this.turnType) {
          case 0:
            this.direction.rotate(HALF_PI);
            break;
          case 1:
            this.direction.rotate(-HALF_PI);
            break;
          case 2:
            break;
        }
      }
      this.turnTimer = 0;
      this.shouldTurn = false;
      this.turnDuration = this.randomTurnDuration();
    }
  }

  display() {
    stroke(lineC, 100, 90);
    strokeWeight(0.5);
    line(this.prevPoint.x, this.prevPoint.y, this.currentPoint.x, this.currentPoint.y);
  }
}
