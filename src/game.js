import Player from "./player.js";
import Bullet from "./bullet.js";
import Explosion from "./explosion.js";
import Input from "./input";
import Level from "./level";

const GAMESTATE = {
  MENU: 0,
  GAMEINPROGRESS: 1,
  GAMEOVER: 2
};
export default class Game {
  constructor(screenWidth, screenHeight) {
    this.backgroundImage = new Image();
    this.backgroundImage.src = "/starbackground.png";
    this.backgroundImage.yPos = -600;
    this.screenWidth = screenWidth;
    this.screenHeight = screenHeight;
    this.player = new Player(this.screenWidth, this.screenHeight, this);
    new Input(this.player, this);
    this.initialiseGame();
  }

  initialiseGame() {
    this.screen = 0;
    this.level = new Level(this.screen); // initialise the first level
    this.enemies = this.level.getEnemies(); // ...which returns an array of enemies and their positions on screen
    this.blocks = this.level.getBlocks(); // ...and an array of blocks and their positions
    this.ticks = 0; // will be used to keep track of time for alien movement, player invincibility, limiting bullets and any required delays
    this.waiting = false;
    this.playerHit = false;
    this.now = this.ticks;
    this.delayOver = false; // set to true whenever a delay is over
    //this.now = 0; // will be used to limit the number of bullets fired
    this.enemyCharging = false; //true whenver an alien swoops towards the player
    this.chargingEnemy = Math.floor(Math.random() * this.enemies.length); //randomly chooses an enemy to swoop at the player
    this.gameState = GAMESTATE.MENU; // initially show the menu screen
    this.explosion = null;

    this.bulletPool = []; // array for enemy and player bullets
    this.stats = document.getElementById("stats");
    this.score = document.getElementById("score");
    this.lives = document.getElementById("lives");
    this.hiscore = document.getElementById("hiscore");
  }

  start() {
    this.gameState = GAMESTATE.GAMEINPROGRESS;
  }

  gameOver() {
    this.gameState = GAMESTATE.GAMEOVER;
  }

