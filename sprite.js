class Sprite {

  constructor(sprite, defaultAnimation) {
    this.sprite = sprite;
    this.animation = defaultAnimation;
    this.currentFrame = 0;
    //for attacks and temporary things
    this.drawn = false;
    this.interval;
  }

  draw(x, y) {
    this.xPos = x;
    this.yPos = y;
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
    this.currentFrame = this.advanceFrame(this.currentFrame);
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

  setAnimation(newAnimation) {
    if(this.animation !== newAnimation  && this.currentFrame !== 0){
     this.resetFrameNumber();
    }
    this.animation = newAnimation;
  }

  getFrameNumber() {
    return this.currentFrame;
  }

  resetFrameNumber(){
    this.currentFrame = 0;
  }
}
