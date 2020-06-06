let snake;
let food;
let c = 20;
let score = 0;

function setup() {
  createCanvas(400, 440);
  frameRate(10);
  snake = new Snake(width / 2, height / 2, c);
  food = new Food(round(random(0, 19)) * 20, round(random(2, 21)) * 20, c);
}

function draw() {
  background(0);
  fill(200);
  noStroke();
  square(0, 40, 400);
  textSize(20);
  fill(255);
  text(score, 180, 30);
  snake.eatFood(food.pos);
  food.eat(snake.head);
  food.checkSnake(snake.body);
  snake.show();
  snake.update();
  snake.checkCollision();
  food.show();
}
