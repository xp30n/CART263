"use strict";


function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(0);

    // Draws the ellipses
    push();
    fill(255, 100, 100);
    ellipse(20, 15, 15);
    pop();
}