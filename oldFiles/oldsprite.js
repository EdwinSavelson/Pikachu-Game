class Sprite {
  //JUST ADDED STARTINGX/STARTING Y, CONSIDER CHANGING TO ANOTHER CLASS
  //MAKE PIKACHU CLASS AND OTHER CHARACTER EXTENDS CLASS
  constructor(sprite, startingX, startingY, defaultAnimation) {
    this.xPos = startingX;
    this.yPos = startingY;
    this.sprite = sprite;
    this.animation = defaultAnimation;
    this.currentFrame = 0;
    //for attacks and temporary things
    this.drawn = false;
    this.interval;

    this.data = this.animation[this.animation.frameLoop[this.currentFrame]];
    this.width = this.data.width;
    this.height = this.data.height;
  }

  draw() {

    this.data = this.animation[this.animation.frameLoop[this.currentFrame]];
   
    this.width = this.data.width;
    this.height = this.data.height;
    ctx.drawImage(
      this.sprite,
      this.data.x,
      this.data.y,
      this.data.width,
      this.data.height,
      this.xPos,
      this.yPos,
      this.width,
      this.height
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

  setSpriteSheet(sS){
    this.sprite = sS;
  }
  setAnimation(newAnimation) {
    if (this.animation !== newAnimation && this.currentFrame !== 0) {
      this.resetFrameNumber();
    }
    this.animation = newAnimation;
  }

  getFrameNumber() {
    return this.currentFrame;
  }

  resetFrameNumber() {
    this.currentFrame = 0;
  }

  moveRight(speed) {
    this.xPos = this.xPos += speed;
  }
  moveLeft(speed) {
    this.xPos = this.xPos -= speed;
  }
  moveUp(speed) {
    this.yPox = this.yPos -= speed;
    this.height = (this.height-(speed*10)/this.height);
    this.width = (this.width-(speed*10)/this.width);

  }
  moveDown(speed) {
    this.yPox = this.yPos += speed;
    this.height = (this.height+(speed*10)/this.height);
    this.width = (this.width+(speed*10)/this.width);
    
  }
}

class Attack extends Sprite {
  constructor(sprite, startingX, startingY, defaultAnimation) {
    super(sprite, startingX, startingY, defaultAnimation);
    //for attacks and temporary things
    this.drawn = false;
    this.interval;
  }
  startAttack() {
    if (this.drawn === false) {
      this.interval = setInterval(() => {
        this.draw();
      }, 100);
      this.drawn = true;
    }
  }
  endAttack() {
    clearInterval(this.interval);
    this.drawn = false;
  }
}
