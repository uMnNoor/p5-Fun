class Snake {
  constructor(x, y, c) {
    this.head = new p5.Vector(x, y);
    this.body = [this.head];
    this.c = c;
    this.direc;
    this.moving;
  }

  show() {
    for (let i = 0; i < this.body.length; i++) {
      if (i === 0) {
        fill(0);
        stroke(0);
        square(this.body[i].x, this.body[i].y, this.c);
      } else {
        fill(100);
        stroke(255);
        square(this.body[i].x, this.body[i].y, this.c);
      }
    }
  }

  update() {
    if (this.head.x === -20) {
      // this.gameOver();
      this.head.x = 380;
    } else if (this.head.x === 400) {
      // this.gameOver();
      this.head.x = -20;
    } else if (this.head.y === 20) {
      // this.gameOver();
      this.head.y = 440;
    } else if (this.head.y === 440) {
      // this.gameOver();
      this.head.y = 40;
    }

    if (
      keyCode === RIGHT_ARROW &&
      this.head.x !== 400 &&
      this.moving !== "left"
    ) {
      this.direc = "r";
      this.moving = "right";
      this.moveAll(this.direc);
    } else if (
      keyCode === LEFT_ARROW &&
      this.head.x !== -20 &&
      this.moving !== "right"
    ) {
      this.direc = "l";
      this.moving = "left";
      this.moveAll(this.direc);
    } else if (
      keyCode === DOWN_ARROW &&
      this.head.y !== 440 &&
      this.moving !== "up"
    ) {
      this.direc = "d";
      this.moving = "down";
      this.moveAll(this.direc);
    } else if (
      keyCode === UP_ARROW &&
      this.head.y !== 20 &&
      this.moving !== "down"
    ) {
      this.direc = "u";
      this.moving = "up";
      this.moveAll(this.direc);
    } else {
    }

    // Cannot reverse
    if (
      this.moving === "right" &&
      keyCode === LEFT_ARROW &&
      this.head.x !== 400
    ) {
      this.direc = "r";
      this.moving = "right";
      this.moveAll(this.direc);
    } else if (
      this.moving === "left" &&
      keyCode === RIGHT_ARROW &&
      this.head.x !== -20
    ) {
      this.direc = "l";
      this.moving = "left";
      this.moveAll(this.direc);
    } else if (
      this.moving === "up" &&
      keyCode === DOWN_ARROW &&
      this.head.y !== 20
    ) {
      this.direc = "u";
      this.moving = "up";
      this.moveAll(this.direc);
    } else if (
      this.moving === "down" &&
      keyCode === UP_ARROW &&
      this.head.y !== 440
    ) {
      this.direc = "d";
      this.moving = "down";
      this.moveAll(this.direc);
    }
  }

  moveAll(direc) {
    let currentSec;
    for (let i = 0; i < this.body.length; i++) {
      if (direc === "r") {
        if (i === 0) {
          currentSec = new p5.Vector(this.body[i].x, this.body[i].y);
          this.body[i].x += this.c;
        } else {
          let tempSec = new p5.Vector(this.body[i].x, this.body[i].y);
          currentSec = this.switchPos(this.body[i], currentSec, tempSec);
        }
      } else if (direc === "l") {
        if (i === 0) {
          currentSec = new p5.Vector(this.body[i].x, this.body[i].y);
          this.body[i].x -= this.c;
        } else {
          let tempSec = new p5.Vector(this.body[i].x, this.body[i].y);
          currentSec = this.switchPos(this.body[i], currentSec, tempSec);
        }
      } else if (direc === "d") {
        if (i === 0) {
          currentSec = new p5.Vector(this.body[i].x, this.body[i].y);
          this.body[i].y += this.c;
        } else {
          let tempSec = new p5.Vector(this.body[i].x, this.body[i].y);
          currentSec = this.switchPos(this.body[i], currentSec, tempSec);
        }
      } else if (direc === "u") {
        if (i === 0) {
          currentSec = new p5.Vector(this.body[i].x, this.body[i].y);
          this.body[i].y -= this.c;
        } else {
          let tempSec = new p5.Vector(this.body[i].x, this.body[i].y);
          currentSec = this.switchPos(this.body[i], currentSec, tempSec);
        }
      }
    }
    currentSec = null;
  }

  switchPos(block, curr, temp) {
    block.x = curr.x;
    block.y = curr.y;
    return temp;
  }

  checkCollision() {
    for (let i = 0; i < this.body.length; i++) {
      if (i === 0) {
        continue;
      } else {
        if (this.head.x === this.body[i].x && this.head.y === this.body[i].y) {
          keyCode = null;
          this.gameOver();
          break;
        }
      }
    }
  }

  gameOver() {
    keyCode = null;
    this.body = [];
    this.head.x = 400 / 2;
    this.head.y = 400 / 2;
    this.body.push(this.head);
    score = 0;
  }

  eatFood(food) {
    if (food.x === this.head.x && food.y === this.head.y) {
      let newBody = new p5.Vector(this.body[this.body.length - 1]);
      this.body.push(newBody);
    }
  }
}
