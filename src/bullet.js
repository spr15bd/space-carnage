import Sprite from "./sprite,js";
export default class Bullet {
  constructor(xPos, yPos, bulletType, imageSrc) {
    // declare bullet properties
    this.position = {
      x: xPos,
      y: yPos
    };
    this.speed = {
      x: 0,
      y: 10
    };
  }
}
