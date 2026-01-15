"use strict";

// Variables for the first rectangle
let rect1X = 100;
let rect1Y = 100;
let rect1W = 100;
let rect1H = 100;

// Variables for the second rectangle
let rect2X = 200;
let rect2Y = 200;
let rect2W = 100;
let rect2H = 100;

// Variables for the third rectangle
let rect3X = 300;
let rect3Y = 300;
let rect3W = 100;
let rect3H = 100;


function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(0);
    noStroke();

    drawRect(rect1X, rect1Y, rect1W, rect1H, 218, 39, 245);
    drawRect(rect2X, rect2Y, rect2W, rect2H, 218, 39, 245);
    // drawRect = random()
}

function drawRect(x, y, w, h, r, g, b) {
    push();
    fill(r, g, b);
    rect(x, y, w, h);
    pop();
}

function mousePressed() {
    rect1X = random(0, 500);
    rect1Y = random(0, 500);
}

function keyPressed() {
    if (key === " ") {
        rect2X = random(0, 500);
        rect2Y = random(0, 500);
    }
}

