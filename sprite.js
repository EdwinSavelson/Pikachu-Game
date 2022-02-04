class Sprite {
  //o is original data from sprite sheet
  constructor(sprite) {
    this.sprite = sprite;
  }

  draw(x, y, animation, frameNumber) {
    this.xPos = x;
    this.yPos = y;
    this.frame = frameNumber;
    this.data = animation.frame;

    ctx.drawImage(
      this.sprite,
      data.x,
      data.y,
      data.width,
      data.height,
      this.xPos,
      this.yPos,
      data.width,
      data.height
    );
  }
}
