import Sprite from "./sprite.js";
//import Input from "./input.js";
export default class Player {
  constructor(screenWidth, screenHeight) {
    // declare player properties
    this.width = 150;
    this.height = 30;
    this.speed = 0;
    this.position = {
      x: screenWidth / 2 - this.width / 2,
      y: screenHeight - this.height - 10
    };
    this.image = new Image();
    this.image.src = "./player.png";
    this.playerSprite = new Sprite(this.image, this.position);
  }

  left() {
    this.speed = -5;
  }

  right() {
    this.speed = 5;
  }

  stop() {
    this.speed = 0;
  }

  draw(ctx) {
    //ctx.fillStyle = "red";
    this.playerSprite.draw(ctx);
  }
  update() {
    this.position.x += this.speed;
  }
}
