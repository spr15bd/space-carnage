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
    this.state = 0;
    this.start = {
      x: xPos,
      y: yPos
    };

    this.position = {
      x: xPos,
      y: yPos
    };
    this.last = {
      x: xPos,
      y: yPos
    };
    this.maxTurn = 180;
    this.image = new Image();
    this.image.src = imageSrc;
    this.bulletImage = new Image();
    this.bulletImage.src = "./enemyBullet.png";
    this.sourceWidth = 32;
    this.sourceHeight = 32;
    if (this.enemyType === 0) {
      this.sourceY = 0;
    } else if (this.enemyType === 1) {
      this.sourceY = 32;
    } else if (this.enemyType === 2) {
      this.sourceY = 64;
    }

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
    //this.start = true;
    this.movement = 0;
    this.bounced = 0;
    this.attack = false;
    this.now = 0;
    this.inPlay = false;
    this.turned180 = false;
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
    if (this.enemyType === 0 || this.enemyType === 1) {
      this.speed.x = 5 * Math.cos((this.angle * Math.PI) / 180);
      this.speed.y = 5 * Math.sin((this.angle * Math.PI) / 180);

      this.position.x =
        this.enemyType === 0
          ? Math.ceil(this.position.x) + this.speed.x
          : Math.floor(this.position.x) + this.speed.x;
      this.position.y = Math.floor(this.position.y) + this.speed.y;
    } else if (this.enemyType === 2) {
      if (this.state === 0) {
      } else if (this.state === 1) {
      }
    }

    // movement across screen
    // pixels per milliSecond

    this.enemySprite.update(delta);
  }
  moveTo(x, y, delta) {
    if (
      Math.round(this.position.x) === x &&
      Math.round(this.position.y) === y
    ) {
      return;
    }
    if (this.position.x !== x) {
      this.speed.x = (x - this.position.x) * (delta / 1000);
    }
    if (this.position.y !== y) {
      this.speed.y = (y - this.position.y) * (delta / 1000);
    }
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;
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
