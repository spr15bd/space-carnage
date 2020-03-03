import Sprite from "./sprite.js";
export default class Bonus {
  constructor(xPos, yPos, speed, image) {
    // declare bullet properties
    this.width = 32;
    this.height = 32;
    this.position = {
      x: xPos,
      y: yPos
    };
    this.speed = {
      x: 0,
      y: -0.3
    };
    this.image = image;
    this.sourceWidth = 32;
    this.sourceHeight = 32;

    this.bonusSprite = new Sprite(
      this.image,
      this.sourceWidth,
      this.sourceHeight,
      0,
      0,
      this.position,
      this.width,
      this.height,
      1
    );
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(
      this.position.x + this.width / 2,
      this.position.y + this.height / 2
    );

    ctx.rotate((this.angle * Math.PI) / 180);
    this.bonusSprite.draw(ctx);

    ctx.restore();
  }
  update(delta) {
    // every delta milliSeconds
    if (!delta) return;
    this.position.y += this.speed.y / delta; // pixels per milliSecond
  }
}
