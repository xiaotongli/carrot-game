class Head {
  constructor(el, headLength) {
    this.node = document.createElement('div');
    this.node.setAttribute('id', 'head');
    el.appendChild(this.node);

    this.currentDirection = 'right';
    this.SPEED = 250;
    this.headLength = headLength;
    this.node.style.top = 0;
    this.node.style.left = 0;

    this.prevPositions = []; // [ {"top": 0px, "left": 0px}]

    setTimeout(this.move.bind(this), this.SPEED);
  }

  move() {
    const head = this.node;
    const direction = this.currentDirection;

    let topPosition = Number(head.style.top.replace('px', ''));
    let leftPosition = Number(head.style.left.replace('px', ''));

    if (direction === 'right') {
      
      head.style.left = `${(leftPosition += 50)}px`;
    } else if (direction === 'left') {
      head.style.left = `${(leftPosition -= 50)}px`;
    } else if (direction === 'top') {
      head.style.top = `${(topPosition -= 50)}px`;
    } else {
      head.style.top = `${(topPosition += 50)}px`;
    }  

    // RETURN TO: define what 'ending the game' means (score, pop-up window, etc)
    if (leftPosition > 650 || leftPosition < 0 || topPosition < 0 || topPosition > 650) { 
      this.endGame();
    } 


    setTimeout(this.move.bind(this), this.SPEED);
    this.prevPositions.unshift({'top': head.style.top, 'left': head.style.left});

    this.prevPositions = this.prevPositions.slice(0, this.headLength+1);

    for(let i = 0; this.prevPositions.length - 1;i++) {
      if(Number(this.prevPositions[i].top.replace('px', '')) === topPosition && 
      Number(this.prevPositions[i].left.replace('px', '')) === leftPosition && (i !==0)) {
        this.endGame();
      }
    } 
  }

  incrementHeadLength(){
    this.headLength++;
  }

  endGame() {
    var r = confirm("Game Over :(  Your Score:" + this.headLength);
      if (r == true) {
        location.reload();
      } else {
        alert("Bye");
      }
  }

}
