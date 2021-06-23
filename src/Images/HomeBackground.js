import React from "react";
import Sketch from "react-p5";
let gap = 15;
let cirNum = 360;
let cirSize = 150;
let angle;
export default function HomeBackground() {
  const setup = (p5, canvasParentRef) => {
    const canvas = p5
      .createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL)
      .parent(canvasParentRef);
    p5.angleMode(p5.DEGREES);

    canvas.position(0, 0);
    canvas.style("z-index", "-2");
  };

  const draw = (p5) => {
    p5.push();
    p5.translate(0, 0);
    p5.rotate(angle);
    p5.rotateX(angle);
    angle = p5.map(p5.mouseX, 0, p5.width, -1, 1);
    angle = angle++;
    p5.background(0);
    p5.noFill();
    p5.stroke(255);
    p5.strokeWeight(1);
    for (let i = 0; i < cirNum; i++) {
      p5.stroke(255);
      p5.circle(0, 0, cirSize + gap * i, cirSize + gap * i);
      p5.stroke(0);
      p5.strokeWeight(2);
      p5.arc(0, 0, cirSize + gap * i, cirSize + gap * i, 10, 360 - i / 2);
      // p5.arc(0, 0, cirSize + gap * i, cirSize + gap * i, 10, 360 - i * 5);
      // p5.circle(2, 2, cirSize + gap * i * 2, cirSize + gap / i);
    }
    p5.pop();
  };

  return (
    <div>
      <Sketch className="p5-sketch" setup={setup} draw={draw} />
    </div>
  );
}
