export default class Sprite {
  constructor(image, sourceWidth, sourceHeight, position) {
    this.image = image;
    this.sourceWidth = sourceWidth;
    this.sourceHeight = sourceHeight;
    this.position = position;
  }
  draw(ctx) {
    ctx.drawImage(
      this.image,
      0, // source x
      0, // source y
      this.sourceWidth,
      this.sourceHeight,
      this.position.x,
      this.position.y,
      37,
      23
    );
  }
}
