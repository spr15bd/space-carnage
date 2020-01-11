import Sprite from "./sprite.js";
export default class Block {
  constructor(xPos, yPos, width, height, blockType, imageSrc) {
    // declare bullet properties
    //this.type = bulletType;
    //this.bulletDelay = 100;
    this.width = width;
    this.height = height;
    this.blockType = blockType;
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
    // if the block is a moving (forcefield) block, make the source width smaller than the whole 8x8 block - this is to prevent flickering in the animation
    if (this.blockType === 0) {
      this.sourceWidth = 4;
      this.sourceHeight = 4;
    } else if (this.blockType === 7) {
      this.sourceWidth = 96;
      this.sourceHeight = 16;
    } else {
      this.sourceWidth = 8;
      this.sourceHeight = 8;
    }
    this.blockSprite = new Sprite(
      this.image,
      this.sourceWidth,
      this.sourceHeight,
      this.blockType * 8,
      0,
      this.position,
      this.width,
      this.height,
      1
    );
    this.startX = this.position.x;
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(
      this.position.x + this.width / 2,
      this.position.y + this.height / 2
    );

    ctx.rotate((this.angle * Math.PI) / 180);
    this.blockSprite.draw(ctx);

    ctx.restore();
  }
  update(delta) {
    // every delta milliSeconds
    if (!delta) return;
    if (this.blockType === 0) {
      this.position.x += 8; // pixels per milliSecond
      if (this.position.x > 580) {
        this.position.x = 204;
      }
    }

    //this.bulletSprite.update(delta);
  }
  moveTo(x, y, deltaX, deltaY) {
    if (!deltaX || !deltaY || this.paused) return;
    /*if (
      Math.round(this.position.x) === x &&
      Math.round(this.position.y) === y
    ) {
      return;
    }*/
    if (this.position.x !== x) {
      this.speed.x = (x - this.position.x) * (deltaX / 1000);
    }
    if (this.position.y !== y) {
      this.speed.y = (y - this.position.y) * (deltaY / 1000);
    }
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;
  }
}
