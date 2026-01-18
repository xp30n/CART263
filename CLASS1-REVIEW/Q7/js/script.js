
"use strict";

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(0);

    for (let x = 0; x <= width; x +=50) {
        for (let y = 0; y <= height; y +=50) {
            fill(0, 0, 255);
            ellipse(x, y, 45, 45);
        }
    }
    
}
