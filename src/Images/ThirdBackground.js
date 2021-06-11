import React from "react";
import Sketch from "react-p5";

// import P5sketch from "./P5sketch";

let angle = 0.0;
let offset = 340;
let scalar = 600;
let speed = 0.09;
let angle2 = 0.0;
let offset2 = 340;
let scalar2 = 600;
let speed2 = 0.19;

function ThirdBackground() {
  const setup = (p5, canvasParentRef) => {
    p5.frameRate(30);
    const canvas = p5
      .createCanvas(p5.windowWidth, p5.windowHeight)
      .parent(canvasParentRef);
    canvas.position(0, 0);
    canvas.style("z-index", "-2");
    p5.fill(0);
    p5.background(0);
  };
  const draw = (p5) => {
    let x = offset + Math.cos(angle) + scalar;
    let y = offset + Math.sin(angle) * scalar;

    let x2 = offset2 + Math.cos(angle2) + scalar2;
    let y2 = offset2 + Math.sin(angle2) * scalar2;

    p5.strokeWeight(0.2);
    p5.line(x, y, 1450, 330);
    p5.fill(10, 10, 255, 250);
    p5.strokeWeight(1);
    p5.stroke(0, 0, 255, 50);
    p5.ellipse(x, y, 30, 30);
    p5.stroke(255, 0, 0);
    angle += speed;
    scalar += speed;
    p5.strokeWeight(0.5);
    p5.line(x2, y2, 200, 330, 0.5);
    p5.strokeWeight(1);
    p5.fill(0, 0, 255);
    p5.ellipse(x2, y2, 30, 30);
    p5.stroke(0, 255, 0);
    angle2 += speed2;
    scalar2 += speed2;
  };
  return (
    <div>
      <Sketch className="p5-sketch" setup={setup} draw={draw} />
    </div>
  );
}

export default ThirdBackground;
