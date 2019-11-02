import Sprite from "./sprite.js";

export default class Enemy {
  constructor(xPos, yPos, angle, enemyType, imageSrc) {
    // declare enemy properties
    this.enemyType = enemyType;
    this.width = 32;
    this.height = 32;
    this.speed = {
      x: 0,
      y: 0
    };
    this.startXPosition = xPos;

    this.position = {
      x: xPos,
      y: yPos
    };
    this.last = {
      x: xPos,
      y: yPos
    };

    this.image = new Image();
    this.image.src = imageSrc;
    this.bulletImage = new Image();
    this.bulletImage.src = "./enemyBullet.png";
    this.sourceWidth = 32;
    this.sourceHeight = 32;
    this.sourceY = enemyType === 0 ? 0 : 32;
    this.numberOfFrames = 8;
    this.frameDuration = 15;
    this.repeatAnimation = true;
    this.angle = angle;
    this.newAngle = 45;
    this.enemySprite = new Sprite(
      this.image,
      this.sourceWidth,
      this.sourceHeight,
      this.sourceY,
      this.position,
      this.width,
      this.height,
      this.numberOfFrames, // number of frames in the spritsheet
      this.frameDuration,
      this.repeatAnimation,
      this.angle
    );
    this.start = true;
    this.movement = 0;
    this.bounced = 0;
    this.outsideViewPort = false;
    this.now = 0;
    this.inPlay = false;

    this.turning = false;
    //this.moving = false;
    //this.bulletPool = [];
  }

  draw(ctx) {
    //ctx.fillStyle = "red";
    ctx.save();
    ctx.translate(
      this.position.x + this.width / 2,
      this.position.y + this.height / 2
    );

    ctx.rotate(((this.angle + 90) * Math.PI) / 180);
    this.enemySprite.draw(ctx);

    ctx.restore();
  }
  update(delta) {
    // every delta milliSeconds
    if (!delta) return;
    //if (this.angle >= 360) this.angle = 0;
    this.speed.x = 5 * Math.cos((this.angle * Math.PI) / 180);
    this.speed.y = 5 * Math.sin((this.angle * Math.PI) / 180);

    // movement across screen
    // pixels per milliSecond

    this.position.x = Math.floor(this.position.x) + this.speed.x;
    this.position.y = Math.floor(this.position.y) + this.speed.y;
    this.enemySprite.update(delta);
  }

  move(angle, angle2, distance) {
    if (this.movementStep === 0 && this.inPlay) {
      this.last.x = this.position.x;

      this.movementStep++;
    }
    if (this.movementStep === 1 && this.inPlay) {
      this.angle += angle2;
      if (Math.abs(this.position.x - this.last.x) > distance) {
        if (this.angle < angle) {
          this.movementStep = 2;
        } else {
          this.movementStep = 3;
        }
      }
    }
    if (this.movementStep === 2 && this.inPlay) {
      if (this.angle < angle) {
        this.angle += 1.2;
      } else {
        this.movementStep = 0;
        this.movement++;
      }
    }
    if (this.movementStep === 3 && this.inPlay) {
      if (this.angle > angle) {
        this.angle -= 2.4;
      } else {
        this.movementStep = 0;
        this.movement++;
      }
    }
  }
}
