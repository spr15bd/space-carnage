import Sprite from "./sprite.js";

export default class Enemy {
  constructor(xPos, yPos, angle, enemyType, imageSrc) {
    // declare enemy properties
    this.enemyType = enemyType;
    this.width = 32;
    this.height = 32;
    this.speed = {
      x: 0,
      y: 0
    };
    this.startXPosition = xPos;

    this.position = {
      x: xPos,
      y: yPos
    };
    this.oldPosition = {
      x: xPos,
      y: yPos
    };
    this.image = new Image();
    this.image.src = imageSrc;
    this.bulletImage = new Image();
    this.bulletImage.src = "./enemyBullet.png";
    this.sourceWidth = 32;
    this.sourceHeight = 32;
    this.sourceY = enemyType === 0 ? 0 : 32;
    this.numberOfFrames = 8;
    this.frameDuration = 15;
    this.repeatAnimation = true;
    this.angle = angle;
    this.enemySprite = new Sprite(
      this.image,
      this.sourceWidth,
      this.sourceHeight,
      this.sourceY,
      this.position,
      this.width,
      this.height,
      this.numberOfFrames, // number of frames in the spritsheet
      this.frameDuration,
      this.repeatAnimation,
      this.angle
    );
    this.start = true;
    this.move = 0;
    this.now = 0;
    this.onScreen = false;
    //this.turning = false;
    //this.moving = false;
    //this.bulletPool = [];
  }

  draw(ctx) {
    //ctx.fillStyle = "red";
    ctx.save();
    ctx.translate(
      this.position.x + this.width / 2,
      this.position.y + this.height / 2
    );

    ctx.rotate(((this.angle + 90) * Math.PI) / 180);
    this.enemySprite.draw(ctx);

    ctx.restore();
  }
  update(delta) {
    // every delta milliSeconds
    if (!delta) return;
    this.speed.x =
      (60 / delta).toFixed(6) * Math.cos((this.angle * Math.PI) / 180);
    this.speed.y =
      (60 / delta).toFixed(6) * Math.sin((this.angle * Math.PI) / 180);
    // movement across screen
    // pixels per milliSecond

    this.position.x += this.speed.x;
    this.position.y += this.speed.y;
    this.enemySprite.update(delta);
  }
}
