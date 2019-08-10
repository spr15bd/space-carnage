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
      new Enemy(336, 30, 1, "./enemies.png"),
      new Enemy(432, 30, 1, "./enemies.png")
    );
    this.ticks = 0;
    //this.enemy = new Enemy(50, 30);
    //this.enemy2 = new Enemy(100, 30);
    //this.enemy.right();
    new Input(this.player);
  }

  // TODO
  moveEnemies() {
    this.enemies.forEach(enemy => {});
  }

  update(delta) {
    this.ticks++;
    this.player.update(delta);
    this.enemies.forEach((enemy, i) => {
      enemy.position.x = 350 + 330 * Math.sin(this.ticks * 0.02) + i * (32 * 2);
      enemy.update(delta);
      if (
        enemy.position.x < 0 ||
        enemy.position.x > this.screenWidth - enemy.width
      ) {
        //this.enemy.speed.x=0;
        //enemy.speed.x *= -1;
      }

      if (this.ticks > 500 && this.ticks < 1000) {
        enemy.speed.y = 20;
      }
      if (enemy.position.y > 1000) {
        this.ticks = 0;
        enemy.speed.y = 0;
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
