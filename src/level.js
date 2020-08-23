import Block from "./block.js";
import Enemy from "./enemy.js";
export default class Level {
  constructor(level, width, height) {
    this.startEnemyWaveCycle = Date.now();
    this.screenWidth = width;
    this.screenHeight = height;
    this.enemies = [];
    this.blocks = [];
    this.stages = 0; // stages per level
    this.bonusEnemyCount = 0;
    if (level === 1) {
      this.stages = 2;
      this.enemies.push(
        new Enemy(width / 2 - 130, -480, 180, 1, true, "./enemies.png"),
        new Enemy(width / 2 - 160, -480, 180, 1, true, "./enemies.png"),
        new Enemy(width / 2 - 190, -480, 180, 1, true, "./enemies.png"),
        new Enemy(width / 2 - 220, -480, 180, 1, true, "./enemies.png"),
        new Enemy(width / 2 - 250, -480, 180, 1, true, "./enemies.png"),
        new Enemy(width / 2 - 280, -480, 180, 1, true, "./enemies.png"),

        new Enemy(width / 2 + 100, -480, 0, 1, true, "./enemies.png"),
        new Enemy(width / 2 + 130, -480, 0, 1, true, "./enemies.png"),
        new Enemy(width / 2 + 160, -480, 0, 1, true, "./enemies.png"),
        new Enemy(width / 2 + 190, -480, 0, 1, true, "./enemies.png"),
        new Enemy(width / 2 + 220, -480, 0, 1, true, "./enemies.png"),
        new Enemy(width / 2 + 250, -480, 0, 1, true, "./enemies.png"),

        new Enemy(width / 2 - 280, -230, 45, 1, true, "./enemies.png"),
        new Enemy(width / 2 - 250, -200, 45, 1, true, "./enemies.png"),
        new Enemy(width / 2 - 220, -170, 45, 1, true, "./enemies.png"),
        new Enemy(width / 2 - 190, -140, 45, 1, true, "./enemies.png"),
        new Enemy(width / 2 - 160, -110, 45, 1, true, "./enemies.png"),
        new Enemy(width / 2 - 130, -80, 45, 1, true, "./enemies.png"),
        new Enemy(width / 2 - 100, -50, 45, 1, true, "./enemies.png"),
        new Enemy(width / 2 + 248, -230, 135, 0, true, "./enemies.png"),
        new Enemy(width / 2 + 218, -200, 135, 0, true, "./enemies.png"),
        new Enemy(width / 2 + 188, -170, 135, 0, true, "./enemies.png"),
        new Enemy(width / 2 + 158, -140, 135, 0, true, "./enemies.png"),
        new Enemy(width / 2 + 128, -110, 135, 0, true, "./enemies.png"),
        new Enemy(width / 2 + 98, -80, 135, 0, true, "./enemies.png"),
        new Enemy(width / 2 + 68, -50, 135, 0, true, "./enemies.png"),
        new Enemy(width / 2 - 16, -430, 90, 0, true, "./enemies.png"),
        new Enemy(width / 2 - 16, -390, 90, 0, true, "./enemies.png"),
        new Enemy(width / 2 - 16, -350, 90, 0, true, "./enemies.png"),
        new Enemy(width / 2 - 16, -310, 90, 0, true, "./enemies.png"),
        new Enemy(width / 2 - 16, -270, 90, 0, true, "./enemies.png"),
        new Enemy(width / 2 - 16, -230, 90, 0, true, "./enemies.png")
      );
    } else if (level === 5) {
      this.stages = 1;
      this.enemies.push(
        new Enemy(120, -525, 270, 2, true, "./enemies.png"),
        new Enemy(180, -525, 270, 2, true, "./enemies.png"),
        new Enemy(240, -525, 270, 2, true, "./enemies.png"),
        new Enemy(300, -525, 270, 2, true, "./enemies.png"),
        //new Enemy(360, -525, 270, 2, true, "./enemies.png"),
        //new Enemy(420, -525, 270, 2, true, "./enemies.png"),
        new Enemy(480, -525, 270, 2, true, "./enemies.png"),
        new Enemy(540, -525, 270, 2, true, "./enemies.png"),
        new Enemy(600, -525, 270, 2, true, "./enemies.png"),
        new Enemy(660, -525, 270, 2, true, "./enemies.png"),

        new Enemy(180, -450, 270, 2, true, "./enemies.png"),
        new Enemy(240, -450, 270, 2, true, "./enemies.png"),
        new Enemy(300, -450, 270, 2, true, "./enemies.png"),
        new Enemy(360, -450, 270, 2, true, "./enemies.png"),
        new Enemy(420, -450, 270, 2, true, "./enemies.png"),
        new Enemy(480, -450, 270, 2, true, "./enemies.png"),
        new Enemy(540, -450, 270, 2, true, "./enemies.png"),
        new Enemy(600, -450, 270, 2, true, "./enemies.png"),

        new Enemy(180, -300, 270, 3, true, "./enemies.png"),
        new Enemy(240, -375, 270, 3, true, "./enemies.png"),
        new Enemy(300, -375, 270, 3, true, "./enemies.png"),
        new Enemy(360, -375, 270, 3, true, "./enemies.png"),
        new Enemy(420, -375, 270, 3, true, "./enemies.png"),
        new Enemy(480, -375, 270, 3, true, "./enemies.png"),
        new Enemy(540, -375, 270, 3, true, "./enemies.png"),
        new Enemy(600, -300, 270, 3, true, "./enemies.png"),

        new Enemy(240, -300, 270, 3, true, "./enemies.png"),
        new Enemy(300, -300, 270, 3, true, "./enemies.png"),
        //new Enemy(360, -300, 270, 3, true, "./enemies.png"),
        //new Enemy(420, -300, 270, 3, true, "./enemies.png"),
        new Enemy(480, -300, 270, 3, true, "./enemies.png"),
        new Enemy(540, -300, 270, 3, true, "./enemies.png")

        //new Enemy(width - 130, -300, 180, 0, true, "./enemies.png"),
        //new Enemy(width - 160, -300, 180, 0, true, "./enemies.png"),
        //new Enemy(width - 190, -300, 180, 0, true, "./enemies.png"),
        //new Enemy(width - 220, -300, 180, 0, true, "./enemies.png"),
        //new Enemy(width - 250, -300, 180, 0, true, "./enemies.png")
      );
    } else if (level === 2) {
      this.stages = 1;
      this.enemies.push(
        new Enemy(400, -700, 225, 12, true, "./enemies.png"),
        new Enemy(380, -725, 225, 12, true, "./enemies.png"),
        new Enemy(360, -750, 225, 12, true, "./enemies.png"),
        new Enemy(340, -700, 225, 12, true, "./enemies.png"),
        new Enemy(320, -725, 225, 12, true, "./enemies.png"),
        new Enemy(300, -750, 225, 12, true, "./enemies.png"),

        new Enemy(400, -500, -45, 13, true, "./enemies.png"),
        new Enemy(420, -525, -45, 13, true, "./enemies.png"),
        new Enemy(440, -550, -45, 13, true, "./enemies.png"),
        new Enemy(460, -500, -45, 13, true, "./enemies.png"),
        new Enemy(480, -525, -45, 13, true, "./enemies.png"),
        new Enemy(500, -550, -45, 13, true, "./enemies.png"),

        new Enemy(-200, -440, 180, 14, true, "./enemies.png"),
        new Enemy(-200, -485, 180, 14, true, "./enemies.png"),
        new Enemy(-200, -530, 180, 14, true, "./enemies.png"),
        new Enemy(-150, -462, 180, 14, true, "./enemies.png"),
        new Enemy(-150, -508, 180, 14, true, "./enemies.png"),
        new Enemy(-100, -485, 180, 14, true, "./enemies.png")
      );
    } else if (level === 3) {
      this.blocks.push(
        new Block(204, -372, 384, 64, 9, "./block.png"), //main mothership image

        new Block(204, -292, 16, 16, 7, "./block.png"),
        new Block(220, -292, 16, 16, 2, "./block.png"),
        new Block(236, -292, 16, 16, 3, "./block.png"),
        new Block(252, -292, 16, 16, 4, "./block.png"),
        new Block(268, -292, 16, 16, 3, "./block.png"),
        new Block(284, -292, 16, 16, 2, "./block.png"),
        new Block(300, -292, 16, 16, 1, "./block.png"),
        new Block(316, -292, 16, 16, 2, "./block.png"),
        new Block(332, -292, 16, 16, 1, "./block.png"),
        new Block(348, -292, 16, 16, 3, "./block.png"),
        new Block(364, -292, 16, 16, 2, "./block.png"),
        new Block(380, -292, 16, 16, 3, "./block.png"),
        new Block(396, -292, 16, 16, 3, "./block.png"),
        new Block(412, -292, 16, 16, 4, "./block.png"),
        new Block(428, -292, 16, 16, 2, "./block.png"),
        new Block(444, -292, 16, 16, 4, "./block.png"),
        new Block(460, -292, 16, 16, 2, "./block.png"),
        new Block(476, -292, 16, 16, 3, "./block.png"),
        new Block(492, -292, 16, 16, 1, "./block.png"),
        new Block(508, -292, 16, 16, 3, "./block.png"),
        new Block(524, -292, 16, 16, 4, "./block.png"),
        new Block(540, -292, 16, 16, 3, "./block.png"),
        new Block(556, -292, 16, 16, 2, "./block.png"),
        new Block(572, -292, 16, 16, 6, "./block.png"),

        new Block(220, -276, 16, 16, 7, "./block.png"),
        new Block(236, -276, 16, 16, 4, "./block.png"),
        new Block(252, -276, 16, 16, 1, "./block.png"),
        new Block(268, -276, 16, 16, 2, "./block.png"),
        new Block(284, -276, 16, 16, 1, "./block.png"),
        new Block(300, -276, 16, 16, 3, "./block.png"),
        new Block(316, -276, 16, 16, 4, "./block.png"),
        new Block(332, -276, 16, 16, 2, "./block.png"),
        new Block(348, -276, 16, 16, 3, "./block.png"),
        new Block(364, -276, 16, 16, 3, "./block.png"),
        new Block(380, -276, 16, 16, 1, "./block.png"),
        new Block(396, -276, 16, 16, 2, "./block.png"),
        new Block(412, -276, 16, 16, 1, "./block.png"),
        new Block(428, -276, 16, 16, 3, "./block.png"),
        new Block(444, -276, 16, 16, 2, "./block.png"),
        new Block(460, -276, 16, 16, 1, "./block.png"),
        new Block(476, -276, 16, 16, 1, "./block.png"),
        new Block(492, -276, 16, 16, 3, "./block.png"),
        new Block(508, -276, 16, 16, 2, "./block.png"),
        new Block(524, -276, 16, 16, 1, "./block.png"),
        new Block(540, -276, 16, 16, 2, "./block.png"),
        new Block(556, -276, 16, 16, 6, "./block.png"),

        new Block(252, -260, 16, 16, 7, "./block.png"),
        new Block(268, -260, 16, 16, 3, "./block.png"),
        new Block(284, -260, 16, 16, 1, "./block.png"),
        new Block(300, -260, 16, 16, 3, "./block.png"),
        new Block(316, -260, 16, 16, 4, "./block.png"),
        new Block(332, -260, 16, 16, 2, "./block.png"),
        new Block(348, -260, 16, 16, 2, "./block.png"),
        new Block(364, -260, 16, 16, 3, "./block.png"),
        new Block(380, -260, 16, 16, 2, "./block.png"),
        new Block(396, -260, 16, 16, 3, "./block.png"),
        new Block(412, -260, 16, 16, 4, "./block.png"),
        new Block(428, -260, 16, 16, 1, "./block.png"),
        new Block(444, -260, 16, 16, 2, "./block.png"),
        new Block(460, -260, 16, 16, 3, "./block.png"),
        new Block(476, -260, 16, 16, 2, "./block.png"),
        new Block(492, -260, 16, 16, 3, "./block.png"),
        new Block(508, -260, 16, 16, 4, "./block.png"),
        new Block(524, -260, 16, 16, 6, "./block.png"),

        new Block(300, -244, 16, 16, 7, "./block.png"),
        new Block(316, -244, 16, 16, 4, "./block.png"),
        new Block(332, -244, 16, 16, 1, "./block.png"),
        new Block(348, -244, 16, 16, 2, "./block.png"),
        new Block(364, -244, 16, 16, 3, "./block.png"),
        new Block(380, -244, 16, 16, 1, "./block.png"),
        new Block(396, -244, 16, 16, 2, "./block.png"),
        new Block(412, -244, 16, 16, 1, "./block.png"),
        new Block(428, -244, 16, 16, 3, "./block.png"),
        new Block(444, -244, 16, 16, 1, "./block.png"),
        new Block(460, -244, 16, 16, 3, "./block.png"),
        new Block(476, -244, 16, 16, 6, "./block.png"),

        new Block(204, -308, 8, 8, 0, "./block.png"),
        new Block(212, -308, 8, 8, 0, "./block.png"),
        new Block(220, -308, 8, 8, 0, "./block.png"),
        new Block(228, -308, 8, 8, 0, "./block.png"),
        new Block(236, -308, 8, 8, 0, "./block.png"),
        new Block(244, -308, 8, 8, 0, "./block.png"),
        new Block(252, -308, 8, 8, 0, "./block.png"),
        new Block(260, -308, 8, 8, 0, "./block.png"),
        new Block(268, -308, 8, 8, 0, "./block.png"),
        new Block(276, -308, 8, 8, 0, "./block.png"),
        new Block(284, -308, 8, 8, 0, "./block.png"),
        new Block(292, -308, 8, 8, 0, "./block.png"),
        new Block(300, -308, 8, 8, 0, "./block.png"),
        new Block(308, -308, 8, 8, 0, "./block.png"),
        new Block(316, -308, 8, 8, 0, "./block.png"),
        new Block(324, -308, 8, 8, 0, "./block.png"),
        new Block(332, -308, 8, 8, 0, "./block.png"),
        new Block(340, -308, 8, 8, 0, "./block.png"),
        new Block(348, -308, 8, 8, 0, "./block.png"),
        new Block(356, -308, 8, 8, 0, "./block.png"),
        new Block(364, -308, 8, 8, 0, "./block.png"),
        new Block(372, -308, 8, 8, 0, "./block.png"),
        new Block(380, -308, 8, 8, 0, "./block.png"),
        new Block(388, -308, 8, 8, 0, "./block.png"),
        new Block(396, -308, 8, 8, 0, "./block.png"),
        new Block(404, -308, 8, 8, 0, "./block.png"),
        new Block(412, -308, 8, 8, 0, "./block.png"),
        new Block(420, -308, 8, 8, 0, "./block.png"),
        new Block(428, -308, 8, 8, 0, "./block.png"),
        new Block(436, -308, 8, 8, 0, "./block.png"),
        new Block(444, -308, 8, 8, 0, "./block.png"),
        new Block(452, -308, 8, 8, 0, "./block.png"),
        new Block(460, -308, 8, 8, 0, "./block.png"),
        new Block(468, -308, 8, 8, 0, "./block.png"),
        new Block(476, -308, 8, 8, 0, "./block.png"),
        new Block(484, -308, 8, 8, 0, "./block.png"),
        new Block(492, -308, 8, 8, 0, "./block.png"),
        new Block(500, -308, 8, 8, 0, "./block.png"),
        new Block(508, -308, 8, 8, 0, "./block.png"),
        new Block(516, -308, 8, 8, 0, "./block.png"),
        new Block(524, -308, 8, 8, 0, "./block.png"),
        new Block(532, -308, 8, 8, 0, "./block.png"),
        new Block(540, -308, 8, 8, 0, "./block.png"),
        new Block(548, -308, 8, 8, 0, "./block.png"),
        new Block(556, -308, 8, 8, 0, "./block.png"),
        new Block(564, -308, 8, 8, 0, "./block.png"),
        new Block(572, -308, 8, 8, 0, "./block.png"),
        new Block(580, -308, 8, 8, 0, "./block.png"),

        new Block(204, -300, 8, 8, 0, "./block.png"),
        new Block(212, -300, 8, 8, 0, "./block.png"),
        new Block(220, -300, 8, 8, 0, "./block.png"),
        new Block(228, -300, 8, 8, 0, "./block.png"),
        new Block(236, -300, 8, 8, 0, "./block.png"),
        new Block(244, -300, 8, 8, 0, "./block.png"),
        new Block(252, -300, 8, 8, 0, "./block.png"),
        new Block(260, -300, 8, 8, 0, "./block.png"),
        new Block(268, -300, 8, 8, 0, "./block.png"),
        new Block(276, -300, 8, 8, 0, "./block.png"),
        new Block(284, -300, 8, 8, 0, "./block.png"),
        new Block(292, -300, 8, 8, 0, "./block.png"),
        new Block(300, -300, 8, 8, 0, "./block.png"),
        new Block(308, -300, 8, 8, 0, "./block.png"),
        new Block(316, -300, 8, 8, 0, "./block.png"),
        new Block(324, -300, 8, 8, 0, "./block.png"),
        new Block(332, -300, 8, 8, 0, "./block.png"),
        new Block(340, -300, 8, 8, 0, "./block.png"),
        new Block(348, -300, 8, 8, 0, "./block.png"),
        new Block(356, -300, 8, 8, 0, "./block.png"),
        new Block(364, -300, 8, 8, 0, "./block.png"),
        new Block(372, -300, 8, 8, 0, "./block.png"),
        new Block(380, -300, 8, 8, 0, "./block.png"),
        new Block(388, -300, 8, 8, 0, "./block.png"),
        new Block(396, -300, 8, 8, 0, "./block.png"),
        new Block(404, -300, 8, 8, 0, "./block.png"),
        new Block(412, -300, 8, 8, 0, "./block.png"),
        new Block(420, -300, 8, 8, 0, "./block.png"),
        new Block(428, -300, 8, 8, 0, "./block.png"),
        new Block(436, -300, 8, 8, 0, "./block.png"),
        new Block(444, -300, 8, 8, 0, "./block.png"),
        new Block(452, -300, 8, 8, 0, "./block.png"),
        new Block(460, -300, 8, 8, 0, "./block.png"),
        new Block(468, -300, 8, 8, 0, "./block.png"),
        new Block(476, -300, 8, 8, 0, "./block.png"),
        new Block(484, -300, 8, 8, 0, "./block.png"),
        new Block(492, -300, 8, 8, 0, "./block.png"),
        new Block(500, -300, 8, 8, 0, "./block.png"),
        new Block(508, -300, 8, 8, 0, "./block.png"),
        new Block(516, -300, 8, 8, 0, "./block.png"),
        new Block(524, -300, 8, 8, 0, "./block.png"),
        new Block(532, -300, 8, 8, 0, "./block.png"),
        new Block(540, -300, 8, 8, 0, "./block.png"),
        new Block(548, -300, 8, 8, 0, "./block.png"),
        new Block(556, -300, 8, 8, 0, "./block.png"),
        new Block(564, -300, 8, 8, 0, "./block.png"),
        new Block(572, -300, 8, 8, 0, "./block.png"),
        new Block(580, -300, 8, 8, 0, "./block.png")
      );
      this.enemies.push(
        new Enemy(
          -24 + this.screenWidth / 2,
          -400,
          90,
          4,
          true,
          "./enemies.png"
        ),
        new Enemy(
          -24 + this.screenWidth / 2,
          -400,
          0,
          4,
          true,
          "./enemies.png"
        ),
        new Enemy(
          -24 + this.screenWidth / 2,
          -400,
          180,
          4,
          true,
          "./enemies.png"
        ),
        new Enemy(
          -24 + this.screenWidth / 2,
          -400,
          270,
          4,
          true,
          "./enemies.png"
        ),
        new Enemy(
          -24 + this.screenWidth / 2,
          -352,
          270,
          5,
          true,
          "./enemies.png"
        )

        /*new Enemy(240, -500, 270, 2, "./enemies.png"),
        new Enemy(300, -500, 270, 2, "./enemies.png"),
        new Enemy(360, -500, 270, 2, "./enemies.png"),
        new Enemy(420, -500, 270, 2, "./enemies.png"),
        new Enemy(480, -500, 270, 2, "./enemies.png"),
        new Enemy(540, -500, 270, 2, "./enemies.png")*/
      );
    } else if (level === 4) {
      this.stages = 1;
      this.enemies.push(
        new Enemy(120, -525, 270, 2, true, "./enemies.png"),
        new Enemy(180, -525, 270, 2, true, "./enemies.png"),
        new Enemy(240, -525, 270, 2, true, "./enemies.png"),
        new Enemy(300, -525, 270, 2, true, "./enemies.png"),
        new Enemy(360, -525, 270, 2, true, "./enemies.png"),
        new Enemy(420, -525, 270, 2, true, "./enemies.png"),
        new Enemy(480, -525, 270, 2, true, "./enemies.png"),
        new Enemy(540, -525, 270, 2, true, "./enemies.png"),
        new Enemy(600, -525, 270, 2, true, "./enemies.png"),
        new Enemy(660, -525, 270, 2, true, "./enemies.png"),

        new Enemy(180, -450, 270, 2, true, "./enemies.png"),
        new Enemy(240, -450, 270, 2, true, "./enemies.png"),
        new Enemy(300, -450, 270, 2, true, "./enemies.png"),
        new Enemy(360, -450, 270, 2, true, "./enemies.png"),
        new Enemy(420, -450, 270, 2, true, "./enemies.png"),
        new Enemy(480, -450, 270, 2, true, "./enemies.png"),
        new Enemy(540, -450, 270, 2, true, "./enemies.png"),
        new Enemy(600, -450, 270, 2, true, "./enemies.png"),

        new Enemy(180, -300, 270, 3, true, "./enemies.png"),
        new Enemy(240, -375, 270, 3, true, "./enemies.png"),
        new Enemy(300, -375, 270, 3, true, "./enemies.png"),
        new Enemy(360, -375, 270, 3, true, "./enemies.png"),
        new Enemy(420, -375, 270, 3, true, "./enemies.png"),
        new Enemy(480, -375, 270, 3, true, "./enemies.png"),
        new Enemy(540, -375, 270, 3, true, "./enemies.png"),
        new Enemy(600, -300, 270, 3, true, "./enemies.png"),

        new Enemy(240, -300, 270, 3, true, "./enemies.png"),
        new Enemy(300, -300, 270, 3, true, "./enemies.png"),
        //new Enemy(360, -300, 270, 3, true, "./enemies.png"),
        //new Enemy(420, -300, 270, 3, true, "./enemies.png"),
        new Enemy(480, -300, 270, 3, true, "./enemies.png"),
        new Enemy(540, -300, 270, 3, true, "./enemies.png")

        //new Enemy(width - 130, -300, 180, 0, true, "./enemies.png"),
        //new Enemy(width - 160, -300, 180, 0, true, "./enemies.png"),
        //new Enemy(width - 190, -300, 180, 0, true, "./enemies.png"),
        //new Enemy(width - 220, -300, 180, 0, true, "./enemies.png"),
        //new Enemy(width - 250, -300, 180, 0, true, "./enemies.png")
      );
    } else if (level === 5) {
      this.stages = 2;
      this.enemies.push(
        new Enemy(width / 2 - 130, -480, 180, 1, true, "./enemies.png"),
        new Enemy(width / 2 - 160, -480, 180, 1, true, "./enemies.png"),
        new Enemy(width / 2 - 190, -480, 180, 1, true, "./enemies.png"),
        new Enemy(width / 2 - 220, -480, 180, 1, true, "./enemies.png"),
        new Enemy(width / 2 - 250, -480, 180, 1, true, "./enemies.png"),
        new Enemy(width / 2 - 280, -480, 180, 1, true, "./enemies.png"),

        new Enemy(width / 2 + 100, -480, 0, 1, true, "./enemies.png"),
        new Enemy(width / 2 + 130, -480, 0, 1, true, "./enemies.png"),
        new Enemy(width / 2 + 160, -480, 0, 1, true, "./enemies.png"),
        new Enemy(width / 2 + 190, -480, 0, 1, true, "./enemies.png"),
        new Enemy(width / 2 + 220, -480, 0, 1, true, "./enemies.png"),
        new Enemy(width / 2 + 250, -480, 0, 1, true, "./enemies.png"),

        new Enemy(width / 2 - 280, -230, 45, 1, true, "./enemies.png"),
        new Enemy(width / 2 - 250, -200, 45, 1, true, "./enemies.png"),
        new Enemy(width / 2 - 220, -170, 45, 1, true, "./enemies.png"),
        new Enemy(width / 2 - 190, -140, 45, 1, true, "./enemies.png"),
        new Enemy(width / 2 - 160, -110, 45, 1, true, "./enemies.png"),
        new Enemy(width / 2 - 130, -80, 45, 1, true, "./enemies.png"),
        new Enemy(width / 2 - 100, -50, 45, 1, true, "./enemies.png"),
        new Enemy(width / 2 + 248, -230, 135, 0, true, "./enemies.png"),
        new Enemy(width / 2 + 218, -200, 135, 0, true, "./enemies.png"),
        new Enemy(width / 2 + 188, -170, 135, 0, true, "./enemies.png"),
        new Enemy(width / 2 + 158, -140, 135, 0, true, "./enemies.png"),
        new Enemy(width / 2 + 128, -110, 135, 0, true, "./enemies.png"),
        new Enemy(width / 2 + 98, -80, 135, 0, true, "./enemies.png"),
        new Enemy(width / 2 + 68, -50, 135, 0, true, "./enemies.png"),
        new Enemy(width / 2 - 16, -430, 90, 0, true, "./enemies.png"),
        new Enemy(width / 2 - 16, -390, 90, 0, true, "./enemies.png"),
        new Enemy(width / 2 - 16, -350, 90, 0, true, "./enemies.png"),
        new Enemy(width / 2 - 16, -310, 90, 0, true, "./enemies.png"),
        new Enemy(width / 2 - 16, -270, 90, 0, true, "./enemies.png"),
        new Enemy(width / 2 - 16, -230, 90, 0, true, "./enemies.png")
      );
    } else if (level === 0) {
      this.enemies.push(
        new Enemy(400, -700, 180, 12, true, "./enemies.png"),
        new Enemy(380, -725, 180, 12, true, "./enemies.png"),
        new Enemy(360, -750, 180, 12, true, "./enemies.png"),
        new Enemy(340, -700, 180, 12, true, "./enemies.png"),
        new Enemy(320, -725, 180, 12, true, "./enemies.png"),
        new Enemy(300, -750, 180, 12, true, "./enemies.png"),

        new Enemy(400, -500, -45, 13, true, "./enemies.png"),
        new Enemy(420, -525, -45, 13, true, "./enemies.png"),
        new Enemy(440, -550, -45, 13, true, "./enemies.png"),
        new Enemy(460, -500, -45, 13, true, "./enemies.png"),
        new Enemy(480, -525, -45, 13, true, "./enemies.png"),
        new Enemy(500, -550, -45, 13, true, "./enemies.png"),

        new Enemy(-200, -440, 180, 14, true, "./enemies.png"),
        new Enemy(-200, -485, 180, 14, true, "./enemies.png"),
        new Enemy(-200, -530, 180, 14, true, "./enemies.png"),
        new Enemy(-150, -462, 180, 14, true, "./enemies.png"),
        new Enemy(-150, -508, 180, 14, true, "./enemies.png"),
        new Enemy(-100, -485, 180, 14, true, "./enemies.png")
      );
    }
  }
  getBlocks() {
    return this.blocks;
  }
  getEnemies() {
    return this.enemies;
  }

