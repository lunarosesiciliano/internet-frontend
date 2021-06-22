import React from "react";
import Sketch from "react-p5";

export default function HomeBackground() {
  const setup = (p5, canvasParentRef) => {
    const canvas = p5
      .createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL)
      .parent(canvasParentRef);
    p5.angleMode(p5.DEGREES);

    canvas.position(0, 0);
    canvas.style("z-index", "-2");
    p5.background(255);
  };

  const draw = (p5) => {
    let scl = 0;
    // p5.background(255);
    p5.translate(400, 100);
    p5.rotateY(180);
    p5.rotateX(90);
    p5.rotate(145);
    for (let i = 0; i < 200; i++) {
      if (p5.mouseIsPressed) {
        p5.push();
        p5.strokeWeight(2);
        p5.stroke(255, 102, 0);
        p5.rotateX(45);
        p5.ellipse(i, i, p5.mouseX + 1, p5.mouseY / 2);
        p5.rotateX(90);
        p5.stroke(102, 0, 255);
        p5.circle(i, i + 1, p5.mouseX + 2, p5.mouseY + 2);
        p5.rotateX(120);
        p5.stroke(255, 0, 127);
        p5.ellipse(i, i + 3, p5.mouseX + 2, p5.mouseY + 2);
        p5.stroke(117, 242, 208);
        p5.triangle(i, i + 3, p5.mouseX + 2, p5.mouseY + 2, i * 2, i + 2);
      }
    }
    p5.pop();
  };

  return (
    <div>
      <Sketch className="p5-sketch" setup={setup} draw={draw} />
    </div>
  );
}
