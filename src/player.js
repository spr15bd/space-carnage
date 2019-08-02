import Sprite from "./sprite.js";
//import Input from "./input.js";
export default class Player {
  constructor(screenWidth, screenHeight) {
    // declare player properties
    this.width = 32;
    this.height = 32;
    this.speed = 0;
    this.position = {
      x: screenWidth / 2 - this.width / 2,
      y: screenHeight - this.height - 10
    };
    this.image = new Image();
    this.image.src = "./player.png";
    this.sourceWidth = 16;
    this.sourceHeight = 16;
    this.playerSprite = new Sprite(this.image, this.sourceWidth, this.sourceHeight, this.position);
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
    this.playerSprite.draw(ctx);
  }
  update(delta) {
    // every delta milliSeconds
    if (!delta) return;
    this.position.x += this.speed / delta; // pixels per milliSecond
  }
}
