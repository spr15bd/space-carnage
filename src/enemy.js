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
    this.sourceX = 0;
    if (this.enemyType === 0) {
      this.sourceY = 0;
    } else if (this.enemyType === 1) {
      this.sourceY = 32;
    } else if (this.enemyType === 2) {
      this.sourceY = 64;
    } else if (this.enemyType === 3) {
      this.sourceY = 96;
    } else if (this.enemyType === 4) {
      this.sourceY = 128;
    } else if (this.enemyType === 5) {
      this.sourceY = 264;
    } else if (this.enemyType === 6) {
      this.sourceY = 296;
    } else if (this.enemyType === 7) {
      this.sourceY = 196;
    } else if (this.enemyType === 9) {
      this.sourceY = 300;
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
      this.sourceX,
      this.sourceY,
      this.position,
      this.width,
      this.height,
      this.numberOfFrames, // number of frames in the spritsheet
      this.frameDuration,
      this.repeatAnimation,
      this.angle
    );
    this.paused = true;
    this.movement = 0;
    this.bounced = 0;
    this.swoop = false;
    this.now = 0;
    this.inPlay = false;
    this.turned180 = false;
    this.turning = false;
  }

  draw(ctx) {
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
    if (!delta || this.paused) return;
    if (this.enemyType === 0 || this.enemyType === 1) {
      this.speed.x = 5 * Math.cos((this.angle * Math.PI) / 180);
      this.speed.y = 5 * Math.sin((this.angle * Math.PI) / 180);

      this.position.x =
        this.enemyType === 0
          ? Math.ceil(this.position.x) + this.speed.x
          : Math.floor(this.position.x) + this.speed.x;
      this.position.y = Math.floor(this.position.y) + this.speed.y;
    } else if (this.enemyType === 4) {
      this.speed.x = 7 * Math.cos((this.angle * Math.PI) / 180);
      this.speed.y = 7 * Math.sin((this.angle * Math.PI) / 180);

      this.position.x =
        this.enemyType === 0
          ? Math.ceil(this.position.x) + this.speed.x
          : Math.floor(this.position.x) + this.speed.x;
      this.position.y = Math.floor(this.position.y) + this.speed.y;
      if (this.angle <= 0) {
        this.angle += 360;
      }
    }

    // movement across screen
    // pixels per milliSecond

    this.enemySprite.update(delta);
  }
  moveTo(x, y, deltaX, deltaY) {
    if (!deltaX || !deltaY || this.paused) return;
    /*if (
      Math.round(this.position.x) === x &&
      Math.round(this.position.y) === y
    ) {
      return;
    }*/
    if (this.position.x !== x) {
      this.speed.x = (x - this.position.x) * (deltaX / 1000);
    }
    if (this.position.y !== y) {
      this.speed.y = (y - this.position.y) * (deltaY / 1000);
    }
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    /*if (
      Math.abs(this.position.x - x) < 5 &&
      Math.abs(this.position.y - y) < 5
    ) {
      this.position.x = x;
      this.position.y = y;
      this.speed.x = 0;

      this.speed.y = 0;
    }*/
  }

  rotate(angle) {
    if (!this.paused) {
      this.angle += angle;
    }
  }
}
