export default class Sprite {
  constructor(
    image,
    sourceWidth,
    sourceHeight,
    position,
    width,
    height,
    numFrames
  ) {
    this.image = image;
    this.sourceWidth = sourceWidth;
    this.sourceHeight = sourceHeight;
    this.position = position;
    this.width = width;
    this.height = height;
    this.numFrames = numFrames;
    this.frameIndex = 0;
    this.ticksPerFrame = 15;
    this.ticks = 0;
  }
  update(delta) {
    this.ticks++;
    if (this.ticks >= this.ticksPerFrame) {
      this.frameIndex++;
      if (this.frameIndex >= this.numFrames) {
        this.frameIndex = 0;
      }
      this.ticks = 0;
    }
  }
  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.sourceWidth * this.frameIndex, // source x
      0, // source y
      this.sourceWidth,
      this.sourceHeight,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}
