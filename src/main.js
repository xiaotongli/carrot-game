let body;
let board;
let head;
let apple;
let snakeBody;
let snakeBodyCount; // ENDED HERE - haven't implemented multiple bodies 

document.addEventListener('DOMContentLoaded', () => {
  body = document.querySelector('body');
  board = document.querySelector('#board');

  head = new Head(board);
  apple = new Apple(board);

  body.addEventListener('keydown', (e) => {
    if (e.code === 'ArrowLeft') {
      console.log('pressed left');
      head.currentDirection = 'left';
    } else if (e.code === 'ArrowRight') {
      console.log('pressed right');
      head.currentDirection = 'right';
    } else if (e.code === 'ArrowUp') {
      console.log('pressed top');
      head.currentDirection = 'top';
    } else if (e.code === 'ArrowDown') {
      console.log('pressed bottom');
      head.currentDirection = 'bottom';
    }
  });  
});

window.setInterval(checkCollision, 100);

function checkCollision() {
  if (head && apple) {
    const topDistance = Math.abs(Number(head.node.style.top.replace('px', '')) - Number(apple.node.style.top.replace('px', '')));
    const leftDistance = Math.abs(Number(head.node.style.left.replace('px', '')) - Number(apple.node.style.left.replace('px', '')));
    if (topDistance < 50 && leftDistance < 50) {
      snakeBody = new Body(board, apple.node.style.top, apple.node.style.left, head);
      apple.createApple(); 
    }
  }
}
