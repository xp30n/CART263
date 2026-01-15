"use strict";

let rect1 = {
    x: 0, 
    y: 0, 
    w: 200, 
    h: 600,
    r: 33, 
    g: 55,
    b: 255
}

let rect2 = {
    x: 200, 
    y: 0, 
    w: 200, 
    h: 600,
    r: 46,
    g: 64, 
    b: 166
}

let rect3 = {
    x: 400, 
    y: 0, 
    w: 200, 
    h: 600,
    r: 26,
    g: 37,
    b: 100
}

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(0);
    noStroke();

    drawRect1();
    drawRect2();
    drawRect3();
    
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

function checkOverlap(x, y, w, h, r, g, b) {
    
}
