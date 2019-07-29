export default class Sprite {
  constructor(image, position) {
    this.image = image;
    this.position = position;
  }
  draw(ctx) {
    ctx.drawImage(
      this.image,
      0,
      0,
      16,
      16,
      this.position.x,
      this.position.y,
      32,
      32
    );
  }
}
