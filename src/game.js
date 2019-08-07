import Player from "./player.js";
import Enemy from "./enemy.js";
import Input from "./input";
export default class Game {
  constructor(screenWidth, screenHeight) {
    this.screenWidth = screenWidth;
    this.screenHeight = screenHeight;
    this.player = new Player(this.screenWidth, this.screenHeight);
    this.enemies = [];
    this.enemies.push(
      new Enemy(50, 30, 1, "./enemies.png"),
      new Enemy(100, 30, 0, "./enemies.png")
    );
    //this.enemy = new Enemy(50, 30);
    //this.enemy2 = new Enemy(100, 30);
    //this.enemy.right();
    new Input(this.player);
  }

  update(delta) {
    this.player.update(delta);
    this.enemies.forEach(enemy => {
      enemy.update(delta);
      if (
        enemy.position.x < 0 ||
        enemy.position.x > this.screenWidth - enemy.width
      ) {
        //this.enemy.speed.x=0;

        enemy.speed.x *= -1;
      }
    });
    //this.enemy.update(delta);
    //this.enemy2.update(delta);
  }
  draw(ctx) {
    this.player.draw(ctx);
    this.enemies.forEach(enemy => {
      enemy.draw(ctx);
    });
    //this.enemy.draw(ctx);
    //this.enemy2.draw(ctx);
  }
}
