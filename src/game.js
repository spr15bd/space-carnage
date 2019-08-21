import Player from "./player.js";
import Bullet from "./bullet.js";

import Explosion from "./explosion.js";
import Input from "./input";
import Level from "./level";

const GAMESTATE = {
  MENU: 0,
  GAMEINPROGRESS: 1
};
export default class Game {
  constructor(screenWidth, screenHeight) {
    this.screenWidth = screenWidth;
    this.screenHeight = screenHeight;
    this.player = new Player(this.screenWidth, this.screenHeight);
    this.level = new Level(0); // initialise the first level
    this.enemies = this.level.getEnemies();
    this.ticks = 0; // will be used to keep track of time for alien movement, player invincibility & limiting bullets
    this.bulletFiredAtTicks = 0; // will be used to limit the number of bullets fired
    this.randomHalt = 300; //used to make alien movement less predictable
    this.enemyCharging = false; //true whenver an alien swoops towards the player
    this.chargingEnemy = Math.floor(Math.random() * this.enemies.length); //randomly chooses an enemy to swoop at the player
    this.gameState = GAMESTATE.MENU;
    this.explosion = null;
    new Input(this.player, this);
    this.bulletPool = [];
  }

  start() {
    this.gameState = GAMESTATE.GAMEINPROGRESS;
  }

  shootBullet(entity) {
    //if (this.ticks - this.bulletFiredAtTicks > 10) {
    // do not allow a bullet to be fired until 10 ticks have elapsed
    this.bulletPool.push(
      new Bullet(
        entity.position.x + entity.width / 2,
        entity.position.y,
        entity === this.player ? 0 : 1, // type of bullet, 0 for player 1 for enemy
        entity.bulletImage
      )
    );
    this.bulletFiredAtTicks = this.ticks;
    //}
  }

  update(delta) {
    this.ticks++;
    this.player.update(delta);
    this.enemies.forEach((enemy, i) => {
      if (this.enemyCharging === false) {
        enemy.position.x =
          350 + 330 * Math.sin(this.ticks * 0.02) + i * (32 * 2);
        if (Math.random() > 0.98) {
          this.shootBullet(enemy);
        }
      } else {
        if (i === this.chargingEnemy) {
          if (this.ticks - this.now < 100) {
            enemy.speed.y = 15;
            enemy.speed.x = 0;
          } else if (this.ticks - this.now < 200) {
            enemy.speed.x = 30;
            enemy.speed.y = 0;
          } else if (this.ticks - this.now < 300) {
            enemy.speed.y = 0;
            enemy.speed.x = -30;
          } else if (this.ticks - this.now < 400) {
            enemy.speed.y = -30;
            enemy.speed.x = -5;
          } else if (this.ticks - this.now < 600) {
            // once the charge is over move the enemy back into formation
            if (
              enemy.position.x <
              350 + 330 * Math.sin(this.ticks * 0.02) + i * (32 * 2)
            ) {
              enemy.speed.x =
                (350 +
                  330 * Math.sin(this.ticks * 0.02) +
                  i * (32 * 2) -
                  enemy.position.x) /
                3;
            } else if (
              enemy.position.x >
              350 + 330 * Math.sin(this.ticks * 0.02) + i * (32 * 2)
            ) {
              enemy.speed.x =
                (350 +
                  330 * Math.sin(this.ticks * 0.02) +
                  i * (32 * 2) -
                  enemy.position.x) /
                3;
            }
            enemy.speed.y = -20;
          } else {
            this.enemyCharging = false;
            this.chargingEnemy = Math.floor(
              Math.random() * this.enemies.length
            );
          }
        } else {
          enemy.position.x =
            350 + 330 * Math.sin(this.ticks * 0.02) + i * (32 * 2);
          if (Math.random() > 0.99) {
            this.shootBullet(enemy);
          }
        }
      }

      if (enemy.position.y < 30) {
        enemy.speed.y = 0;
      }
      if (this.ticks % this.randomHalt === 0 && enemy.speed.y === 0) {
        this.now = this.ticks;
        this.enemyCharging = true;
        enemy.speed.y = 20;
      }

      if (enemy.position.y > this.screenHeight - this.player.height * 3) {
        enemy.speed.y = -20;
        this.randomHalt = 300 * Math.floor(Math.random() * 3 + 1);
      }

      enemy.update(delta);
    });
    if (this.bulletPool.length > 0) {
      this.bulletPool.forEach((bullet, i) => {
        bullet.update(delta);
        if (
          (bullet.type === 0 && bullet.position.y < 0) ||
          (bullet.type === 1 && bullet.position.y > this.screenHeight)
        ) {
          this.bulletPool.splice(i, 1);
        }
        this.enemies.forEach((enemy, i) => {
          if (bullet.collidesWith(enemy) && bullet.type === 0) {
            console.log("collision");
            this.bulletPool.splice(i, 1);
            this.explosion = new Explosion(
              enemy.position.x,
              enemy.position.y,
              "./explosion.png"
            );
            this.enemies.splice(i, 1);
          }
        });
      });
    }

    if (this.explosion != null) {
      if (this.explosion.readyForDeletion === true) {
        this.explosion = null;
      } else {
        this.explosion.update(delta);
      }
    }
  }
  draw(ctx) {
    if (this.gameState === GAMESTATE.MENU) {
      ctx.rect(0, 0, this.screenWidth, this.screenHeight);
      ctx.fillStyle = "black";
      ctx.fill();
      ctx.textAlign = "center";
      ctx.fillStyle = "#e61ce1";
      ctx.font = "18px monospace";
      ctx.fillText(
        "Controls",
        this.screenWidth / 2,
        this.screenHeight / 2 - 40
      );
      ctx.fillStyle = "#a21ce6";
      ctx.fillText(
        "Use keyboard arrows to move left and right, and <ctrl> to fire.",
        this.screenWidth / 2,
        this.screenHeight / 2 + 20
      );
      ctx.fillStyle = "#741ce6";
      ctx.fillText(
        "Press <space> to start. Good luck an' go ahead!",
        this.screenWidth / 2,
        this.screenHeight / 2 + 80
      );
    } else if (this.gameState === GAMESTATE.GAMEINPROGRESS) {
      this.player.draw(ctx);
      this.enemies.forEach(enemy => {
        enemy.draw(ctx);
      });
      if (this.bulletPool.length > 0) {
        this.bulletPool.forEach(bullet => {
          bullet.draw(ctx);
        });
      }
      if (this.explosion != null) this.explosion.draw(ctx);
    }
  }
}
