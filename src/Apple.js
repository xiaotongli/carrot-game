class Apple {
  constructor(el, head) {
    this.node = document.createElement('img');
    this.node.setAttribute('id', 'apple');
    this.node.setAttribute('src', 'src/assets/boy.png');

    el.appendChild(this.node);

    this.node.style.left = '';
    this.node.style.top = '';

    this.head = head;
    this.createApple(this.head);
  }

  createApple(head) {
    let randTop = Math.random() * 700;
    let randLeft = Math.random() * 700;
    let topPosition = randTop - (randTop % 50);
    let leftPosition = randLeft - (randLeft % 50);

    let isBody = true;
    while(isBody) {
      isBody = false;
      for(let position of this.head.prevPositions) {
        if(Number(position.top.replace('px', '')) === topPosition && Number(position.left.replace('px', '')) === leftPosition) {
          isBody = true;
          randTop = Math.random() * 700;
          randLeft = Math.random() * 700;
          topPosition = randTop - (randTop % 50);
          leftPosition = randLeft - (randLeft % 50);
        }
      }
    }

    this.node.style.left = `${leftPosition}px`;
    this.node.style.top = `${topPosition}px`;
  }
}
