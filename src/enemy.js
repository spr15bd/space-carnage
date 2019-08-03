import Sprite from "./sprite.js";
//import Input from "./input.js";
export default class Enemy {
  constructor(xPos, yPos) {
    // declare player properties
    this.width = 32;
    this.height = 32;
    this.speedX = 25;
    this.position = {
      x: xPos,
      y: yPos
    };
    this.image = new Image();
    this.image.src = "./enemies.png";
    this.sourceWidth = 32;
    this.sourceHeight = 32;
    this.enemySprite = new Sprite(
      this.image,
      this.sourceWidth,
      this.sourceHeight,
      this.position
    );
  }

  left() {
    this.speedX = -25; // -25 pixels per second
  }

  right() {
    this.speedX = 25; // +25 pixels per second
  }

  down() {
    this.speedY = 25; // +25 pixels per second
  }

  stop() {
    this.speedX = 0;
    this.speedY = 0;
  }

  draw(ctx) {
    //ctx.fillStyle = "red";
    this.enemySprite.draw(ctx);
  }
  update(delta) {
    // every delta milliSeconds
    if (!delta) return;
    this.position.x += this.speedX / delta; // pixels per milliSecond
    this.position.y += this.speedY / delta; // pixels per milliSecond
  }
}
