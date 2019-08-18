import Sprite from "./sprite.js";
export default class Bullet {
  constructor(xPos, yPos, bulletType, image) {
    // declare bullet properties
    this.bulletType = bulletType;
    this.bulletDelay = 100;
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
  collidesWith(enemy) {
    if (
      this.position.x >= enemy.position.x &&
      this.position.x <= enemy.position.x + enemy.width - this.width &&
      this.position.y >= enemy.position.y &&
      this.position.y <= enemy.position.y + enemy.height - this.height
    ) {
      return true;
    }
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
