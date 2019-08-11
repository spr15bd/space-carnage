import Player from "./player.js";
import Enemy from "./enemy.js";
import Input from "./input";

const GAMESTATE = {
  MENU: 0,
  GAMEINPROGRESS: 1
};
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
    this.randomHalt = 300;
    this.gameState = GAMESTATE.MENU;
    //this.enemy = new Enemy(50, 30);
    //this.enemy2 = new Enemy(100, 30);
    //this.enemy.right();
    new Input(this.player, this);
  }

  // TODO
  moveEnemies() {
    this.enemies.forEach(enemy => {});
  }

  start() {
    this.gameState = GAMESTATE.GAMEINPROGRESS;
  }

  update(delta) {
    this.ticks++;
    this.player.update(delta);
    this.enemies.forEach((enemy, i) => {
      enemy.position.x = 350 + 330 * Math.sin(this.ticks * 0.02) + i * (32 * 2);

      /*if (
        enemy.position.x < 0 ||
        enemy.position.x > this.screenWidth - enemy.width
      ) {
        //this.enemy.speed.x=0;
        //enemy.speed.x *= -1;
      }
      */
      if (enemy.position.y < 30) {
        enemy.speed.y = 0;
      }
      if (this.ticks % this.randomHalt === 0 && enemy.speed.y === 0) {
        enemy.speed.y = 20;
      }

      if (enemy.position.y > this.screenHeight - this.player.height * 3) {
        enemy.speed.y = -20;
        this.randomHalt = 300 * Math.floor(Math.random() * 3 + 1);
      }
      enemy.update(delta);
    });
    //this.enemy.update(delta);
    //this.enemy2.update(delta);
  }
  draw(ctx) {
    if (this.gameState === GAMESTATE.MENU) {
      ctx.rect(0, 0, this.screenWidth, this.screenHeight);
      ctx.fillStyle = "black";
      ctx.fill();

      ctx.textAlign = "center";
      ctx.fillStyle = "green";
      ctx.font = "40px Times";
      ctx.fillText(
        "Good luck 'an go ahead!",
        this.screenWidth / 2,
        this.screenHeight / 2
      );
    } else if (this.gameState === GAMESTATE.GAMEINPROGRESS) {
      console.log("Game started");
      this.player.draw(ctx);
      this.enemies.forEach(enemy => {
        enemy.draw(ctx);
      });
      //this.enemy.draw(ctx);
      //this.enemy2.draw(ctx);
    }
  }
}
