import Sprite from "./sprite.js";

export default class Enemy {
  constructor(xPos, yPos, enemyType, imageSrc) {
    // declare enemy properties
    this.enemyType = enemyType;
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
    this.image.src = imageSrc;
    this.bulletImage = new Image();
    this.bulletImage.src = "./enemyBullet.png";
    this.sourceWidth = 32;
    this.sourceHeight = 32;
    this.numberOfFrames = 8;
    this.frameDuration = 15;
    this.repeatAnimation = true;
    this.enemySprite = new Sprite(
      this.image,
      this.sourceWidth,
      this.sourceHeight,
      this.position,
      this.width,
      this.height,
      this.numberOfFrames, // number of frames in the spritsheet
      this.frameDuration,
      this.repeatAnimation
    );
    this.now = 0;
    //this.moving = false;
    //this.bulletPool = [];
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

    // movement across screen
    // pixels per milliSecond

    this.position.x += this.speed.x;
    this.position.y += this.speed.y;
    this.enemySprite.update(delta);
  }
}
