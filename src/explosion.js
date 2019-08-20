import Sprite from "./sprite.js";
export default class Explosion {
  constructor(xPos, yPos, imageSrc) {
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
    this.image.src = "./explosion.png";
    this.sourceWidth = 16;
    this.sourceHeight = 16;
    this.numberOfFrames = 4;
    this.frameDuration = 6;
    this.repeatAnimation = false;
    this.explosionSprite = new Sprite(
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
    this.readyForDeletion = false;
  }
  draw(ctx) {
    //ctx.fillStyle = "red";
    this.explosionSprite.draw(ctx);
  }
  update(delta) {
    this.explosionSprite.update(delta);
    if (this.explosionSprite.terminateSprite === true) {
      this.readyForDeletion = true;
    }
  }
}
