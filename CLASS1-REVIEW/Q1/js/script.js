"use strict";


function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(0);
    noStroke();

    // Draws the ellipses
    push();
    fill(19, 156, 235);
    ellipse(20, 15, 15);
    pop();

    push();
    fill(185, 19, 235);
    ellipse(40, 50, 30);
    pop();

    push();
    fill(69, 19, 235);
    ellipse(70,100, 60);
    pop();
}