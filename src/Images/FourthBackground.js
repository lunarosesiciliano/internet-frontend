import React from "react";
import Sketch from "react-p5";
let cols;
let rows;
let scl = 10;
let xoff = 0;

let yoff = 0;

export default function FourthBackground() {
  const setup = (p5, canvasParentRef) => {
    p5.frameRate(15);
    const canvas = p5
      .createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL)
      .parent(canvasParentRef);
    cols = p5.windowWidth / scl;
    rows = p5.windowHeight / scl;
    canvas.position(0, 0);
    canvas.style("z-index", "-2");
    p5.fill(229, 204, 255, 200);
  };
  const draw = (p5) => {
    // flying -= 0.11;
    p5.loadPixels();
    p5.background(200, 200, 250);
    p5.stroke(20, 20, 255);
    // p5.noFill();
    p5.rotateX(p5.sin(p5.PI / 3));
    p5.rotateY(p5.cos(p5.PI / 3));
    p5.translate(-p5.windowWidth / 2, -p5.windowHeight / 2);
    for (let y = 0; y < rows; y++) {
      p5.beginShape(p5.TRIANGLE_STRIP);
      let r = p5.map(p5.random(0, 100), 10, 20, 200, 255, 0, 0, 0);
      let g = p5.map(p5.random(0, 100), 0, 5, 200, 255, 200, 200, 255);
      let b = p5.map(p5.random(0, 100), 10, 50, 200, 255, 200, 200, 255);

      p5.stroke(r, g, b);
      for (let x = 0; x < cols; x++) {
        p5.vertex(
          x * scl,
          y * scl,
          p5.map(p5.noise(xoff, yoff), -2, 1, -200, 300)
        );
        p5.vertex(
          x * scl,
          (y + 1) * scl,
          p5.map(p5.noise(xoff, yoff), 10, 30, -5, 60) + 10
        );
        yoff -= 0.8;
      }
      xoff += 0.5;
      scl += 0.0003;
      p5.endShape();
    }
  };
  return (
    <div>
      <Sketch className="p5-sketch" setup={setup} draw={draw} />
    </div>
  );
}
