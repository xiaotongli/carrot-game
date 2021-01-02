let body;
let board;
let head;
let apple;
let snakeBody;
let snakeBodyCount = 0; 
let intervalSpeed = 250;
let allSnakeBodies = [];

document.addEventListener('DOMContentLoaded', () => {
  body = document.querySelector('body');
  board = document.querySelector('#board');
  headDiv = document.querySelector('#head');
  head = new Head(board, 1);
  apple = new Apple(board, head);

  body.addEventListener('keydown', (e) => {
    if (e.code === 'ArrowLeft' &&  head.currentDirection !== "right") {
      head.currentDirection = 'left';
    } else if (e.code === 'ArrowRight' &&  head.currentDirection !== "left") {
      head.currentDirection = 'right';
    } else if (e.code === 'ArrowUp' &&  head.currentDirection !== "bottom") {
      head.currentDirection = 'top';
    } else if (e.code === 'ArrowDown' &&  head.currentDirection !== "top") {
      head.currentDirection = 'bottom';
    }
  });  
});
 
var interval = window.setInterval(checkCollision, intervalSpeed);

function checkCollision() {
  if (head && apple) {
    const topDistance = Math.abs(Number(head.node.style.top.replace('px', '')) - Number(apple.node.style.top.replace('px', '')));
    const leftDistance = Math.abs(Number(head.node.style.left.replace('px', '')) - Number(apple.node.style.left.replace('px', '')));
    if (topDistance < 50 && leftDistance < 50) {
      clearInterval(interval);
      head.incrementHeadLength();
      incrementSpeed();
      snakeBodyCount++;
      apple.createApple(); 
    }
  }
}

function incrementSpeed(){
  intervalSpeed *= 0.95;
  interval = window.setInterval(checkCollision, intervalSpeed);
  for(let newSnakeBody of allSnakeBodies) {
    newSnakeBody.SPEED = intervalSpeed;
  }
  
  snakeBody = new Body(board, apple.node.style.top, apple.node.style.left, head, snakeBodyCount, intervalSpeed);
  allSnakeBodies.push(snakeBody);

  head.SPEED = intervalSpeed;
}