  getNewEnemies(level) {
    if (level === 1 || level > 4) {
      this.enemies.push(
        new Enemy(
          this.screenWidth / 2 - 216,
          -75,
          270,
          6,
          false,
          "./enemies.png"
        ),
        new Enemy(
          this.screenWidth / 2 - 116,
          -75,
          270,
          6,
          false,
          "./enemies.png"
        ),
        new Enemy(
          this.screenWidth / 2 - 16,
          -75,
          270,
          6,
          false,
          "./enemies.png"
        ),
        new Enemy(
          this.screenWidth / 2 + 84,
          -75,
          270,
          6,
          false,
          "./enemies.png"
        ),
        new Enemy(
          this.screenWidth / 2 + 184,
          -75,
          270,
          6,
          false,
          "./enemies.png"
        ),

        new Enemy(
          this.screenWidth / 2 - 216,
          -25,
          270,
          6,
          false,
          "./enemies.png"
        ),
        new Enemy(
          this.screenWidth / 2 - 116,
          -25,
          270,
          6,
          false,
          "./enemies.png"
        ),
        new Enemy(
          this.screenWidth / 2 - 16,
          -25,
          270,
          6,
          false,
          "./enemies.png"
        ),
        new Enemy(
          this.screenWidth / 2 + 84,
          -25,
          270,
          6,
          false,
          "./enemies.png"
        ),
        new Enemy(
          this.screenWidth / 2 + 184,
          -25,
          270,
          6,
          false,
          "./enemies.png"
        ),

        new Enemy(
          this.screenWidth + 10,
          this.screenHeight / 2,
          0,
          10,
          false,
          "./enemies.png"
        ),
        new Enemy(
          this.screenWidth + 50,
          this.screenHeight / 2,
          0,
          10,
          false,
          "./enemies.png"
        ),
        new Enemy(
          this.screenWidth + 90,
          this.screenHeight / 2,
          0,
          10,
          false,
          "./enemies.png"
        ),
        new Enemy(
          this.screenWidth + 130,
          this.screenHeight / 2,
          0,
          10,
          false,
          "./enemies.png"
        ),
        new Enemy(
          this.screenWidth + 170,
          this.screenHeight / 2,
          0,
          10,
          false,
          "./enemies.png"
        ),
        new Enemy(
          this.screenWidth + 210,
          this.screenHeight / 2,
          0,
          10,
          false,
          "./enemies.png"
        ),
        new Enemy(
          this.screenWidth - 30,
          this.screenHeight / 2,
          0,
          10,
          false,
          "./enemies.png"
        ),
        new Enemy(
          this.screenWidth - 70,
          this.screenHeight / 2,
          0,
          10,
          false,
          "./enemies.png"
        ),
        new Enemy(
          this.screenWidth - 110,
          this.screenHeight / 2,
          0,
          10,
          false,
          "./enemies.png"
        )
      );
    }

    return this.enemies;
  }

  getBonusEnemy(enemyType, x, y, angle) {
    this.enemies.push(
      new Enemy(x, y, angle, enemyType, false, "./enemies.png")
    );
    this.bonusEnemyCount++;
  }

  getStartTime() {
    return this.start;
  }
}
