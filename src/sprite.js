export default class Sprite {
  constructor(
    image,
    sourceWidth,
    sourceHeight,
    sourceY,
    position,
    width,
    height,
    numFrames,
    frameDuration,
    repeatAnimation,
    angle
  ) {
    this.image = image;
    this.sourceWidth = sourceWidth;
    this.sourceHeight = sourceHeight;
    this.angle = angle;
    this.sourceY = sourceY;
    this.position = position;
    this.width = width;
    this.height = height;
    this.numFrames = numFrames;
    this.frameIndex = 0;
    this.ticksPerFrame = frameDuration;
    this.repeatAnimation = repeatAnimation;
    this.ticks = 0;
    this.terminateSprite = false;
  }
  update(delta) {
    this.ticks++;
    if (this.ticks >= this.ticksPerFrame) {
      this.frameIndex++;
      if (this.frameIndex >= this.numFrames) {
        if (this.repeatAnimation === true) {
          this.frameIndex = 0;
        } else {
          this.terminateSprite = true;
        }
      }
      this.ticks = 0;
    }
  }
  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.sourceWidth * this.frameIndex, // source x
      this.sourceY, // source y
      this.sourceWidth,
      this.sourceHeight,
      -this.width / 2,
      -this.height / 2,
      this.width,
      this.height
    );
  }
}
