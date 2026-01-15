"use strict";


function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(0);
    noStroke();

    drawEllipse(20, 15, 15, 19, 156, 235);
    drawEllipse(40, 50, 30, 185, 19, 235);
    drawEllipse(70, 100, 60, 69, 19, 235);

    // Draws the ellipses
    // push();
    // fill(19, 156, 235);
    // ellipse(20, 15, 15);
    // pop();

    // push();
    // fill(185, 19, 235);
    // ellipse(40, 50, 30);
    // pop();

    // push();
    // fill(69, 19, 235);
    // ellipse(70,100, 60);
    // pop();
}

function drawEllipse(x,y,w,r,g,b) {
    push();
    fill(r, g, b);
    ellipse(x, y, w);
    pop();
}
