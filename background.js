//=============================MAP SCROLL========================================//
class Background {
   
        //x is MapFrame Data in data.js file.  currently only 1 map frame. 
    drawMap(x, mX, mY) {
        ctx.drawImage(map, x.x, x.y, x.width, x.height, mX, mY, x.width, x.height);
    }
    mapScroll(mX) {

        //DRAW FIRST MAP
        this.drawMap(mapFrames[1], mapX, mapY);
        //Scrolling Right, create another map frame in front
        //IF MAP IS OFFSCREEN RESET MAP
        if (mX <= -240 || mX >= 240) {
            mapX = 0;
            this.drawMap(mapFrames[1], mapX, mapY);
        }
        if (mX < 0) {
            this.drawMap(mapFrames[1], mapX + 240, mapY);
        }
        //Scrolling left create another map frame behind
        if (mX > 0) {
            this.drawMap(mapFrames[1], mapX - 240, mapY);
        }
        //CONTROL HOW FAST MAP SCROLLS
        if (mapLeft) {
            mapX -= 10;
        }
        if (mapRight) {
            mapX += 10;
        }

    }
}