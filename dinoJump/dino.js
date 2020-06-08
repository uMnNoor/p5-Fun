class Dino {
  constructor(x, y) {
    this.pos = new p5.Vector(x, y);
    this.jumped = false;
  }

  show() {
    fill(45, 123, 182);
    noStroke();
    rect(this.pos.x, this.pos.y, 20, 40);
  }

  update() {
    if (keyCode === UP_ARROW && this.jumped === false) {
      if (this.pos.y === 60) {
        this.jumped = true;
      } else {
        this.pos.y -= 5;
      }
    } else if (this.jumped === true) {
      if (this.pos.y === 160) {
        this.jumped = false;
        keyCode = null;
      } else {
        this.pos.y += 5;
      }
    }
  }
}
