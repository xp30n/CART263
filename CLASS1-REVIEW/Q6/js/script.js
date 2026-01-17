"use strict";

let test = {
  text: "TEST",
  size: 28,
  color: 255,
  x: 300,
  y: 300,
};

let i = 0;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);

  displayText();
}

function displayText() {
  push();
  fill(test.color);
  textSize(test.size);
  textAlign(CENTER, CENTER);
  text(test.text, test.x, test.y);
  pop();

  for (i = 0; i < 10; i++) {
    push();
    fill(test.color);
    textSize(test.size);
    text(i, i * 20, 100);
    pop();
  }
}
