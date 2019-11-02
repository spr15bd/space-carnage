import Block from "./block.js";
import Enemy from "./enemy.js";
export default class Level {
  constructor(level, width, height) {
    this.enemies = [];
    this.blocks = [];
    if (level === 0) {
      this.enemies.push(
        new Enemy(width / 2 - 230, -230, 45, 1, "./enemies.png"),
        new Enemy(width / 2 - 200, -200, 45, 1, "./enemies.png"),
        new Enemy(width / 2 - 170, -170, 45, 1, "./enemies.png"),
        new Enemy(width / 2 - 140, -140, 45, 1, "./enemies.png"),
        new Enemy(width / 2 - 110, -110, 45, 1, "./enemies.png"),
        new Enemy(width / 2 - 80, -80, 45, 1, "./enemies.png"),
        new Enemy(width / 2 - 50, -50, 45, 1, "./enemies.png"),
        new Enemy(width / 2 + 230, -230, 135, 0, "./enemies.png"),
        new Enemy(width / 2 + 200, -200, 135, 0, "./enemies.png"),
        new Enemy(width / 2 + 170, -170, 135, 0, "./enemies.png"),
        new Enemy(width / 2 + 140, -140, 135, 0, "./enemies.png"),
        new Enemy(width / 2 + 110, -110, 135, 0, "./enemies.png"),
        new Enemy(width / 2 + 80, -80, 135, 0, "./enemies.png"),
        new Enemy(width / 2 + 50, -50, 135, 0, "./enemies.png")
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
