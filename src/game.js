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
    this.screen = 0;
    this.level = new Level(this.screen); // initialise the first level
    this.enemies = this.level.getEnemies();
    this.blocks = this.level.getBlocks();
    this.ticks = 0; // will be used to keep track of time for alien movement, player invincibility & limiting bullets
    this.now = this.ticks;
    this.bulletFiredAtTicks = 0; // will be used to limit the number of bullets fired
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
    // do not allow a player bullet to be fired until 14 ticks have elapsed
    if (entity === this.player) {
      if (this.ticks - this.bulletFiredAtTicks > 14) {
        this.bulletPool.push(
          new Bullet(
            entity.position.x + entity.width / 2,
            entity.position.y,
            -80, // speed of bullet, -80 for player
            entity.bulletImage
          )
        );
        this.bulletFiredAtTicks = this.ticks;
      }
    } else {
      this.bulletPool.push(
        new Bullet(
          entity.position.x + entity.width / 2,
          entity.position.y,
          60, // speed of bullet, 60 for enemy
          entity.bulletImage
        )
      );
    }
  }

  update(delta) {
    //console.log(this.ticks);
    this.ticks++;
    //console.log(this.ticks);
    if (this.player != null) this.player.update(delta);
    this.blocks.forEach(block => {
      block.update(delta);
      //block.speed.x = 0;
    });
    this.enemies.forEach((enemy, i) => {
      if (this.enemyCharging === false) {
        enemy.position.x =
          300 + 270 * Math.sin(this.ticks * 0.02) + i * (32 * 2);
        if (Math.random() > 0.98) {
          this.shootBullet(enemy);
        }
      } else {
        if (i === this.chargingEnemy) {
          if (this.ticks - this.now < 80) {
            // move (1/7)th of the screen height over a period of 0.35 seconds
            enemy.speed.y = 3;
            enemy.speed.x = 0;
          } else if (this.ticks - this.now < 160) {
            enemy.speed.x = 4;
            enemy.speed.y = 0;
            if (Math.random() > 0.9) {
              this.shootBullet(enemy);
            }
          } else if (this.ticks - this.now < 240) {
            enemy.speed.y = 0;
            enemy.speed.x = -4;
            if (Math.random() > 0.9) {
              this.shootBullet(enemy);
            }
          } else if (this.ticks - this.now < 250) {
            enemy.speed.y = -3;
            enemy.speed.x = -1;
          } else if (this.ticks - this.now < 290) {
            // once the charge is over move the enemy back into formation
            enemy.stop();
            if (
              enemy.position.x !==
              300 + 270 * Math.sin(this.ticks * 0.02) + i * (32 * 2)
            ) {
              enemy.speed.x =
                (300 +
                  270 * Math.sin(this.ticks * 0.02) +
                  i * (32 * 2) -
                  enemy.position.x) /
                delta;
            }
            enemy.speed.y = -enemy.position.y / delta;
          } else {
            enemy.stop();
            this.enemyCharging = false;
            this.chargingEnemy = Math.floor(
              Math.random() * this.enemies.length
            );
          }
        } else {
          enemy.position.x =
            300 + 270 * Math.sin(this.ticks * 0.02) + i * (32 * 2);
          if (Math.random() > 0.99) {
            this.shootBullet(enemy);
          }
        }
      }

      if (enemy.position.y < 30) {
        enemy.position.y = 30;
      }
      if (
        this.ticks - this.now > 550 &&
        Math.abs(this.player.position.x - enemy.position.x) <
          100 /*&& enemy.speed.y === 0*/
      ) {
        this.now = this.ticks;
        this.enemyCharging = true;
        //enemy.speed.y = this.screenHeight / 3000;
      }

      if (enemy.position.y > this.screenHeight - 48) {
        enemy.speed.y = -this.screenHeight / 2000;
        this.randomHalt = 300 * Math.floor(Math.random() * 3 + 1);
      }

      enemy.update(delta);
    });
    if (this.bulletPool.length > 0) {
      this.bulletPool.forEach((bullet, i) => {
        bullet.update(delta);
        if (
          (bullet.speed === -80 && bullet.position.y < 0) ||
          (bullet.speed === 60 && bullet.position.y > this.screenHeight)
        ) {
          this.bulletPool.splice(i, 1);
        }
        // player and enemy bullet collision
        if (
          bullet.collidesWith(this.player) &&
          bullet.speed.y === 60 &&
          !this.player.hit
        ) {
          this.bulletPool.splice(i, 1);

          this.explosion = new Explosion(
            this.player.position.x,
            this.player.position.y,
            "./explosion.png"
          );

          this.player.playerHit();
        }
        this.enemies.forEach((enemy, j) => {
          if (bullet.collidesWith(enemy) && bullet.speed.y === -80) {
            this.bulletPool.splice(i, 1);
            this.explosion = new Explosion(
              enemy.position.x,
              enemy.position.y,
              "./explosion.png"
            );

            this.enemies.splice(j, 1);
            console.log(this.enemies.length);
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

    // when all enemies defeated, pause a few seconds, move onto next level and reset variables
    if (this.enemies.length <= 0) {
      this.bulletPool = [];
      this.screen++;
      this.level = new Level(this.screen);
      setTimeout(() => {
        //this.explosion = null;
        this.enemies = this.level.getEnemies();
        //this.bulletFiredAtTicks = 0;
        this.enemyCharging = false;
        this.chargingEnemy = Math.floor(Math.random() * this.enemies.length);
      }, 4000);
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

      if (this.blocks.length > 0) {
        this.blocks.forEach(block => {
          block.draw(ctx);
        });
      }
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
