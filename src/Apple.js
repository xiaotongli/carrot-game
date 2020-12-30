class Apple {
  constructor(el) {
    this.node = document.createElement('img');
    this.node.setAttribute('id', 'apple');
    this.node.setAttribute('src', 'src/assets/apple.jpg');

    el.appendChild(this.node);

    this.node.style.left = '';
    this.node.style.top = '';

    this.createApple();
  }

  createApple() {
    const randTop = Math.random() * 700;
    const randLeft = Math.random() * 700;
    const topPosition = randTop - (randTop % 50);
    const leftPosition = randLeft - (randLeft % 50);

    this.node.style.left = `${leftPosition}px`;
    this.node.style.top = `${topPosition}px`;
  }
}
