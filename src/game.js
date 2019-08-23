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
    this.now = this.ticks;
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
    // do not allow a player bullet to be fired until 10 ticks have elapsed
    if (entity === this.player && this.ticks - this.bulletFiredAtTicks > 14) {
      this.bulletPool.push(
        new Bullet(
          entity.position.x + entity.width / 2,
          entity.position.y,
          -80, // speed of bullet, -80 for player
          entity.bulletImage
        )
      );
      this.bulletFiredAtTicks = this.ticks;
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
    this.ticks++;
    //console.log(this.ticks);
    if (this.player != null) this.player.update(delta);
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
            enemy.speed.y = this.screenHeight / 7 / 350;
            enemy.speed.x = 0;
          } else if (this.ticks - this.now < 160) {
            enemy.speed.x = this.screenHeight / 7 / 500;
            enemy.speed.y = 0;
            if (Math.random() > 0.9) {
              this.shootBullet(enemy);
            }
          } else if (this.ticks - this.now < 240) {
            enemy.speed.y = 0;
            enemy.speed.x = -(this.screenHeight / 7) / 500;
            if (Math.random() > 0.9) {
              this.shootBullet(enemy);
            }
          } else if (this.ticks - this.now < 320) {
            enemy.speed.y = -(this.screenHeight / 8) / 400;
            enemy.speed.x = -500 / 4000;
          } else if (this.ticks - this.now < 700) {
            // once the charge is over move the enemy back into formation
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
              enemy.speed.y = -(enemy.position.y - 30) / delta;
            }
          } else {
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
        enemy.speed.y = 0;
      }
      if (
        this.ticks - this.now > 700 &&
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
        /* player and enemy bullet collision
        if (bullet.collidesWith(this.player) && bullet.speed.y === 60) {
          console.log("collision");
          this.bulletPool.splice(i, 1);

          this.explosion = new Explosion(
            this.player.position.x,
            this.player.position.y,
            "./explosion.png"
          );
          
          
         this.playerImage.src = "";
        }*/
        this.enemies.forEach((enemy, i) => {
          if (bullet.collidesWith(enemy) && bullet.speed.y === -80) {
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
      if (this.player != null) this.player.draw(ctx);
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
