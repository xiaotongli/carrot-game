class Head {
  constructor(el, headLength, endGame) {
    this.node = document.createElement('div');
    this.node.setAttribute('id', 'head');
    el.appendChild(this.node);

    this.currentDirection = 'right';
    this.SPEED = 250;
    this.headLength = headLength;
    this.node.style.top = 0;
    this.node.style.left = 0;
    this.timeout = null

    this.prevPositions = []; // [ {"top": 0px, "left": 0px}]
    this.endGame = endGame;

    setTimeout(this.move.bind(this), this.SPEED)
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


    this.timeout = setTimeout(this.move.bind(this), this.SPEED)
    this.prevPositions.unshift({'top': head.style.top, 'left': head.style.left});

    this.prevPositions = this.prevPositions.slice(0, this.headLength+1);

    if (this.prevPositions.length) {
      for(let i = 0; i < this.prevPositions.length - 1;i++) {
        if(Number(this.prevPositions[i].top.replace('px', '')) === topPosition && 
        Number(this.prevPositions[i].left.replace('px', '')) === leftPosition && (i !==0)) {
          this.endGame();
        }
      } 
    }

    if (leftPosition > 650 || leftPosition < 0 || topPosition < 0 || topPosition > 650) { 
      this.endGame()
    }
  }

  incrementHeadLength(){
    this.headLength++;
  }
}
