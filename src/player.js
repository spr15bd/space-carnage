export default class Player {
  constructor(screenWidth, screenHeight) {
    // declare player properties
    this.width = 150;
    this.height = 30;
    this.position = {
      x: screenWidth / 2 - this.width / 2,
      y: screenHeight - this.height - 10
    };
  }

  draw(ctx) {
    ctx.fillStyle = "red";
    let image = new Image();
    image.src = "./player.png";
    ctx.drawImage(
      image,
      0,
      0,
      16,
      16,
      this.position.x,
      this.position.y,
      16,
      16
    );
  }
}
