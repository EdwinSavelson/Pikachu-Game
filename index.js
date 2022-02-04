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

const idle = {
  1: { x: 27, y: 17, width: 36, height: 40 },
  2: { x: 70, y: 16, width: 30, height: 40 },
  3: { x: 110, y: 16, width: 30, height: 40 },
  4: { x: 150, y: 16, width: 30, height: 40 },
  5: { x: 186, y: 16, width: 58, height: 40 },
  frameLoop: [1, 1, 1, 1, 2, 3, 2, 3, 2, 3, 3, 3],
};
const running = {
  1: { x: 30, y: 140, width: 50, height: 30 },
  2: { x: 89, y: 144, width: 51, height: 23 },
  3: { x: 149, y: 142, width: 52, height: 27 },
  4: { x: 209, y: 144, width: 51, height: 24 },
  frameLoop: [1, 2, 3, 2],
};
const wave = {
  1: { x: 27, y: 561, width: 46, height: 39 },
  2: { x: 77, y: 562, width: 46, height: 38 },
  3: { x: 126, y: 562, width: 47, height: 38 },
  4: { x: 176, y: 561, width: 47, height: 39 },
  frameLoop: [1, 2, 1, 2, 1, 2, 3, 4],
};
const thunderbolt = {
  1: { x: 26, y: 500, width: 38, height: 42 },
  2: { x: 67, y: 500, width: 35, height: 42 },
  3: { x: 106, y: 501, width: 38, height: 40 },
  frameLoop: [1, 1, 2, 2, 3, 3, 2, 2],
};
// LIGHTENING FOR THUNDERBOLD
const lightening = {
  1: { x: 353, y: 248, width: 35, height: 211 },
  2: { x: 272, y: 250, width: 35, height: 211 },
  3: { x: 372, y: 20, width: 46, height: 212 },
  4: { x: 329, y: 15, width: 32, height: 221 },
  5: { x: 289, y: 15, width: 32, height: 221 },
  frameLoop: [1,2,3,4,5],
};

const mapFrames = {
  //40px of wiggleroom
  1: { x: 20, y: 346, width: 240, height: 265 },
};

function drawMap(x, mX, mY) {
  ctx.drawImage(map, x.x, x.y, x.width, x.height, mX, mY, x.width, x.height);
}

//TODO
//DELETE DUPLICATE CODE WITH OR STATMENTS IN EACH IF
function mapScroll(mX) {
  //Scrolling Right, create another map frame in front
  if (mX <= -280 || mX >= 240) {
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

//renders given sprite
function drawCharacter(x) {
  ctx.drawImage(
    sprite,
    x.x,
    x.y,
    x.width,
    x.height,
    screen.width / 2 - x.width,
    140,
    x.width,
    x.height
  );
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
    mapX -= 20;
    currentAnimation = running;
  } else if (e.code === "KeyS") {
  } else if (e.code === "KeyW") {
  } else if (e.code === "KeyE") {
    currentAnimation = wave;
  } else if (e.code === "KeyR") {
    currentAnimation = thunderbolt;
    drawAttack(lightening[handleAttack(lightening.frameLoop)]);
  }
});

window.addEventListener("keyup", function (e) {
  if (currentAnimation !== idle) {
    currentAnimation = idle;
    currentFrameIndex = 0;
  } else {
    return;
  }
});

//REWRITE FRAME HANDLING
let attackFrameIndex = 0;
function handleAttack(animation) {
  if (attackFrameIndex < animation.length - 1) {
    attackFrameIndex++;
    return animation[attackFrameIndex];
  } else if (attackFrameIndex >= animation.length - 1) {
    attackFrameIndex = 0;
    return animation[attackFrameIndex];
  }
}

//REWRITE DRAW FUNCITOINS
function drawAttack(x) {
  ctx.drawImage(
    sprite,
    x.x,
    x.y,
    x.width,
    x.height,
    screen.width / 2 - 40,
    -20,
    x.width,
    x.height
  );
}

let currentFrameIndex = 0;
//takes in an animation style and returns a frame number
function handleFrameState(animation) {
  if (currentFrameIndex < animation.length - 1) {
    currentFrameIndex++;
    return animation[currentFrameIndex];
  } else if (currentFrameIndex >= animation.length - 1) {
    currentFrameIndex = 0;
    return animation[currentFrameIndex];
  }
}

let mapX = 0;
let mapY = 0;
let currentAnimation = idle;
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
    drawCharacter(
      currentAnimation[handleFrameState(currentAnimation.frameLoop)]
    );
  }
}

startAnimating(5);
