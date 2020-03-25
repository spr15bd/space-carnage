import Sprite from "./sprite.js";
export default class Text {
  constructor(xPos, yPos, width, height, imageSrc, text) {
    this.sourceWidth = 6;
    this.sourceHeight = 12;
    this.width = width;
    this.height = height;

    this.position = {
      x: xPos,
      y: yPos
    };
    this.image = new Image();
    this.image.src = imageSrc;
    this.text = text;
    this.currentIndex = 0;
    this.textSprite = new Sprite(
      this.image,
      this.sourceWidth,
      this.sourceHeight,
      12,
      0,
      //this.position,
      this.width,
      this.height,
      1
    );
    this.ticks = 0;
  }

  update(delta) {
    this.ticks++;
    if (this.ticks > 60 && this.ticks < 120) {
      //console.log("update");
      this.position.x += 10;
      this.textSprite = new Sprite(
        this.image,
        this.sourceWidth,
        this.sourceHeight,
        24,
        0,
        //this.position,
        this.width,
        this.height,
        1
      );
    }
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(
      this.position.x + this.width / 2,
      this.position.y + this.height / 2
    );

    ctx.rotate((this.angle * Math.PI) / 180);
    this.textSprite.draw(ctx);

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
