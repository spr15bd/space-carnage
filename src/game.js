import Player from "./player.js";
import Bullet from "./bullet.js";
import Explosion from "./explosion.js";
import Input from "./input";
import Level from "./level";
import Sound from "./sound";

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

    this.playerLaser = new Sound("/laser.m4a", 3, 0.25);
    this.enemyExplosion = new Sound("/enemyExplosion.m4a", 3, 0.25);
    this.playerExplosion = new Sound("/explosion.m4a", 3, 0.25);
    this.player = new Player(this.screenWidth, this.screenHeight, this);
    new Input(this.player, this);
    this.initialiseGame();
  }

  initialiseGame() {
    this.totalTime = 0;
    this.screen = 0;
    this.level = new Level(this.screen); // initialise the first level
    this.enemies = this.level.getEnemies(); // ...which returns an array of enemies and their positions on screen
    this.blocks = this.level.getBlocks(); // ...and an array of blocks and their positions
    this.ticks = 0; // will be used to keep track of time for alien movement, player invincibility, limiting bullets and any required delays
    this.waiting = false;
    this.playerHit = false;
    //this.now = Date.now();
    this.lastPlayerBulletTicks = this.ticks;
    this.delayOver = false; // set to true whenever a delay is over
    //this.now = 0; // will be used to limit the number of bullets fired
    this.enemyCharging = false; //true whenver an alien swoops towards the player
    this.chargingEnemy = Math.floor(Math.random() * this.enemies.length); //randomly chooses an enemy to swoop at the player
    this.gameState = GAMESTATE.MENU; // initially show the menu screen
    this.explosion = null;
    this.exitAngle = 0;
    this.exitPos = {
      x: 0,
      y: 0
    };
    this.nextDistance = 0;
    this.waveCentre = [
      {
        x: 300,
        y: -200
      },
      {
        x: this.screenWidth - 300,
        y: -200
      }
    ];
    this.radius = {
      x: 300,
      y: 600
    };
    this.waveXDisp = [0, -0];
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
    this.playerLaser.pause();
    this.playerExplosion.pause();
  }

  shootBullet(entity) {
    // do not allow a player bullet to be fired until 14 ticks have elapsed
    if (entity === this.player) {
      if (this.ticks - this.lastPlayerBulletTicks > 13) {
        this.bulletPool.push(
          new Bullet(
            entity.position.x + entity.width / 2,
            entity.position.y,
            -120, // speed of bullet, -120 for player
            entity.bulletImage
          )
        );
        if (this.gameState === GAMESTATE.GAMEINPROGRESS)
          this.playerLaser.play();
        this.lastPlayerBulletTicks = this.ticks;
      }
    } else {
      this.bulletPool.push(
        new Bullet(
          entity.position.x + entity.width / 2,
          entity.position.y,
          150, // speed of bullet, 150 for enemy
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
      // do the between levels player thrust upwards routine
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
    if (!delta) return;

    //this.totalTime += delta;
    this.enemies.forEach((enemy, i) => {
      if (enemy.position.y > 0) {
        enemy.inPlay = true;

        //console.log(enemy.onScreen);
      }
      if (Math.random() > 0.99) {
        this.shootBullet(enemy);
      }

      if (enemy.movement === 0 && enemy.inPlay) {
        enemy.move(140, 0.3, 200);
        //enemy.movement++;
      }
      if (enemy.movement === 1) {
        enemy.move(300, -0.4, 170);
        //enemy.movement++;
      }
      if (enemy.movement === 2) {
        enemy.move(420, 0, 80);
        //enemy.movement++;
      }

      if (enemy.movement === 3) {
        enemy.move(670, -0.5, 100);
        //enemy.move++;
      }

      if (enemy.movement === 4) {
        enemy.move(870, 0.4, 100);
        //enemy.move++;
      }
      if (enemy.move === 4 && enemy.inPlay) {
        if (enemy.angle <= 380) {
          enemy.angle += 2;
        } else {
          enemy.lastX = enemy.position.x;
          enemy.move++;
        }
      }
      if (enemy.move === 5 && enemy.onScreen) {
        if (Math.abs(enemy.position.x - enemy.lastX) > 200) {
          enemy.move++;
        }
      }
      if (enemy.move === 6 && enemy.onScreen) {
        if (enemy.angle <= 530) {
          enemy.angle += 2;
        } else {
          enemy.lastX = enemy.position.x;
          enemy.move++;
        }
      }
      if (enemy.move === 7 && enemy.onScreen) {
        if (Math.abs(enemy.position.x - enemy.lastX) > 150) {
          enemy.move++;
        }
      }

      if (enemy.move === 8 && enemy.onScreen) {
        if (enemy.angle <= 730) {
          enemy.angle += 2;
        } else {
          enemy.lastX = enemy.position.x;
          enemy.move++;
        }
      }

      if (enemy.move === 9 && enemy.onScreen) {
        if (Math.abs(enemy.position.x - enemy.lastX) > 150) {
          enemy.move++;
        }
      }

      if (enemy.move === 10 && enemy.onScreen) {
        if (enemy.angle <= 930) {
          enemy.angle += 3;
        } else {
          enemy.lastX = enemy.position.x;
          enemy.move++;
        }
      }

      if (enemy.move === 11 && enemy.onScreen) {
        if (Math.abs(enemy.position.x - enemy.lastX) > 150) {
          enemy.move++;
        }
      }
      if (enemy.move === 12 && enemy.onScreen) {
        if (enemy.angle <= 1130) {
          enemy.angle += 4;
        } else {
          enemy.lastX = enemy.position.x;
          enemy.move++;
        }
      }
      if (enemy.move === 13 && enemy.onScreen) {
        if (Math.abs(enemy.position.x - enemy.lastX) > 150) {
          enemy.move++;
        }
      }
      if (enemy.move === 14 && enemy.onScreen) {
        if (enemy.angle <= 1330) {
          enemy.angle += 4;
        } else {
          enemy.lastX = enemy.position.x;
          enemy.move++;
        }
      }
      if (enemy.move === 15 && enemy.onScreen) {
        if (Math.abs(enemy.position.x - enemy.lastX) > 150) {
          enemy.move++;
        }
      }
      if (enemy.move === 16 && enemy.onScreen) {
        if (enemy.angle <= 1510) {
          enemy.angle += 4;
        } else {
          enemy.lastX = enemy.position.x;
          enemy.move++;
        }
      }
      if (enemy.move === 17 && enemy.onScreen) {
        if (Math.abs(enemy.position.x - enemy.lastX) > 150) {
          enemy.move++;
        }
      }
      if (enemy.move === 18 && enemy.onScreen) {
        if (enemy.angle >= 1330) {
          enemy.angle -= 5;
        } else {
          enemy.lastX = enemy.position.x;
          enemy.move++;
        }
      }
      if (enemy.move === 19 && enemy.onScreen) {
        if (Math.abs(enemy.position.x - enemy.lastX) > 100) {
          enemy.move++;
        }
      }
      if (enemy.move === 20 && enemy.onScreen) {
        if (enemy.angle >= 1170) {
          enemy.angle -= 3;
        } else {
          enemy.lastY = enemy.position.y;
          enemy.move++;
        }
      }
      if (enemy.move === 21 && enemy.onScreen) {
        if (Math.abs(enemy.position.y - enemy.lastY) > 100) {
          enemy.move++;
        }
      }
      if (enemy.move === 22 && enemy.onScreen) {
        if (enemy.angle >= 1080) {
          enemy.angle -= 2;
        } else {
          enemy.lastX = enemy.position.x;
          enemy.move++;
        }
      }
      if (enemy.move === 23 && enemy.onScreen) {
        if (Math.abs(enemy.position.x - enemy.lastX) > 600) {
          enemy.move++;
        }
      }
      if (enemy.move === 24 && enemy.onScreen) {
        if (enemy.angle >= 900) {
          enemy.angle -= 4;
        } else {
          enemy.lastX = enemy.position.x;
          enemy.move = 1;
        }
      }

      //enemy.angle = Math.round(enemy.angle);

      //this.enemies[i].angle=this.enemies[0].angle;
      enemy.update(delta);
      //this.enemies[i].angle = this.enemies[0].angle;
    });
  }
  moveEnemies2(delta) {
    //this.totalTime += delta;
    this.enemies.forEach((enemy, i) => {
      if (i < this.enemies.length / 2) {
        enemy.position.x =
          this.waveCentre[0].x -
          this.radius.x * Math.cos((enemy.angle * Math.PI) / 180);
        enemy.position.y =
          this.waveCentre[0].y -
          this.radius.y * Math.sin((enemy.angle * Math.PI) / 180);
        enemy.angle += this.angle[0];

        if (enemy.position.x < -(this.radius.x + 100)) {
          this.waveXDisp[0] = 0.2;
        } else if (
          enemy.position.x >
          this.screenWidth + (this.radius.x + 100)
        ) {
          this.waveXDisp[0] = -0.2;
        }

        if (Math.floor(enemy.position.y) === -450) {
          //this.angle = -0.2;
          this.radius.x = Math.random() * 400 + 100;
          this.radius.y -= 0.3;
          //enemy.position.x +=0.1;
          //this.waveCentre[0].y += 1;
          //this.waveCentre[0].x -= 1;
        }
        if (Math.floor(enemy.position.y) >= 400) {
          //this.angle = -0.2;
          //this.radius.x += 0.2;
          this.radius.y += 0.3;
          //enemy.position.x -=0.1;
          //this.waveCentre[0].y -= 1;
          //this.waveCentre[0].x += 1;
        }
      } else {
        enemy.position.x =
          this.waveCentre[1].x +
          this.radius.x * Math.cos((enemy.angle * Math.PI) / 180);
        enemy.position.y =
          this.waveCentre[1].y +
          this.radius.y * Math.sin((enemy.angle * Math.PI) / 180);
        enemy.angle += this.angle[1];
        if (enemy.position.x < -(this.radius.x + 100)) {
          this.waveXDisp[1] = 0.2;
        } else if (
          enemy.position.x >
          this.screenWidth + (this.radius.x + 100)
        ) {
          this.waveXDisp[1] = -0.2;
        }

        if (enemy.position.y <= -600) {
          //this.angle = -0.2;
          //this.radius.x += 0.08;
          //this.radius.y += 0.04;
          //this.waveCentre[0].y += 2;
          //this.angle[0] = 0.6;
          //this.angle[1] = -0.6;
          //enemy.angle += 100;
          //this.radius.x = 800;
        }
        if (enemy.position.y >= 1200) {
          //this.angle = -0.2;
          //this.radius.x -= 0.08;
          //this.radius.y -= 0.02;
          //this.waveCentre[1].y -= 2;
          //this.angle[1] = -1.1;
          //enemy.angle += 100;
          //this.radius.x -= 400;
        }
        if (enemy.position.x <= 0) {
          //this.angle = -0.2;
          //this.radius.x -= 0.08;
          //this.radius.y -= 0.02;
          //this.waveCentre[1].x += 15;
          //this.angle[1] = -1.1;
          //enemy.angle = -130+i*10;
        } else if (enemy.position.x > 1000) {
          //this.angle = -0.2;
          //this.radius.x -= 0.08;
          //this.radius.y -= 0.02;
          //this.waveCentre[1].x -= 15;
          //this.angle[1] = -1.1;
          //enemy.angle -= 0.10;
          //this.radius.y = 650;
        } else {
        }
      }

      enemy.update(delta);

      /*if (Math.floor(enemy.position.x) >= 650) {
//this.angle = -0.2;
this.radius.x -= 0.02;
this.radius.y -= 0.02;
}
if (Math.floor(enemy.position.x) <= 150) {
//this.angle = -0.2;
this.radius.x += 0.04;
this.radius.y += 0.04;
}*/
      //enemy.angle += this.angle;

      //console.log(this.accumulatedTime);

      //else enemy.angle -= 0.4;
      this.waveCentre[0].x += this.waveXDisp[0];
      this.waveCentre[1].x += this.waveXDisp[1];

      if (Math.random() > 0.99) {
        this.shootBullet(enemy);
      }
    });
  }
  moveEnemies1(delta) {
    //enemy.x += enemy.speed * Math.cos(this.angle * Math.PI / 180);
    //this.y += this.speed * Math.sin(angle * Math.PI / 180);
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
          (bullet.speed === -120 && bullet.position.y < 0) ||
          (bullet.speed === 150 && bullet.position.y > this.screenHeight)
        ) {
          this.bulletPool.splice(i, 1);
        }
        // player and enemy bullet collision
        if (
          bullet.collidesWith(this.player) &&
          bullet.speed.y === 150 &&
          !this.playerHit
        ) {
          this.bulletPool.splice(i, 1);

          this.explosion = new Explosion(
            this.player.position.x,
            this.player.position.y,
            "./explosion.png"
          );
          if (this.gameState === GAMESTATE.GAMEINPROGRESS) {
            this.playerExplosion.play();
          }
          //this.player.playerHit();

          this.playerHit = true;
          this.player.lives -= 1;
          if (this.player.lives <= 0) {
            // game over
            setTimeout(() => {
              if (this.player.score > this.player.hiscore) {
                localStorage.setItem("hiscore", this.player.score);
              }
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
          if (bullet.collidesWith(block) && bullet.speed.y === -120) {
            this.bulletPool.splice(i, 1);
            //this.player.incrementScore(enemy.enemyType);
            //console.log("collision");
            this.blocks.splice(k, 1);
          }
        });

        this.enemies.forEach((enemy, j) => {
          if (bullet.collidesWith(enemy) && bullet.speed.y === -120) {
            this.bulletPool.splice(i, 1);
            this.player.incrementScore(enemy.enemyType);
            this.explosion = new Explosion(
              enemy.position.x,
              enemy.position.y,
              "./explosion.png"
            );
            if (this.gameState === GAMESTATE.GAMEINPROGRESS) {
              this.enemyExplosion.play();
            }
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
