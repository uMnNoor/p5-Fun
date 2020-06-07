class Food {
  constructor(x, y, c) {
    this.pos = new p5.Vector(x, y);
    this.point = round(random(5, 10));
    this.c = c;
  }

  show() {
    fill(237, 34, 93);
    stroke(237, 34, 93);
    square(this.pos.x, this.pos.y, this.c);
  }

  newFood() {
    this.pos.x = round(random(0, 19)) * 20;
    this.pos.y = round(random(2, 21)) * 20;
  }

  checkSnake(body) {
    for (let i = 0; i < body.length; i++) {
      if (this.pos.x === body[i].x && this.pos.y === body[i].y) {
        this.newFood();
        break;
      } else {
        continue;
      }
    }
  }

  eat(snake) {
    if (snake.x === this.pos.x && snake.y === this.pos.y) {
      this.newFood();
      score += this.point;
      this.point = round(random(5, 10));
    }
  }
}
