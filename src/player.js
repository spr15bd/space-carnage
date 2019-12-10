import Sprite from "./sprite.js";
export default class Player {
  constructor(screenWidth, screenHeight, game) {
    // declare player properties
    this.width = 24;
    this.height = 30;
    this.screenWidth = screenWidth;
    this.screenHeight = screenHeight;
    this.game = game;
    this.paused = true;
    this.isVisible = true;
    this.isInvincible = false;
    this.reset();
  }

  reset() {
    this.hiscore = localStorage.getItem("hiscore");
    if (this.hiscore == null) {
      this.hiscore = 0;
    }
    this.speed = {
      x: 0,
      y: 0
    };
    this.position = {
      x: this.screenWidth / 2 - this.width / 2,
      y: this.screenHeight - this.height - 10
    };
    this.playerImage = new Image();
    this.playerImage.src = "./player.png";
    this.bulletImage = new Image();
    this.bulletImage.src = "./playerBullet.png";
    this.sourceWidth = 16;
    this.sourceHeight = 16;
    this.sourceY = 0;
    this.numberOfFrames = 4;
    this.frameDuration = 15;
    this.repeatAnimation = true;
    this.playerSprite = new Sprite(
      this.playerImage,
      this.sourceWidth,
      this.sourceHeight,
      this.sourceY,
      this.position,
      this.width,
      this.height,
      this.numberOfFrames,
      this.frameDuration,
      this.repeatAnimation,
      0
    );
    //this.hit = false;
    this.score = 0;
    this.lives = 4;
  }

  incrementScore(enemyType) {
    switch (enemyType) {
      case 0:
        this.score += 10;
        break;
      case 1:
        this.score += 20;
        break;
      default:
        this.score += 10;
    }
  }

  left() {
    this.speed.x = -25; // -25 pixels per second
  }

  right() {
    this.speed.x = 25; // +25 pixels per second
  }

  stop() {
    this.speed.x = 0;
  }

  checkWhetherOnScreen() {
    if (this.position.x < 0) {
      this.position.x = 0;
    } else if (this.position.x > this.screenWidth - this.width) {
      this.position.x = this.screenWidth - this.width;
    }
  }

  draw(ctx) {
    //do not display the player if player has just been hit
    if (!this.isVisible) {
      return;
    }
    ctx.save();
    ctx.translate(
      this.position.x + this.width / 2,
      this.position.y + this.height / 2
    );

    ctx.rotate((this.angle * Math.PI) / 180);
    this.playerSprite.draw(ctx);

    ctx.restore();
  }

  collidesWith(entity) {
    if (
      this.position.x >= entity.position.x &&
      this.position.x <= entity.position.x + entity.width &&
      this.position.y >= entity.position.y &&
      this.position.y <= entity.position.y + entity.height
    ) {
      //console.log(entity);
      return true;
    }
  }

  update(delta) {
    // every delta milliSeconds
    if (!delta) return;

    this.position.x += this.speed.x / delta; // pixels per milliSecond
    this.checkWhetherOnScreen();

    this.playerSprite.update(delta);
  }
}
