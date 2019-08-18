import Sprite from "./sprite.js";

//import Input from "./input.js";
export default class Player {
  constructor(screenWidth, screenHeight) {
    // declare player properties
    this.width = 24;
    this.height = 30;
    this.screenWidth = screenWidth;
    this.screenHeight = screenHeight;
    this.speed = {
      x: 0,
      y: 0
    };
    this.position = {
      x: this.screenWidth / 2 - this.width / 2,
      y: this.screenHeight - this.height - 10
    };
    this.playerImage = new Image();
    this.playerImage.src = "./player.png";
    this.bulletImage = new Image();
    this.bulletImage.src = "./playerBullet.png";
    this.sourceWidth = 16;
    this.sourceHeight = 16;

    this.playerSprite = new Sprite(
      this.playerImage,
      this.sourceWidth,
      this.sourceHeight,
      this.position,
      this.width,
      this.height,
      4
    );
  }

  left() {
    this.speed.x = -25; // -25 pixels per second
  }

  right() {
    this.speed.x = 25; // +25 pixels per second
  }

  stop() {
    this.speed.x = 0;
  }

  draw(ctx) {
    //ctx.fillStyle = "red";

    this.playerSprite.draw(ctx);
  }

  update(delta) {
    // every delta milliSeconds
    if (!delta) return;
    this.position.x += this.speed.x / delta; // pixels per milliSecond
    this.playerSprite.update(delta);
  }
}
