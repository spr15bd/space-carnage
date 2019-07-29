import Sprite from "./sprite.js";
//import { runInThisContext } from "vm";
//import { deflateRaw } from "zlib";
export default class Player {
  constructor(screenWidth, screenHeight) {
    // declare player properties
    this.width = 150;
    this.height = 30;
    this.position = {
      x: screenWidth / 2 - this.width / 2,
      y: screenHeight - this.height - 10
    };
    this.image = new Image();
    this.image.src = "./player.png";
    this.playerSprite = new Sprite(this.image, this.position);
  }

  draw(ctx) {
    ctx.fillStyle = "red";
    this.playerSprite.draw(ctx);
  }
  update() {
    this.position.x += 0.1;
  }
}
