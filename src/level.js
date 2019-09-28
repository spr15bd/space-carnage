import Block from "./block.js";
import Enemy from "./enemy.js";
export default class Level {
  constructor(level) {
    this.enemies = [];
    this.blocks = [];
    if (level === 0) {
      this.enemies.push(
        new Enemy(400, 100, 0, 0, "./enemies.png"),
        new Enemy(
          400 + 100 * Math.cos((78.75 * Math.PI) / 180),
          100 * Math.sin((78.75 * Math.PI) / 180),
          22.5,
          0,
          "./enemies.png"
        ),
        new Enemy(
          400 + 100 * Math.cos((67 * Math.PI) / 180),
          100 * Math.sin((67 * Math.PI) / 180),
          45,
          0,
          "./enemies.png"
        ),
        new Enemy(
          400 + 100 * Math.cos((56.25 * Math.PI) / 180),
          100 * Math.sin((56.25 * Math.PI) / 180),
          67.5,
          0,
          "./enemies.png"
        ),
        new Enemy(
          400 + 100 * Math.cos((45 * Math.PI) / 180),
          100 * Math.sin((45 * Math.PI) / 180),
          90,
          0,
          "./enemies.png"
        ),
        new Enemy(
          400 + 100 * Math.cos((33.75 * Math.PI) / 180),
          100 * Math.sin((33.75 * Math.PI) / 180),
          112.5,
          0,
          "./enemies.png"
        ),
        new Enemy(
          400 + 100 * Math.cos((22.5 * Math.PI) / 180),
          100 * Math.sin((22.5 * Math.PI) / 180),
          135,
          0,
          "./enemies.png"
        ),
        new Enemy(
          400 + 100 * Math.cos((11.25 * Math.PI) / 180),
          100 * Math.sin((11.25 * Math.PI) / 180),
          157.5,
          1,
          "./enemies.png"
        ),
        new Enemy(
          400 + 100 * Math.cos((0 * Math.PI) / 180),
          100 * Math.sin((0 * Math.PI) / 180),
          180,
          0,
          "./enemies.png"
        )
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
