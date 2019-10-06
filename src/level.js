import Block from "./block.js";
import Enemy from "./enemy.js";
export default class Level {
  constructor(level) {
    this.enemies = [];
    this.blocks = [];
    if (level === 0) {
      this.enemies.push(
        new Enemy(452, -200, 90, 0, "./enemies.png"),
        new Enemy(452, -170, 90, 1, "./enemies.png"),
        new Enemy(452, -140, 90, 0, "./enemies.png"),
        new Enemy(452, -110, 90, 0, "./enemies.png"),
        new Enemy(452, -80, 90, 1, "./enemies.png")
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
        new Enemy(240, 70, 90, 0, "./enemies.png"),
        new Enemy(280, 70, 90, 1, "./enemies.png"),
        new Enemy(320, 70, 90, 0, "./enemies.png"),
        new Enemy(360, 70, 90, 1, "./enemies.png"),
        new Enemy(240, 110, 90, 0, "./enemies.png"),
        new Enemy(280, 110, 90, 1, "./enemies.png"),
        new Enemy(320, 110, 90, 0, "./enemies.png"),
        new Enemy(360, 110, 90, 1, "./enemies.png"),
        new Enemy(280, 150, 90, 0, "./enemies.png"),
        new Enemy(320, 150, 90, 1, "./enemies.png"),
        new Enemy(280, 190, 90, 0, "./enemies.png"),
        new Enemy(320, 190, 90, 1, "./enemies.png")
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
