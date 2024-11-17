let secondsRadius;
let minutesRadius;
let hoursRadius;
let clockDiameter;

function setup() {
  createCanvas(710, 400);
  stroke(255);
  angleMode(DEGREES);

  let radius = min(width, height) / 2;
  secondsRadius = radius * 0.71;
  minutesRadius = radius * 1.1;
  hoursRadius = radius * 1.0;
  clockDiameter = radius * 1.5;

  describe('Functioning pink clock on a grey background.');
}

function draw() {
  background(158, 217, 177);

  translate(width / 2, height / 2);

  noStroke();
  fill(10, 143, 53);
  ellipse(0, 0, clockDiameter + 25, clockDiameter + 25);
  fill(237, 34, 93);
  ellipse(0, 0, clockDiameter, clockDiameter);

  let secondAngle = map(second(), 0, 60, 0, 360);
  let minuteAngle = map(minute(), 0, 60, 0, 360);
  let hourAngle = map(hour(), 0, 12, 0, 360);

  stroke(12);

  push();
  rotate(secondAngle);
  strokeWeight(2);
  line(0, 0, 0, -secondsRadius);
  pop();

  push();
  strokeWeight(4);
  rotate(minuteAngle);
  line(0, 0, 0, -minutesRadius);
  pop();

  push();
  strokeWeight(8);
  rotate(hourAngle);
  line(0, 0, 0, -hoursRadius);
  pop();

  push();
  strokeWeight(4);
  for (let ticks = 0; ticks < 60; ticks += 1) {
    point(0, -secondsRadius);
    rotate(6);
  }
  pop();
}