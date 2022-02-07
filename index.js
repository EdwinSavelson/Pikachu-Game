const ctx = document.getElementById("canvas1").getContext("2d");

const screen = {
  width: 200,
  height: 200,
};

//STOPPED HERE
//LOADED ASCYNC CHANGE FOR DEPLOYMENT CHECK BOOKMARKS IN GAME DEV
const sprite = new Image();
sprite.src = "src/sprites/pikachu-sprites.png";
const map = new Image();
map.src = "src/sprites/mapsheet.png";

//x is MapFrame Data
function drawMap(x, mX, mY) {
  ctx.drawImage(map, x.x, x.y, x.width, x.height, mX, mY, x.width, x.height);
}

function mapScroll(mX) {
  //Scrolling Right, create another map frame in front
  if (mX <= -240 || mX >= 240) {
    mapX = 0;
    drawMap(mapFrames[1], mapX, mapY);
  }
  if (mX < -20) {
    drawMap(mapFrames[1], mapX + 240, mapY);
  }
  //Scrolling left create another map frame behind
  if (mX > 0) {
    drawMap(mapFrames[1], mapX - 240, mapY);
  }
}

var fps, fpsInterval, startTime, now, then, elapsed;

function startAnimating(fps) {
  fpsInterval = 1000 / fps;
  then = Date.now();
  startTime = then;
  run();
}

window.addEventListener("keydown", function (e) {
  if (e.code === "KeyA") {
    //CHARACTER LEFT

    mapX += 20;
  } else if (e.code === "KeyD") {
    //CHARACTER RIGHT

    pikachu.setAnimation(running);
    mapX -= 2;

  } else if (e.code === "KeyS") {

  } else if (e.code === "KeyW") {

  } else if (e.code === "KeyE") {
    //CHARACTER WAVE
    pikachu.setAnimation(wave);

  } else if (e.code === "KeyR") {
    thunderAttack.draw(screen.width / 2 - 40);
    console.log("fuck");
    //   -20, lightening);
    // drawAttack(lightening[handleAttack(lightening.frameLoop)]);
  }
});

window.addEventListener("keyup", function (e) {
  if (pikachu.animation !== idle) {
    pikachu.setAnimation(idle);
  } else {
    return;
  }
});

// //REWRITE FRAME HANDLING
// let attackFrameIndex = 0;
// function handleAttack(animation) {
//   if (attackFrameIndex < animation.length - 1) {
//     attackFrameIndex++;
//     return animation[attackFrameIndex];
//   } else if (attackFrameIndex >= animation.length - 1) {
//     attackFrameIndex = 0;
//     return animation[attackFrameIndex];
//   }
// }

// let currentFrameIndex = 0;

function resetFrameLoop() {
  currentFrameIndex = 0;
}

let mapX = 0;
let mapY = 0;
let currentAnimation = idle;

let pikachu = new Sprite(sprite, idle);
let thunderAttack = new Sprite(sprite, lightening);

function run() {
  window.requestAnimationFrame(run);

  now = Date.now();
  elapsed = now - then;

  // if enough time has elapsed, draw the next frame

  if (elapsed > fpsInterval) {
    then = now - (elapsed % fpsInterval);

    ctx.clearRect(0, 0, 200, 200); // clear canvas
    drawMap(mapFrames[1], mapX, mapY);
    mapScroll(mapX);

    pikachu.draw(75, 150);

  }
}

startAnimating(5);
