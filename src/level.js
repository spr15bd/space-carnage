import Block from "./block.js";
import Enemy from "./enemy.js";
export default class Level {
  constructor(level, width, height) {
    this.startEnemyWaveCycle = Date.now();
    this.enemies = [];
    this.blocks = [];
    if (level === 1) {
      this.enemies.push(
        new Enemy(width / 2 - 230, -230, 45, 1, "./enemies.png"),
        new Enemy(width / 2 - 200, -200, 45, 1, "./enemies.png"),
        new Enemy(width / 2 - 170, -170, 45, 1, "./enemies.png"),
        new Enemy(width / 2 - 140, -140, 45, 1, "./enemies.png"),
        new Enemy(width / 2 - 110, -110, 45, 1, "./enemies.png"),
        new Enemy(width / 2 - 80, -80, 45, 1, "./enemies.png"),
        new Enemy(width / 2 - 50, -50, 45, 1, "./enemies.png"),
        new Enemy(width / 2 + 198, -230, 135, 0, "./enemies.png"),
        new Enemy(width / 2 + 168, -200, 135, 0, "./enemies.png"),
        new Enemy(width / 2 + 138, -170, 135, 0, "./enemies.png"),
        new Enemy(width / 2 + 108, -140, 135, 0, "./enemies.png"),
        new Enemy(width / 2 + 78, -110, 135, 0, "./enemies.png"),
        new Enemy(width / 2 + 48, -80, 135, 0, "./enemies.png"),
        new Enemy(width / 2 + 18, -50, 135, 0, "./enemies.png"),
        new Enemy(width / 2 - 16, -430, 90, 0, "./enemies.png"),
        new Enemy(width / 2 - 16, -390, 90, 0, "./enemies.png"),
        new Enemy(width / 2 - 16, -350, 90, 0, "./enemies.png"),
        new Enemy(width / 2 - 16, -310, 90, 0, "./enemies.png"),
        new Enemy(width / 2 - 16, -270, 90, 0, "./enemies.png"),
        new Enemy(width / 2 - 16, -230, 90, 0, "./enemies.png")
      );
      //console.log(this.enemies.length);
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
    } else if (level === 2) {
      this.enemies.push(
        new Enemy(240, -500, 270, 2, "./enemies.png"),
        new Enemy(300, -500, 270, 2, "./enemies.png"),
        new Enemy(360, -500, 270, 2, "./enemies.png"),
        new Enemy(420, -500, 270, 2, "./enemies.png"),
        new Enemy(480, -500, 270, 2, "./enemies.png"),
        new Enemy(540, -500, 270, 2, "./enemies.png"),

        new Enemy(180, -400, 270, 2, "./enemies.png"),
        new Enemy(240, -400, 270, 2, "./enemies.png"),
        new Enemy(300, -400, 270, 2, "./enemies.png"),
        new Enemy(360, -400, 270, 2, "./enemies.png"),
        new Enemy(420, -400, 270, 2, "./enemies.png"),
        new Enemy(480, -400, 270, 2, "./enemies.png"),
        new Enemy(540, -400, 270, 2, "./enemies.png"),
        new Enemy(600, -400, 270, 2, "./enemies.png"),

        new Enemy(240, -300, 270, 3, "./enemies.png"),
        new Enemy(300, -300, 270, 3, "./enemies.png"),
        new Enemy(360, -300, 270, 3, "./enemies.png"),
        new Enemy(420, -300, 270, 3, "./enemies.png"),
        new Enemy(480, -300, 270, 3, "./enemies.png"),
        new Enemy(540, -300, 270, 3, "./enemies.png"),

        new Enemy(width - 130, -300, 180, 0, "./enemies.png"),
        new Enemy(width - 160, -300, 180, 0, "./enemies.png"),
        new Enemy(width - 190, -300, 180, 0, "./enemies.png"),
        new Enemy(width - 220, -300, 180, 0, "./enemies.png"),
        new Enemy(width - 250, -300, 180, 0, "./enemies.png")
        //new Enemy(140, 315, 0, 0, "./enemies.png"),
        //new Enemy(140, 345, 0, 0, "./enemies.png")
      );
    } else if (level === 4) {
    } else {
      this.blocks.push(
        new Block(300, 300, 16, 16, 0, "./block.png"),
        new Block(316, 300, 16, 16, 0, "./block.png"),
        new Block(332, 300, 16, 16, 0, "./block.png"),
        new Block(348, 300, 16, 16, 0, "./block.png"),
        new Block(364, 300, 16, 16, 0, "./block.png"),
        new Block(380, 300, 16, 16, 0, "./block.png"),
        new Block(396, 300, 16, 16, 0, "./block.png"),
        new Block(412, 300, 16, 16, 0, "./block.png"),
        new Block(300, 400, 16, 16, 1, "./block.png"),
        new Block(308, 400, 16, 16, 1, "./block.png"),
        new Block(316, 400, 16, 16, 1, "./block.png"),
        new Block(324, 400, 16, 16, 1, "./block.png"),
        new Block(332, 400, 16, 16, 1, "./block.png"),
        new Block(340, 400, 16, 16, 1, "./block.png"),
        new Block(348, 400, 16, 16, 1, "./block.png"),
        new Block(356, 400, 16, 16, 1, "./block.png")
      );
      this.enemies.push(
        new Enemy(400, -400, 90, 4, "./enemies.png"),
        new Enemy(400, -400, 0, 4, "./enemies.png"),
        new Enemy(400, -400, 180, 4, "./enemies.png"),
        new Enemy(400, -400, 270, 4, "./enemies.png")
      );
    }
  }
  getBlocks() {
    return this.blocks;
  }
  getEnemies() {
    return this.enemies;
  }

  getStartTime() {
    return this.start;
  }
}
