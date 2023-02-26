# Pikachu Game*(In Progress)*
![ezgif com-video-to-gif](https://user-images.githubusercontent.com/20752840/221386760-f6a723be-cced-43a5-af52-a660c87d2c1e.gif)
## About:
Written with Vanilla JavaScript, using ES6 Class Syntax.
I started this project for fun then figured it would be a great project to demonstrate knowledge of **OOP Principles**. 
## Goal:


# Process
Generally, the game is seperated into:
- Driver(index.js)
- Input Handler Class(input.js)
- Sprite Class(sprite.js)
- Map/Background Class(background.js)
## Sprite Handling
Finding an effcient way of handling the sprite rendering was a challenge.
I've been using sprite sheets from <a href = "https://www.spriters-resource.com/">The Spriter's Resource</a>. The sheets do not come with data(x,y coordinates for each sprites) and because the html canvas api draw image accepts the x,y coordinates of the part of the image to render.
```
drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
```
I use <a href = "https://www.aseprite.org/"/>Aesprite</a> to cut the sheets into sprites.  Aesprite outputs a **json data** with the coordinates for each sprite so I pass this data to the **Sprite Class** which gets the proper coordinates in the sheet for each frame.
```
EXAMPLE AESPRITE JSON OUTPUT
  "default": {
    "sprite": "src/sprites/fatidle.png",
    "frames": [
      {
        "filename": "Sprite-0015 0.",
        "frame": { "x": 0, "y": 0, "w": 37, "h": 38 },
        "rotated": false,
        "trimmed": false,
        "spriteSourceSize": { "x": 0, "y": 0, "w": 37, "h": 38 },
        "sourceSize": { "w": 37, "h": 38 },
        "duration": 100
      },
      {
        "filename": "Sprite-0015 1.",
        "frame": { "x": 37, "y": 0, "w": 37, "h": 38 },
        "rotated": false,
        "trimmed": false,
        "spriteSourceSize": { "x": 0, "y": 0, "w": 37, "h": 38 },
        "sourceSize": { "w": 37, "h": 38 },
        "duration": 100
      }
    ]
  }
  ```
  ```
  SPRITE CLASS CONSTRUCTOR
  constructor(spriteData, startingX, startingY) {
        this.spriteData = spriteData;
        this.xPos = startingX;
        this.yPos = startingY;
        this.sprite = new Image();
        this.sprite.src = spriteData.default.sprite;
        this.animation = spriteData.default;
        this.currentFrame = 0;
        //for attacks and temporary things
        this.drawn = false;
        this.interval;
        this.data = this.animation.frames[this.currentFrame].frame;
        this.width = this.data.w;
        this.height = this.data.h;
    }
  ```
  I wrote the **Sprite Class** so that it can be used for items, npc's, the scrolling background and anything else that can be animated. The **Player Class** Extends the **Sprite Class** and gives the player the functionality that the other sprites do not need. 
 
Before I figured out a solution for getting x,y coordinates efficiently, I had animations set up for attacks and waving but now I need to re-cut those sprite sheets to get the json data. Thankfully, the process of using Aesprite is SO much faster than my process of manually counting pixels. 
  
  ## Player Inputs
  Player movement is a typical WASD setup.
  
 ![ezgif com-video-to-gif (1)](https://user-images.githubusercontent.com/20752840/221386866-ab877917-6591-4e1f-a882-7891f6372187.gif)

Initially, I relied on using the keydown event repeatedly to trigger movement. The issue with that is the keyboards delay before the keydown repeats, as well as the default speed at which the event happens. This also didn't handle multiple keypresses at once.
I resolved this by using an array to store the keys that are being pressed and removing them when they are lifted.
Originally, the function was standard function syntax and worked once but not on repeated calls.  The problem was resolved by switching to an **arrow function** because the "this" keyword inside the standard function was creating a new "this.keys" scoped inside the event listener rather than deferring to the broader scoped "this.keys" of the instance. 
```
constructor() {
        this.keys = [];
        let down = false;
        window.addEventListener("keydown", e => {
            if (down === true) return;
            if ((e.code === "KeyA" ||
                e.code === "KeyD" ||
                e.code === "KeyS" ||
                e.code === "KeyW" ||
                e.code === "KeyE" ||
                e.code === "KeyR"
            )) {
                this.keys.push(e.code);
                down = true;
            };

        });
```