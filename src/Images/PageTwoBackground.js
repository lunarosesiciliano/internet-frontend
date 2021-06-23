import React from "react";
import Sketch from "react-p5";

export default function PageTwoBackground() {
  const setup = (p5, canvasParentRef) => {
    const canvas = p5
      .createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL)
      .parent(canvasParentRef);
    p5.angleMode(p5.DEGREES);

    canvas.position(0, 0);
    canvas.style("z-index", "-2");
    // p5.fill(229, 204, 255, 200);
  };

  const draw = (p5) => {
    p5.background(0);
    p5.rotate(p5.sin(p5.frameCount / 6));
    p5.rotateX(45);
    p5.noFill();
    p5.stroke(1);
    p5.strokeWeight(1);

    for (let i = 0; i < 40; i++) {
      let r = p5.map(p5.sin(p5.frameCount * 2), -1, 1, 100, 255);
      let g = p5.map(i * 2, 0, 1, 5, 255);
      let b = p5.map(p5.cos(p5.frameCount * 5), -1, 1, 200, 255);

      p5.stroke(r, g, b);
      p5.rotateY(45);
      p5.rotate(p5.frameCount / 8);

      p5.beginShape();
      for (let j = 0; j < 40; j++) {
        let rad = i * 10;
        let x = rad * p5.cos(j);
        let y = rad * p5.sin(j);
        let z = p5.sin(p5.frameCount + i) * 200;
        // p5.vertex(x, y, z);
        // p5.vertex(x, y, z * 3);
        // p5.circle(0, y + 2, z);
        // p5.ellipse(x * 4, y * 4, z * 4, z * 4);
        // p5.vertex(x * 6, y * 6, z * 6);
        // p5.vertex(x * 10, y * 10, z * 10);
        // p5.strokeWeight(2);
        // p5.ellipse(x * 4, y * 4, z * 4, z * 4);
        p5.triangle(x * 3, x * 2, y / 3, y * 2, z / 4, z * 4);
        // p5.line(x / 2, y, y);
        // p5.line(x, y, y, z);
        // p5.fill(0);
      }
      p5.endShape(p5.CLOSE);
    }
  };
  return (
    <div>
      <Sketch className="p5-sketch" setup={setup} draw={draw} />
    </div>
  );
}
