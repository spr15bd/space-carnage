import Sprite from "./sprite.js";
export default class Bullet {
  constructor(xPos, yPos, bulletType, image) {
    // declare bullet properties
    this.bulletType = bulletType;
    this.width = 4;
    this.height = 8;
    this.position = {
      x: xPos,
      y: yPos
    };
    this.speed = {
      x: 0,
      y: -80
    };
    this.image = image;
    //this.image.src = imageSrc;
    this.sourceWidth = 2;
    this.sourceHeight = 4;

    this.bulletSprite = new Sprite(
      this.image,
      this.sourceWidth,
      this.sourceHeight,
      this.position,
      this.width,
      this.height,
      1
    );
  }
  draw(ctx) {
    this.bulletSprite.draw(ctx);
  }
  update(delta) {
    // every delta milliSeconds
    if (!delta) return;
    this.position.y += this.speed.y / delta; // pixels per milliSecond
    //this.bulletSprite.update(delta);
  }
}
