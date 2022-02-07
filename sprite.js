class Sprite {

  constructor(sprite, defaultAnimation) {
    this.sprite = sprite;
    this.animation = defaultAnimation;
    this.currentFrame = 0;
  }

  draw(x, y, frameNumber) {
    this.xPos = x;
    this.yPos = y;
    this.currentFrame = frameNumber;
    this.data = this.animation[this.animation.frameLoop[this.currentFrame]];
    ctx.drawImage(
      this.sprite,
      this.data.x,
      this.data.y,
      this.data.width,
      this.data.height,
      this.xPos,
      this.yPos,
      this.data.width,
      this.data.height
    );
    this.currentFrame = this.advanceFrame(frameNumber);
  }

  //cF = current frame
  advanceFrame(cF) {
    if (cF < this.animation.frameLoop.length - 1) {
      cF++;
      return cF;
    } else if (cF >= this.animation.frameLoop.length - 1) {
      cF = 0;
      return cF;
    }
  }

  setAnimation(animation) {
    this.animation = animation;
  }

  getFrameNumber() {
    return this.currentFrame;
  }
}
