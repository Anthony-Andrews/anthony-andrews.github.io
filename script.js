// zdog-demo.js

// create illo
let illo = new Zdog.Illustration({
  // set canvas with selector
  element: ".zdog-canvas",
});

// circle
new Zdog.Ellipse({
  addTo: illo,
  diameter: 80,
  // position closer
  translate: { z: 40 },
  stroke: 20,
  color: "#636",
});

// square
new Zdog.Rect({
  addTo: illo,
  width: 80,
  height: 80,
  // position further back
  translate: { z: -40 },
  stroke: 12,
  color: "#E62",
  fill: true,
});

function animate() {
  // rotate illo each frame
  illo.rotate.y += 0.03;
  illo.updateRenderGraph();
  // animate next frame
  requestAnimationFrame(animate);
}
// start animation
animate();
