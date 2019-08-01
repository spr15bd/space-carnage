import Sprite from "./sprite.js";
//import Input from "./input.js";
export default class Enemy {
  constructor(xPos, yPos) {
    // declare player properties
    this.width = 32;
    this.height = 32;
    this.speed = 0;
    this.position = {
      x: xPos,
      y: yPos
    };
    this.image = new Image();
    this.image.src = "./enemies.png";
    this.enemySprite = new Sprite(this.image, this.position);
  }

  left() {
    this.speed = -25; // -25 pixels per second
  }

  right() {
    this.speed = 25; // +25 pixels per second
  }

  stop() {
    this.speed = 0;
  }

  draw(ctx) {
    //ctx.fillStyle = "red";
    this.enemySprite.draw(ctx);
  }
  update(delta) {
    // every delta milliSeconds
    if (!delta) return;
    this.position.x += this.speed / delta; // pixels per milliSecond
  }
}
