import Block from "./block.js";
import Enemy from "./enemy.js";
export default class Level {
  constructor(level) {
    this.enemies = [];
    this.blocks = [];
    if (level === 0) {
      this.enemies.push(
        new Enemy(244, -270, 62, 0, "./enemies.png"),
        new Enemy(246, -240, 63, 0, "./enemies.png"),
        new Enemy(248, -210, 64, 0, "./enemies.png"),
        new Enemy(250, -180, 65, 0, "./enemies.png"),
        new Enemy(252, -150, 66, 1, "./enemies.png"),
        new Enemy(254, -120, 67, 0, "./enemies.png"),
        new Enemy(256, -90, 68, 1, "./enemies.png"),
        new Enemy(256, -60, 69, 0, "./enemies.png"),
        new Enemy(256, -30, 70, 1, "./enemies.png")
      );
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
    } else if (level == 1) {
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