  shootBullet(entity) {
    // do not allow a player bullet to be fired until 14 ticks have elapsed
    if (entity === this.player) {
      if (this.ticks - this.now > 14) {
        this.bulletPool.push(
          new Bullet(
            entity.position.x + entity.width / 2,
            entity.position.y,
            -80, // speed of bullet, -80 for player
            entity.bulletImage
          )
        );
        this.now = this.ticks;
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
    this.ticks++;
    // update player
    if (this.player != null) this.player.update(delta);
    // update blocks
    this.blocks.forEach(block => {
      block.update(delta);
      //block.speed.x = 0;
    });
    // update enemies
    this.moveEnemies(delta);
    // update collisions
    this.checkForCollisions(delta);
    // update explosions
    this.checkForExplosions(delta);

    // when all enemies defeated, thrust the player ship upward a few seconds, reset variables 7 move to next level
    if (this.enemies.length <= 0) {
      if (this.delayOver) {
        this.thrust();
      } else {
        this.delay(70, () => {
          this.delayOver = true;
          //this.thrust();
        });
      }
    }
  }

  thrust() {
    if (this.backgroundImage.yPos < 0) {
      //  do the between levels player thrust upwards routine
      this.backgroundImage.yPos += 2;
    } else {
      // wait a couple of seconds, reset variables and start a new level...
      // move the background image back above the screen ready for the end of the next level
      // (top and bottom half of the background image are the same so the change is unnoticeable)
      this.delay(120, () => {
        this.backgroundImage.yPos = -600;
        this.bulletPool = [];
        this.screen++;
        this.level = new Level(this.screen);
        this.enemies = this.level.getEnemies();
        this.enemyCharging = false;
        this.chargingEnemy = Math.floor(Math.random() * this.enemies.length);
        this.waiting = false;
        this.delayOver = false;
      });
    }
  }

  draw(ctx) {
    if (this.gameState === GAMESTATE.MENU) {
      this.stats.style.display = "none";

      ctx.rect(0, 0, this.screenWidth, this.screenHeight);
      ctx.fillStyle = "black";
      ctx.fill();
      ctx.textAlign = "center";
      ctx.fillStyle = "#e61ce1";
      ctx.font = "18px dejavu sans mono";
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
      document.getElementById("gameScreen").focus();
    } else if (this.gameState === GAMESTATE.GAMEINPROGRESS) {
      this.stats.style.display = "flex";
      ctx.drawImage(
        this.backgroundImage,
        0, // source (spritesheet file) x
        0, // source (spritesheet file) y
        800, // source (spritesheet file) width
        1200, // source (spritesheet file) height
        0, // gamescreen x
        this.backgroundImage.yPos, // gamescreen y
        this.screenWidth, // gamescreen width
        this.screenHeight * 2 // gamescreen height (twice screen height as it's a scrolling background)
      );
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
      this.lives.innerHTML = this.player.lives;
      this.score.innerHTML = this.player.score;
      this.hiscore.innerHTML = this.player.hiscore;
      if (this.explosion != null) this.explosion.draw(ctx);
    } else if (this.gameState === GAMESTATE.GAMEOVER) {
      ctx.drawImage(
        this.backgroundImage,
        0, // source (spritesheet file) x
        0, // source (spritesheet file) y
        800, // source (spritesheet file) width
        1200, // source (spritesheet file) height
        0, // gamescreen x
        this.backgroundImage.yPos, // gamescreen y
        this.screenWidth, // gamescreen width
        this.screenHeight * 2 // gamescreen height (twice screen height as it's a scrolling background)
      );
      ctx.textAlign = "center";
      ctx.fillStyle = "#e61ce1";
      ctx.font = "24px dejavu sans mono";
      ctx.fillText("Game Over", this.screenWidth / 2, this.screenHeight / 2);
      // wait a couple of seconds then load a new game
      this.delay(120, () => {
        this.initialiseGame();
      });
    }
  }

  moveEnemies(delta) {
    this.enemies.forEach((enemy, i) => {
      if (this.enemyCharging === false) {
        enemy.position.x =
          enemy.startXPosition + 50 + 270 * Math.sin(this.ticks * 0.02);

        //enemy.position.x =
        //300 + 270 * Math.sin(this.ticks * 0.02) + (i % 5) * 64; //i* (32 * 2);
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
            enemy.startXPosition + 50 + 270 * Math.sin(this.ticks * 0.02);
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
  }
  checkForCollisions(delta) {
    // check for and handle any player, enemy or screen boundary collisions with bullets
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
          !this.playerHit
        ) {
          this.bulletPool.splice(i, 1);

          this.explosion = new Explosion(
            this.player.position.x,
            this.player.position.y,
            "./explosion.png"
          );

          //this.player.playerHit();

          this.playerHit = true;
          this.player.lives -= 1;
          if (this.player.lives <= 0) {
            // game over
            setTimeout(() => {
              this.player.reset();
              this.gameOver();
            }, 2000);
          } else {
            // lose a life routine
            setTimeout(() => {
              this.playerHit = false;
            }, 3000);
          }
        }

        this.blocks.forEach((block, k) => {
          if (bullet.collidesWith(block) && bullet.speed.y === -80) {
            this.bulletPool.splice(i, 1);
            //this.player.incrementScore(enemy.enemyType);
            //console.log("collision");
            this.blocks.splice(k, 1);
          }
        });

        this.enemies.forEach((enemy, j) => {
          if (bullet.collidesWith(enemy) && bullet.speed.y === -80) {
            this.bulletPool.splice(i, 1);
            this.player.incrementScore(enemy.enemyType);
            this.explosion = new Explosion(
              enemy.position.x,
              enemy.position.y,
              "./explosion.png"
            );

            this.enemies.splice(j, 1);
          }
        });
      });
    }
  }
  checkForExplosions(delta) {
    if (this.explosion != null) {
      if (this.explosion.readyForDeletion === true) {
        this.explosion = null;
      } else {
        this.explosion.update(delta);
      }
    }
  }
  delay(time, callback) {
    if (!this.waiting) {
      this.now = this.ticks;
      this.waiting = true;
    }
    if (this.ticks - this.now > time) {
      this.waiting = false;
      this.delayOver = true;
      callback();
    }
  }
}
