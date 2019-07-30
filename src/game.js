import Player from "./player.js";
import Input from "./input";
export default class Game {
  constructor(screenWidth, screenHeight) {
    this.screenWidth = screenWidth;
    this.screenHeight = screenHeight;
    this.player = new Player(this.screenWidth, this.screenHeight);
    new Input(this.player);
  }

  update() {
    this.player.update();
  }
  draw(ctx) {
    this.player.draw(ctx);
  }
}
