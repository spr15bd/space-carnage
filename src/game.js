import Player from "./player.js";
import Enemy from "./enemy.js";
import Input from "./input";
export default class Game {
  constructor(screenWidth, screenHeight) {
    this.screenWidth = screenWidth;
    this.screenHeight = screenHeight;
    this.player = new Player(this.screenWidth, this.screenHeight);
    this.enemy = new Enemy(50, 30);
    new Input(this.player);
  }

  update(delta) {
    this.player.update(delta);

    if (
      this.enemy.position.x < 0 ||
      this.enemy.position.x > this.screenWidth - this.enemy.width
    ) {
      this.enemy.down();
      this.enemy.speedX *= -1;
    }
  }
  draw(ctx) {
    this.player.draw(ctx);
    this.enemy.draw(ctx);
  }
}
