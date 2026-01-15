"use strict";

let rect1 = {
  x: 0,
  y: 0,
  w: 200,
  h: 600,
  r: 33,
  g: 55,
  b: 255,
};

let rect2 = {
  x: 200,
  y: 0,
  w: 200,
  h: 600,
  r: 46,
  g: 64,
  b: 166,
};

let rect3 = {
  x: 400,
  y: 0,
  w: 200,
  h: 600,
  r: 26,
  g: 37,
  b: 100,
};

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
  noStroke();

  drawRect1();
  drawRect2();
  drawRect3();

  checkOverlap();
}

function drawRect1() {
  push();
  fill(rect1.g, rect1.g, rect1.b);
  rect(rect1.x, rect1.y, rect1.w, rect1.h);
  pop();
}

function drawRect2() {
  push();
  fill(rect2.r, rect2.g, rect2.b);
  rect(rect2.x, rect2.y, rect2.w, rect2.h);
  pop();
}

function drawRect3() {
  push();
  fill(rect3.r, rect3.g, rect3.b);
  rect(rect3.x, rect3.y, rect3.w, rect3.h);
  pop();
}

function checkOverlap() {
  if (
    mouseX > rect1.x &&
    mouseX < rect1.x + rect1.w &&
    mouseY > rect1.y &&
    mouseY < rect1.y + rect1.h
  ) {
    push();
    stroke(0);
    strokeWeight(4);
    fill(255);
    rect(rect1.x, rect1.y, rect1.w, rect1.h);
    pop();
  }

  if (
    mouseX > rect2.x &&
    mouseX < rect2.x + rect2.w &&
    mouseY > rect2.y &&
    mouseY < rect2.y + rect2.h
  ) {
    push();
    stroke(0);
    strokeWeight(4);
    fill(255);
    rect(rect2.x, rect2.y, rect2.w, rect2.h);
    pop();
  }

  if (
    mouseX > rect3.x &&
    mouseX < rect3.x + rect3.w &&
    mouseY > rect3.y &&
    mouseY < rect3.y + rect3.h
  ) {
    push();
    stroke(0);
    strokeWeight(4);
    fill(255);
    rect(rect3.x, rect3.y, rect3.w, rect3.h);
    pop();
  }
}
