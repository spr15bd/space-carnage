import Block from "./block.js";
import Enemy from "./enemy.js";
export default class Level {
  constructor(level) {
    this.enemies = [];
    this.blocks = [];
    if (level === 0) {
      this.enemies.push(
        new Enemy(250, -180, 60, 0, "./enemies.png"),
        new Enemy(260, -150, 63, 1, "./enemies.png"),
        new Enemy(270, -120, 66, 0, "./enemies.png"),
        new Enemy(280, -90, 69, 1, "./enemies.png"),
        new Enemy(285, -60, 72, 0, "./enemies.png"),
        new Enemy(282, -30, 75, 1, "./enemies.png")
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
        new Enemy(240, 70, 0, "./enemies.png"),
        new Enemy(280, 70, 1, "./enemies.png"),
        new Enemy(320, 70, 0, "./enemies.png"),
        new Enemy(360, 70, 1, "./enemies.png"),
        new Enemy(240, 110, 0, "./enemies.png"),
        new Enemy(280, 110, 1, "./enemies.png"),
        new Enemy(320, 110, 0, "./enemies.png"),
        new Enemy(360, 110, 1, "./enemies.png"),
        new Enemy(280, 150, 0, "./enemies.png"),
        new Enemy(320, 150, 1, "./enemies.png"),
        new Enemy(280, 190, 0, "./enemies.png"),
        new Enemy(320, 190, 1, "./enemies.png")
      );
    } else {
      this.enemies.push(
        new Enemy(300, 30, 0, "./enemies.png"),
        new Enemy(350, 30, 0, "./enemies.png"),
        new Enemy(400, 30, 0, "./enemies.png"),
        new Enemy(450, 30, 0, "./enemies.png"),
        new Enemy(500, 30, 0, "./enemies.png"),
        new Enemy(550, 30, 0, "./enemies.png"),
        new Enemy(325, 80, 0, "./enemies.png"),
        new Enemy(375, 80, 0, "./enemies.png"),
        new Enemy(425, 80, 0, "./enemies.png")
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
