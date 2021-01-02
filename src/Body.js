class Body {
    constructor(el, initialTop, initialLeft, head, length, speed) {
        this.node = document.createElement('div');
        this.node.setAttribute('id', 'snakeBody');
        el.appendChild(this.node);

        this.SPEED = speed;

        this.node.style.top = initialTop;
        this.node.style.left = initialLeft;

        this.length = length;
        this.head = head;
        setTimeout(this.move.bind(this), this.SPEED);
    }

    move() {
        this.node.style.top = this.head.prevPositions[this.length].top;
        this.node.style.left = this.head.prevPositions[this.length].left;

        if(this.head.currentDirection === 'left' || this.head.currentDirection === 'right') {
            this.node.style.backgroundImage = "url(src/assets/body-side.png)";
        } else {
            this.node.style.backgroundImage = "url(src/assets/body.png)";
        }

        setTimeout(this.move.bind(this), this.SPEED);
    }
}