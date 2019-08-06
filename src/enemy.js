import Sprite from "./sprite.js";
//import Input from "./input.js";
export default class Enemy {
  constructor(xPos, yPos) {
    // declare player properties
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
    this.targetWidth = 32;
    this.targetHeight = 32;
    this.enemySprite = new Sprite(
      this.image,
      this.sourceWidth,
      this.sourceHeight,
      this.position,
      this.targetWidth,
      this.targetHeight,
      4 // number of frames in the spritsheet
    );
    this.now = 0;
    this.moving = false;
  }

  left() {
    this.now = new Date().getTime();
    this.moving = true;
    this.speed.x = -25; // -25 pixels per second
  }

  right() {
    this.now = new Date().getTime();
    this.moving = true;
    this.speed.x = 25; // 25 pixels per second
  }

  down() {
    this.now = new Date().getTime();
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
      let randomNum = Math.random();
      if (randomNum < 0.25) {
        this.left();
        //this.position.x += this.speed.x / delta;
      } else if (randomNum < 0.5) {
        this.right();
        //this.position.x += this.speed.x / delta;
      } else {
        this.down();
        //this.position.y += this.speed.y / delta;
      }
    }
    this.position.x += this.speed.x / delta;
    this.position.y += this.speed.y / delta;

    //}
    if (new Date().getTime() - this.now > 400) {
      this.stop();
      this.moving = false;
    }
    //this.stop();
    this.enemySprite.update(delta);
  }
}
