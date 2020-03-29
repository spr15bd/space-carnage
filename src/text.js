import Sprite from "./sprite.js";
export default class Text {
  constructor(xPos, yPos, width, height, textLine, imageSrc) {
    this.sourceWidth = 5;
    this.sourceHeight = 10;
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
      this.textLine * 12,
      0,
      this.pivotPoint,
      this.width,
      this.height,
      1
    );
    //this.textSprite =
    this.ticks = 0;
  }

  update(delta) {
    this.ticks++;
    if (this.ticks > 10 && this.ticks <= 20) {
      this.textSprite.sourceWidth = 11;
      this.textSprite.width = 22;
      //this.position.x = 176;
    } else if (this.ticks > 20 && this.ticks <= 30) {
      this.textSprite.sourceWidth = 17;
      this.textSprite.width = 34;
      //this.position.x = 181;
    } else if (this.ticks > 30 && this.ticks <= 40) {
      this.textSprite.sourceWidth = 22;
      this.textSprite.width = 44;
      //this.position.x = 185;
    } else if (this.ticks > 40 && this.ticks <= 50) {
      this.textSprite.sourceWidth = 26;
      this.textSprite.width = 52;
      //this.position.x = 189;
    } else if (this.ticks > 50 && this.ticks <= 60) {
      this.textSprite.sourceWidth = 33;
      this.textSprite.width = 66;
      //this.position.x = 196;
    } else if (this.ticks > 60 && this.ticks <= 70) {
      this.textSprite.sourceWidth = 35;
      this.textSprite.width = 70;
      //this.position.x = 196;
    } else if (this.ticks > 70 && this.ticks <= 80) {
      this.textSprite.sourceWidth = 41;
      this.textSprite.width = 82;
      //this.position.x = 196;
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
