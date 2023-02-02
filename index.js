const ctx = document.getElementById("canvas1").getContext("2d");

const screen = {
  width: 240,
  height: 240,
};

// IMAGE FILES
const map = new Image();
map.src = "src/sprites/mapsheet.png";
// const newIdle = new Image();
// newIdle.src = "src/sprites/fatidle.png";
// const newWalking = new Image();
// newWalking.src = "src/sprites/walking.png";
// const newJump = new Image();
// newJump.src = "src/sprites/jump.png";
// const psyduckpic = new Image();
// psyduckpic.src = "src/sprites/PSYDUCK.png";

var mapLeft = false;
var mapRight = false;

function resetFrameLoop() {
  currentFrameIndex = 0;
}

//----------------INITIALIZE GAME-------------------//
let mapX = 0;
let mapY = 0;

let input = new InputHandler();
let background = new Background();

let pikachu = new Player(pikachuData, 45, 160);
let psyduck = new Sprite(psyduckData, 120, 150);

var fps, fpsInterval, startTime, now, then, elapsed;
function startAnimating(fps) {
  fpsInterval = 1000 / fps;
  then = Date.now();
  startTime = then;
  run();
}

function run() {
  window.requestAnimationFrame(run);
  pikachu.update(input);

  now = Date.now();
  elapsed = now - then;
  // if enough time has elapsed, draw the next frame
  if (elapsed > fpsInterval) {
    then = now - (elapsed % fpsInterval);

    ctx.clearRect(0, 0, 200, 200); // clear canvas
    background.mapScroll(mapX);
    pikachu.draw();
    psyduck.draw();
    
  }
}
startAnimating(10);
