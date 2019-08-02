export default class Sprite {
  constructor(image, width, height, position) {
    this.image = image;
    this.width = width;
    this.height = height;
    this.position = position;
  }
  draw(ctx) {
    ctx.drawImage(
      this.image,
      0,
      0,
      this.width,
      this.height,
      this.position.x,
      this.position.y,
      32,
      32
    );
  }
}
