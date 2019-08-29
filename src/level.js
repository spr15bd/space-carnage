import Block from "./block.js";
import Enemy from "./enemy.js";
export default class Level {
  constructor(level) {
    this.enemies = [];
    this.blocks = [];
    if (level === 0) {
      this.enemies.push(
        new Enemy(336, 30, 1, "./enemies.png"),
        new Enemy(432, 30, 1, "./enemies.png"),
        new Enemy(528, 30, 1, "./enemies.png"),
        new Enemy(624, 30, 1, "./enemies.png")
      );
      //this.blocks.push(new Block(300, 300, "./block.png"));
    } else {
      this.enemies.push(
        new Enemy(300, 30, 1, "./enemies.png"),
        new Enemy(350, 30, 1, "./enemies.png"),
        new Enemy(400, 30, 1, "./enemies.png"),
        new Enemy(450, 30, 1, "./enemies.png"),
        new Enemy(500, 30, 1, "./enemies.png"),
        new Enemy(550, 30, 1, "./enemies.png"),
        new Enemy(325, 80, 1, "./enemies.png"),
        new Enemy(375, 80, 1, "./enemies.png"),
        new Enemy(425, 80, 1, "./enemies.png")
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
