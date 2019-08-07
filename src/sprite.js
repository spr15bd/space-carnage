export default class Sprite {
  constructor(
    image,
    sourceWidth,
    sourceHeight,
    position,
    targetWidth,
    targetHeight,
    numFrames
  ) {
    this.image = image;
    this.sourceWidth = sourceWidth;
    this.sourceHeight = sourceHeight;
    this.position = position;
    this.targetWidth = targetWidth;
    this.targetHeight = targetHeight;

    this.frameIndex = 0;
    this.ticksPerFrame = 15;
    this.ticks = 0;
  }
  update(delta) {
    this.ticks++;
    if (this.ticks >= this.ticksPerFrame) {
      this.frameIndex++;
      if (this.frameIndex >= 8) {
        this.frameIndex = 0;
      }
      this.ticks = 0;
    }
  }
  draw(ctx) {
    ctx.drawImage(
      this.image,
      32 * this.frameIndex, // source x
      0, // source y
      this.sourceWidth,
      this.sourceHeight,
      this.position.x,
      this.position.y,
      this.targetWidth,
      this.targetHeight
    );
  }
}
