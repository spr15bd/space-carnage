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
        new Block(204, -368, 16, 16, 2, "./block.png"),
        new Block(220, -368, 16, 16, 3, "./block.png"),
        new Block(236, -368, 16, 16, 2, "./block.png"),
        new Block(252, -368, 16, 16, 1, "./block.png"),
        new Block(268, -368, 16, 16, 2, "./block.png"),
        new Block(284, -368, 16, 16, 2, "./block.png"),
        new Block(300, -368, 16, 16, 1, "./block.png"),
        new Block(316, -368, 16, 16, 4, "./block.png"),
        new Block(332, -368, 16, 16, 2, "./block.png"),
        new Block(348, -368, 16, 16, 2, "./block.png"),
        new Block(364, -368, 16, 16, 3, "./block.png"),
        new Block(380, -368, 16, 16, 1, "./block.png"),
        new Block(396, -368, 16, 16, 2, "./block.png"),
        new Block(412, -368, 16, 16, 1, "./block.png"),
        new Block(428, -368, 16, 16, 3, "./block.png"),
        new Block(444, -368, 16, 16, 2, "./block.png"),
        new Block(460, -368, 16, 16, 1, "./block.png"),
        new Block(476, -368, 16, 16, 1, "./block.png"),
        new Block(492, -368, 16, 16, 3, "./block.png"),
        new Block(508, -368, 16, 16, 2, "./block.png"),
        new Block(524, -368, 16, 16, 1, "./block.png"),
        new Block(540, -368, 16, 16, 2, "./block.png"),
        new Block(556, -368, 16, 16, 1, "./block.png"),
        new Block(572, -368, 16, 16, 4, "./block.png"),

        //new Block(300, -300, 16, 16, 0, "./block.png"),
        //new Block(316, -300, 16, 16, 0, "./block.png"),
        new Block(204, -300, 16, 16, 0, "./block.png"),
        new Block(220, -300, 16, 16, 0, "./block.png"),
        new Block(236, -300, 16, 16, 0, "./block.png"),
        new Block(252, -300, 16, 16, 0, "./block.png"),
        new Block(268, -300, 16, 16, 0, "./block.png"),
        new Block(284, -300, 16, 16, 0, "./block.png"),
        new Block(300, -300, 16, 16, 0, "./block.png"),
        new Block(316, -300, 16, 16, 0, "./block.png"),
        new Block(332, -300, 16, 16, 0, "./block.png"),
        new Block(348, -300, 16, 16, 0, "./block.png"),
        new Block(364, -300, 16, 16, 0, "./block.png"),
        new Block(380, -300, 16, 16, 0, "./block.png"),
        new Block(396, -300, 16, 16, 0, "./block.png"),
        new Block(412, -300, 16, 16, 0, "./block.png"),
        new Block(428, -300, 16, 16, 0, "./block.png"),
        new Block(444, -300, 16, 16, 0, "./block.png"),
        new Block(460, -300, 16, 16, 0, "./block.png"),
        new Block(476, -300, 16, 16, 0, "./block.png"),
        new Block(492, -300, 16, 16, 0, "./block.png"),
        new Block(508, -300, 16, 16, 0, "./block.png"),
        new Block(524, -300, 16, 16, 0, "./block.png"),
        new Block(540, -300, 16, 16, 0, "./block.png"),
        new Block(556, -300, 16, 16, 0, "./block.png"),
        new Block(572, -300, 16, 16, 0, "./block.png"),
        new Block(204, -400, 16, 16, 2, "./block.png"),
        new Block(220, -400, 16, 16, 2, "./block.png"),
        new Block(236, -400, 16, 16, 3, "./block.png"),
        new Block(252, -400, 16, 16, 4, "./block.png"),
        new Block(268, -400, 16, 16, 3, "./block.png"),
        new Block(284, -400, 16, 16, 2, "./block.png"),
        new Block(300, -400, 16, 16, 1, "./block.png"),
        new Block(316, -400, 16, 16, 2, "./block.png"),
        new Block(332, -400, 16, 16, 3, "./block.png"),
        new Block(348, -400, 16, 16, 4, "./block.png"),
        new Block(364, -400, 16, 16, 3, "./block.png"),
        new Block(380, -400, 16, 16, 3, "./block.png"),
        new Block(396, -400, 16, 16, 2, "./block.png"),
        new Block(412, -400, 16, 16, 1, "./block.png"),
        new Block(428, -400, 16, 16, 1, "./block.png"),
        new Block(444, -400, 16, 16, 4, "./block.png"),
        new Block(460, -400, 16, 16, 2, "./block.png"),
        new Block(476, -400, 16, 16, 3, "./block.png"),
        new Block(492, -400, 16, 16, 1, "./block.png"),
        new Block(508, -400, 16, 16, 4, "./block.png"),
        new Block(524, -400, 16, 16, 4, "./block.png"),
        new Block(540, -400, 16, 16, 2, "./block.png"),
        new Block(556, -400, 16, 16, 1, "./block.png"),
        new Block(572, -400, 16, 16, 2, "./block.png"),

        new Block(204, -384, 16, 16, 1, "./block.png"),
        new Block(220, -384, 16, 16, 1, "./block.png"),
        new Block(236, -384, 16, 16, 2, "./block.png"),
        new Block(252, -384, 16, 16, 1, "./block.png"),
        new Block(268, -384, 16, 16, 3, "./block.png"),
        new Block(284, -384, 16, 16, 1, "./block.png"),
        new Block(300, -384, 16, 16, 2, "./block.png"),
        new Block(316, -384, 16, 16, 1, "./block.png"),
        new Block(332, -384, 16, 16, 3, "./block.png"),
        new Block(348, -384, 16, 16, 1, "./block.png"),
        new Block(364, -384, 16, 16, 4, "./block.png"),
        new Block(380, -384, 16, 16, 2, "./block.png"),
        new Block(396, -384, 16, 16, 1, "./block.png"),
        new Block(412, -384, 16, 16, 2, "./block.png"),
        new Block(428, -384, 16, 16, 2, "./block.png"),
        new Block(444, -384, 16, 16, 1, "./block.png"),
        new Block(460, -384, 16, 16, 3, "./block.png"),
        new Block(476, -384, 16, 16, 1, "./block.png"),
        new Block(492, -384, 16, 16, 2, "./block.png"),
        new Block(508, -384, 16, 16, 1, "./block.png"),
        new Block(524, -384, 16, 16, 3, "./block.png"),
        new Block(540, -384, 16, 16, 1, "./block.png"),
        new Block(556, -384, 16, 16, 1, "./block.png"),
        new Block(572, -384, 16, 16, 1, "./block.png"),

        new Block(204, -352, 16, 16, 3, "./block.png"),
        new Block(220, -352, 16, 16, 2, "./block.png"),
        new Block(236, -352, 16, 16, 4, "./block.png"),
        new Block(252, -352, 16, 16, 3, "./block.png"),
        new Block(268, -352, 16, 16, 2, "./block.png"),
        new Block(284, -352, 16, 16, 4, "./block.png"),
        new Block(300, -352, 16, 16, 1, "./block.png"),
        new Block(316, -352, 16, 16, 1, "./block.png"),
        new Block(332, -352, 16, 16, 4, "./block.png"),
        new Block(348, -352, 16, 16, 2, "./block.png"),
        new Block(364, -352, 16, 16, 1, "./block.png"),
        new Block(380, -352, 16, 16, 3, "./block.png"),
        new Block(396, -352, 16, 16, 1, "./block.png"),
        new Block(412, -352, 16, 16, 4, "./block.png"),
        new Block(428, -352, 16, 16, 3, "./block.png"),
        new Block(444, -352, 16, 16, 2, "./block.png"),
        new Block(460, -352, 16, 16, 4, "./block.png"),
        new Block(476, -352, 16, 16, 2, "./block.png"),
        new Block(492, -352, 16, 16, 3, "./block.png"),
        new Block(508, -352, 16, 16, 2, "./block.png"),
        new Block(524, -352, 16, 16, 1, "./block.png"),
        new Block(540, -352, 16, 16, 2, "./block.png"),
        new Block(556, -352, 16, 16, 3, "./block.png"),
        new Block(572, -352, 16, 16, 4, "./block.png"),

        new Block(204, -336, 16, 16, 4, "./block.png"),
        new Block(220, -336, 16, 16, 1, "./block.png"),
        new Block(236, -336, 16, 16, 2, "./block.png"),
        new Block(252, -336, 16, 16, 1, "./block.png"),
        new Block(268, -336, 16, 16, 3, "./block.png"),
        new Block(284, -336, 16, 16, 4, "./block.png"),
        new Block(300, -336, 16, 16, 2, "./block.png"),
        new Block(316, -336, 16, 16, 4, "./block.png"),
        new Block(332, -336, 16, 16, 3, "./block.png"),
        new Block(348, -336, 16, 16, 4, "./block.png"),
        new Block(364, -336, 16, 16, 2, "./block.png"),
        new Block(380, -336, 16, 16, 3, "./block.png"),
        new Block(396, -336, 16, 16, 3, "./block.png"),
        new Block(412, -336, 16, 16, 2, "./block.png"),
        new Block(428, -336, 16, 16, 1, "./block.png"),
        new Block(444, -336, 16, 16, 4, "./block.png"),
        new Block(460, -336, 16, 16, 2, "./block.png"),
        new Block(476, -336, 16, 16, 3, "./block.png"),
        new Block(492, -336, 16, 16, 1, "./block.png"),
        new Block(508, -336, 16, 16, 2, "./block.png"),
        new Block(524, -336, 16, 16, 4, "./block.png"),
        new Block(540, -336, 16, 16, 2, "./block.png"),
        new Block(556, -336, 16, 16, 4, "./block.png"),
        new Block(572, -336, 16, 16, 1, "./block.png")
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
