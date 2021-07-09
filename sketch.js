let img;

function preload() {
  img = loadImage("cursor.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(58, 45, 50);
  translate(width / 2, height / 2);
  rotate(-90);
  let hours = hour();
  let minutes = minute();
  let seconds = second();
  let milliss = millis() / 100;
  console.log(`${hours} : ${minutes} : ${seconds}`);
  strokeWeight(4);
  stroke(255);
  noFill();

  let scsangle = map(seconds, 0, 60, 0, 359);

  let mntangle = map(minutes, 0, 60, 0, 359);

  let hrangle = map(hours % 12, 0, 12, 0, 359);

  let millisangle = map(milliss, 0, 10, 0, 359);
  push();
  cursor(CROSS);
  pop();

  stroke(108, 125, 71);
  arc(0, 0, 360, 360, 0, millisangle);

  stroke(216, 30, 91, 255);
  arc(0, 0, 330, 330, 0, scsangle);

  stroke(38, 70, 83);
  arc(0, 0, 300, 300, 0, mntangle);

  stroke(216, 30, 0);
  arc(0, 0, 270, 270, 0, hrangle);

  stroke(255);
  point(0, 0);

  push();
  rotate(millisangle);
  stroke(240, 240, 201);
  line(0, 0, 345 / 2, 0);
  pop();

  push();
  rotate(scsangle);
  stroke(255, 181, 194);
  line(0, 0, 315 / 2, 0);
  pop();

  push();
  rotate(mntangle);
  stroke(42, 157, 143);
  line(0, 0, 285 / 2, 0);
  pop();

  push();
  rotate(hrangle);
  stroke(233, 196, 106);
  line(0, 0, 255 / 2, 0);
  pop();
  stroke(255);

  push();
  rotate(90);
  textSize(40);
  stroke(240, 217, 231);
  text(`${hours} : ${minutes} : ${seconds}`, -90, 240);
  pop();
}
