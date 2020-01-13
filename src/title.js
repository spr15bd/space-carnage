import Sprite from "./sprite.js";
export default class Title {
  constructor(xPos, yPos, width, height, imageSrc) {
    this.sourceWidth = 400;
    this.sourceHeight = 192;
    this.width = width;
    this.height = height;

    this.position = {
      x: xPos,
      y: yPos
    };
    this.image = new Image();
    this.image.src = imageSrc;
    this.titleSprite = new Sprite(
      this.image,
      this.sourceWidth,
      this.sourceHeight,
      0,
      0,
      this.position,
      this.width,
      this.height,
      1
    );
  }
}
