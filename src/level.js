import Block from "./block.js";
import Enemy from "./enemy.js";
export default class Level {
  constructor(level) {
    this.enemies = [];
    this.blocks = [];
    if (level === 0) {
      this.enemies.push(
        new Enemy(170, -230, 45, 0, "./enemies.png"),
        new Enemy(200, -200, 45, 0, "./enemies.png"),
        new Enemy(230, -170, 45, 1, "./enemies.png"),
        new Enemy(260, -140, 45, 0, "./enemies.png"),
        new Enemy(290, -110, 45, 0, "./enemies.png"),
        new Enemy(320, -80, 45, 1, "./enemies.png"),
        new Enemy(350, -50, 45, 1, "./enemies.png"),
        new Enemy(380, -20, 45, 0, "./enemies.png")
      );
      /*this.enemies.push(
        new Enemy(244, -320, 45, 0, "./enemies.png"),
        new Enemy(246, -290, 46, 0, "./enemies.png"),
        new Enemy(248, -260, 47, 0, "./enemies.png"),
        new Enemy(250, -230, 48, 0, "./enemies.png"),
        new Enemy(252, -200, 49, 1, "./enemies.png"),
        new Enemy(254, -170, 50, 0, "./enemies.png"),
        new Enemy(256, -140, 51, 1, "./enemies.png"),
        new Enemy(256, -110, 52, 0, "./enemies.png"),
        new Enemy(256, -80, 53, 1, "./enemies.png")
      );*/
      /*this.blocks.push(
        new Block(300, 300, "./block.png"),
        new Block(308, 300, "./block.png"),
        new Block(316, 300, "./block.png"),
        new Block(324, 300, "./block.png"),
        new Block(332, 300, "./block.png"),
        new Block(340, 300, "./block.png"),
        new Block(348, 300, "./block.png"),
        new Block(356, 300, "./block.png")
      );*/
    } else if (level === 1) {
      this.enemies.push(
        new Enemy(20, 20, 0, 0, "./enemies.png"),
        new Enemy(20, 50, 0, 1, "./enemies.png"),
        new Enemy(20, 80, 0, 0, "./enemies.png"),
        new Enemy(20, 110, 0, 1, "./enemies.png"),
        new Enemy(60, 35, 0, 0, "./enemies.png"),
        new Enemy(60, 65, 0, 1, "./enemies.png"),
        new Enemy(60, 95, 0, 0, "./enemies.png"),
        new Enemy(100, 50, 0, 1, "./enemies.png"),
        new Enemy(100, 80, 0, 0, "./enemies.png"),
        new Enemy(140, 50, 0, 0, "./enemies.png"),
        new Enemy(140, 80, 0, 0, "./enemies.png"),
        new Enemy(180, 50, 0, 0, "./enemies.png"),
        new Enemy(180, 80, 0, 0, "./enemies.png")
      );
    } else {
      this.enemies.push(
        new Enemy(300, 30, 90, 0, "./enemies.png"),
        new Enemy(350, 30, 90, 0, "./enemies.png"),
        new Enemy(400, 30, 90, 0, "./enemies.png"),
        new Enemy(450, 30, 90, 0, "./enemies.png"),
        new Enemy(500, 30, 90, 0, "./enemies.png"),
        new Enemy(550, 30, 90, 0, "./enemies.png"),
        new Enemy(325, 80, 90, 0, "./enemies.png"),
        new Enemy(375, 80, 90, 0, "./enemies.png"),
        new Enemy(550, 30, 90, 0, "./enemies.png"),
        new Enemy(325, 80, 90, 0, "./enemies.png"),
        new Enemy(375, 80, 90, 0, "./enemies.png")
      );
    }
  }
  getBlocks() {
    return this.blocks;
  }
  getEnemies() {
    return this.enemies;
  }
}
