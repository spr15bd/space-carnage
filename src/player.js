import Sprite from "./sprite.js";
import Bullet from "./bullet.js";
//import Input from "./input.js";
export default class Player {
  constructor(screenWidth, screenHeight) {
    // declare player properties
    this.width = 24;
    this.height = 30;
    this.speed = {
      x: 0,
      y: 0
    };
    this.position = {
      x: screenWidth / 2 - this.width / 2,
      y: screenHeight - this.height - 10
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
    //this.bullet = null;
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

  shoot() {
    this.bullet = new Bullet(
      this.position.x + this.width / 2,
      this.position.y,
      0, // type of bullet, 0 for player 1 for enemy
      this.bulletImage
    );
  }

  draw(ctx) {
    //ctx.fillStyle = "red";
    if (this.bullet != null) this.bullet.draw(ctx);
    this.playerSprite.draw(ctx);
  }
  update(delta) {
    // every delta milliSeconds
    if (!delta) return;
    this.position.x += this.speed.x / delta; // pixels per milliSecond
    this.playerSprite.update(delta);
    if (this.bullet != null) this.bullet.update(delta);
  }
}
