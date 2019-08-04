import Sprite from "./sprite.js";
//import Input from "./input.js";
export default class Enemy {
  constructor(xPos, yPos) {
    // declare player properties
    this.width = 32;
    this.height = 32;
    this.speed = {
      x: 0,
      y: 0
    };
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
      this.position,
      4 // number of frames in the spritsheet
    );
  }

  left() {
    this.speed.x = -25; // -25 pixels per second
  }

  right() {
    this.speed.x = 25; // +25 pixels per second
  }

  down() {
    this.speed.y = 25; // +25 pixels per second
    this.speed.x = 0;
  }

  stop() {
    this.speed.x = 0;
    this.speed.y = 0;
  }

  draw(ctx) {
    //ctx.fillStyle = "red";
    this.enemySprite.draw(ctx);
  }
  update(delta) {
    // every delta milliSeconds
    if (!delta) return;
    this.position.x += this.speed.x / delta; // pixels per milliSecond
    this.position.y += this.speed.y / delta; // pixels per milliSecond
    //this.stop();
  }
}
