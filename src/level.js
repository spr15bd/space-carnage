import Enemy from "./enemy.js";
export default class Level {
  constructor(level) {
    this.enemies = [];
    this.enemies.push(
      new Enemy(336, 30, 1, "./enemies.png"),
      new Enemy(432, 30, 1, "./enemies.png"),
      new Enemy(528, 30, 1, "./enemies.png"),
      new Enemy(624, 30, 1, "./enemies.png")
    );
  }
  getEnemies() {
    return this.enemies;
  }
}
