let dino;
let tree;

function setup() {
  createCanvas(400, 200);
  // frameRate(10);
  dino = new Dino(40, 160);
}

function draw() {
  background(200);
  dino.show();
  dino.update();
}
