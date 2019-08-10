import Sprite from "./sprite.js";
//import Input from "./input.js";
export default class Enemy {
  constructor(xPos, yPos, enemyType, imageSrc) {
    // declare player properties
    this.enemyType = enemyType;
    this.width = 32;
    this.height = 32;
    this.speed = {
      x: 0,
      y: 0
    };
    this.position = {
      x: xPos,
      y: yPos
    };
    this.image = new Image();
    this.image.src = "./enemies.png";
    this.sourceWidth = 32;
    this.sourceHeight = 32;

    this.enemySprite = new Sprite(
      this.image,
      this.sourceWidth,
      this.sourceHeight,
      this.position,
      this.width,
      this.height,
      4 // number of frames in the spritsheet
    );
    this.now = 0;
    this.moving = false;
    //this.move(this.enemyType);
  }

  move(enemyNumber) {
    if (this.enemyType === 0) {
      this.now = new Date().getTime();
      let randomNum = Math.random();
      if (randomNum < 0.3) {
        this.left();
        //this.position.x += this.speed.x / delta;
      } else if (randomNum < 0.6) {
        this.right();
        //this.position.x += this.speed.x / delta;
      } else if (randomNum < 1) {
        this.down();
        //this.position.y += this.speed.y / delta;
      }
    } else {
      this.right();
      setTimeout(() => {
        this.stop();
        this.down();
      }, 400);
      setTimeout(() => {
        this.stop();
        this.right();
      }, 800);
      setTimeout(() => {
        this.stop();
        this.down();
      }, 1200);
      setTimeout(() => {
        this.stop();
        this.right();
      }, 1400);
      setTimeout(() => {
        this.stop();
        this.left();
      }, 1700);
      setTimeout(() => {
        this.stop();
        this.right();
      }, 1900);
    }
  }

  left() {
    //this.now = new Date().getTime();
    this.moving = true;
    this.speed.x = -25; // -25 pixels per second
  }

  right() {
    //this.now = new Date().getTime();
    this.moving = true;
    this.speed.x = 25; // 25 pixels per second
  }

  down() {
    //this.now = new Date().getTime();
    this.moving = true;
    this.speed.y = 25; // 25 pixels per second
  }

  stop() {
    this.speed.x = 0;
    this.speed.y = 0;
  }

  draw(ctx) {
    //ctx.fillStyle = "red";
    this.enemySprite.draw(ctx);
  }
  update(delta) {
    // every delta milliSeconds
    if (!delta) return;

    // movement across screen
    //this.position.x += this.speed.x / delta; // pixels per milliSecond
    //this.position.y += this.speed.y / delta; // pixels per milliSecond
    if (!this.moving) {
    }
    this.position.x += this.speed.x / delta;
    this.position.y += this.speed.y / delta;

    //}
    if (this.enemyType === 0) {
      if (new Date().getTime() - this.now > 400) {
        this.stop();
        //this.moving = false;
        //this.move(0);
      }
    } else {
      // TODO
    }

    //this.stop();
    this.enemySprite.update(delta);
  }
}
