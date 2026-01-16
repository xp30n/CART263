"use strict";

let counter = 0;

let square1 = {
  x: 260,
  y: 250,
  size: 90,
  fill: {
    r: 255,
    g: 153,
    b: 0,
  },
};

let hasTriggered = false;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);

  drawSquare();

  checkOverlap();
}

function drawSquare() {
  push();
  fill(square1.fill.r, square1.fill.g, square1.fill.b);
  square(square1.x, square1.y, square1.size);
  pop();
}

function checkOverlap() {
  if (
    mouseX > square1.x &&
    mouseX < square1.x + square1.size &&
    mouseY > square1.y &&
    mouseY < square1.y + square1.size
  ) {

    push();
    fill(255, 201, 120);
    square(square1.x, square1.y, square1.size);
    pop();
  }
}
