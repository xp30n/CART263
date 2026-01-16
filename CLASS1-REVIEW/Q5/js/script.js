"use strict";

let counter = 0;

// The overlapping starts off as false and changes when the mouse overlaps the square
let overlapStatus = false;

// Radius of the middle circle
let radius = {
  size: 40,
};

// Dimensions and fill of the square
let square1 = {
  x: 160,
  y: 150,
  size: 90,
  fill: {
    r: 255,
    g: 153,
    b: 0,
  },
};

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);

  drawSquare();

  checkOverlap();

  drawEllipse();
}

function drawSquare() {
  push();
  fill(square1.fill.r, square1.fill.g, square1.fill.b);
  square(square1.x, square1.y, square1.size);
  pop();
}

function mouseClicked() {
  if (
    mouseX > square1.x &&
    mouseX < square1.x + square1.size &&
    mouseY > square1.y &&
    mouseY < square1.y + square1.size
  ) {
    counter = counter + 1;
    console.log(counter);
  }
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

    let overlapStatus = true;
    console.log(overlapStatus);
  }
}

function drawEllipse() {
  let c = color(0, 126, 255, 102);

  let ellipseAlpha = alpha(c);

  noStroke();

  // Middle circle
  push();
  fill(ellipseAlpha);
  ellipse(width / 2, height / 2, radius.size);
  pop();
}
