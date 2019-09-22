import Sprite from "./sprite.js";
export default class Block {
  constructor(xPos, yPos, imageSrc) {
    // declare bullet properties
    //this.type = bulletType;
    //this.bulletDelay = 100;
    this.width = 8;
    this.height = 8;
    this.position = {
      x: xPos,
      y: yPos
    };
    this.speed = {
      x: 30,
      y: 0
    };
    this.image = new Image();
    this.image.src = imageSrc;
    this.sourceWidth = 8;
    this.sourceHeight = 4;

    this.blockSprite = new Sprite(
      this.image,
      this.sourceWidth,
      this.sourceHeight,
      0,
      this.position,
      this.width,
      this.height,
      1
    );
    this.startX = this.position.x;
  }

  draw(ctx) {
    this.blockSprite.draw(ctx);
  }
  update(delta) {
    // every delta milliSeconds
    if (!delta) return;
    this.position.x += 30 / delta; // pixels per milliSecond
    if (this.position.x > this.startX + 150) {
      this.position.x = this.startX;
    }
    //this.bulletSprite.update(delta);
  }
}
