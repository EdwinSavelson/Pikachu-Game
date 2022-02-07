// ANIMATION SPRITESHEET DATA

//PIKACHU ANIMATIONS
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


//ATTACK SPRITE
// LIGHTENING FOR THUNDERBOLT
const lightening = {
  1: { x: 353, y: 248, width: 35, height: 211 },
  2: { x: 272, y: 250, width: 35, height: 211 },
  3: { x: 372, y: 20, width: 46, height: 212 },
  4: { x: 329, y: 15, width: 32, height: 221 },
  5: { x: 289, y: 15, width: 32, height: 221 },
  frameLoop: [1, 2, 3, 4, 5],
};




//BACKGROUND IMAGES
const mapFrames = {
  //40px of wiggleroom
  1: { x: 20, y: 346, width: 240, height: 265 },
};
