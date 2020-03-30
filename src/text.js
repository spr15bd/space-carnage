import Sprite from "./sprite.js";
import Sound from "./sound";
export default class Text {
  constructor(xPos, yPos, width, height, textLine, imageSrc) {
    this.sourceWidth = 0;
    this.sourceHeight = 11;
    this.width = width;
    this.height = height;
    this.textLine = textLine;
    this.position = {
      x: xPos + this.width / 2,
      y: yPos
    };
    this.pivotPoint = {
      x: 0,
      y: 0
    };
    this.image = new Image();
    this.image.src = imageSrc;

    this.currentIndex = 0;
    this.textSprite = new Sprite(
      this.image,
      this.sourceWidth,
      this.sourceHeight,
      0,
      this.textLine * 12,
      this.pivotPoint,
      this.width,
      this.height,
      1
    );
    this.textSound = new Sound("/sounds/textSound.m4a", 4, 0.15);
    //this.textSound.play();
    this.ticks = 0;
    this.completed = false;
  }

  update(delta) {
    this.ticks++;
    if (this.ticks === 10) {
      this.textSprite.sourceWidth = 5;
      this.textSprite.width = 10;
      //this.textSound.play();
    } else if (this.ticks === 20) {
      this.textSprite.sourceWidth = 11;
      this.textSprite.width = 22;
      //this.textSound.play();
    } else if (this.ticks === 30) {
      this.textSprite.sourceWidth = 17;
      this.textSprite.width = 34;
      //this.textSound.play();
    } else if (this.ticks === 40) {
      this.textSprite.sourceWidth = 22;
      this.textSprite.width = 44;
      //this.textSound.play();
    } else if (this.ticks === 50) {
      this.textSprite.sourceWidth = 26;
      this.textSprite.width = 52;
      //this.textSound.play();
    } else if (this.ticks === 60) {
      this.textSprite.sourceWidth = 33;
      this.textSprite.width = 66;
      //this.textSound.play();
    } else if (this.ticks === 70) {
      this.textSprite.sourceWidth = 35;
      this.textSprite.width = 70;
      //this.textSound.play();
    } else if (this.ticks === 80) {
      this.textSprite.sourceWidth = 41;
      this.textSprite.width = 82;
      //this.textSound.play();
    } else if (this.ticks === 90) {
      this.textSprite.sourceWidth = 43;
      this.textSprite.width = 86;
      //this.textSound.play();
    } else if (this.ticks === 100) {
      this.textSprite.sourceWidth = 50;
      this.textSprite.width = 100;
      //this.textSound.play();
    } else if (this.ticks === 110) {
      this.textSprite.sourceWidth = 57;
      this.textSprite.width = 114;
      //this.textSound.play();
    } else if (this.ticks === 120) {
      this.textSprite.sourceWidth = 65;
      this.textSprite.width = 130;
      //this.textSound.play();
    } else if (this.ticks === 130) {
      this.textSprite.sourceWidth = 71;
      this.textSprite.width = 142;
      //this.textSound.play();
    } else if (this.ticks === 140) {
      this.textSprite.sourceWidth = 78;
      this.textSprite.width = 156;
      //this.textSound.play();
    } else if (this.ticks === 150) {
      this.textSprite.sourceWidth = 83;
      this.textSprite.width = 166;
      //this.textSound.play();
    } else if (this.ticks === 160) {
      this.textSprite.sourceWidth = 88;
      this.textSprite.width = 176;
      //this.textSound.play();
    } else if (this.ticks === 170) {
      this.textSprite.sourceWidth = 93;
      this.textSprite.width = 186;
      //this.textSound.play();
    } else if (this.ticks === 180) {
      this.textSprite.sourceWidth = 99;
      this.textSprite.width = 198;
      this.completed = true;
    } else if (this.ticks === 190) {
      this.textSprite.sourceWidth = 101;
      this.textSprite.width = 202;
      this.completed = true;
    }
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(
      this.position.x + this.width / 2,
      this.position.y + this.height / 2
    );

    ctx.rotate((this.angle * Math.PI) / 180);
    //this.position.x = 230;

    this.textSprite.draw(ctx);
    //this.position.x += 10;

    //this.position.x = 230;
    //this.textSprite.draw(ctx);

    ctx.restore();
  }

  /*getCurrentSymbol(symbol) {
    switch (symbol) {
      case "a": {
        this.position.x = 0;
        this.position.y = 0;
      }
    }
  }*/
}
