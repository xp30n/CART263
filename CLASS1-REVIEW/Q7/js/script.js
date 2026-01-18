"use strict";

let r, g, b;

let ellipseSize = {
  w: 45,
  h: 45,
};

function setup() {
  createCanvas(600, 600);

  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  background(0);
  drawElllipses();
}

function drawElllipses() {
  fill(r, g, b);

  for (let x = 0; x <= width; x += 50) {
    for (let y = 0; y <= height; y += 50) {
      if (mouseIsPressed) {
        rect(x, y, 45, 45);
      } else {
        ellipse(x, y, ellipseSize.w, ellipseSize.h);
      }
    }
  }
}

function keyPressed() {
  if (keyCode === 32) {
    r = random(255);
    g = random(255);
    b = random(255);
  }
}

