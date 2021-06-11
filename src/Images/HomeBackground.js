import React from "react";
import Sketch from "react-p5";

export default function PageTwoBackground() {
  const setup = (p5, canvasParentRef) => {
    const canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight);
    // .parent(canvasParentRef);
    // p5.angleMode(p5.DEGREES);
    p5.background(255);

    canvas.position(0, 0);
    canvas.style("z-index", "-2");
  };

  const draw = (p5) => {
    p5.translate(p5.mouseX, p5.mouseY);
    let scalar = p5.mouseX / 50;
    p5.fill(0);
    if (p5.mouseIsPressed) {
      p5.stroke(0, 0, 255);
    } else {
      p5.stroke(0, 255, 0);
      p5.fill(255);
    }
    p5.scale(scalar);
    p5.strokeWeight(1.0 / scalar);
    p5.rect(-15, -15, 30, 30);
  };

  return (
    <div>
      <Sketch className="p5-sketch" setup={setup} draw={draw} />
    </div>
  );
}
