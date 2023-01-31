class InputHandler {
    constructor() {

        let down = false;
        window.addEventListener("keydown", function (e) {
            if (down) return;

            //!ADD DOWN = TRUE TO EACH

                //CHARACTER LEFT
            if (e.code === "KeyA") {
                mapRight = true;

                //CHARACTER RIGHT
            } else if (e.code === "KeyD") {
                down = true;

                pikachu.setSpriteSheet(newWalking);
                pikachu.setAnimation(walking);
                mapLeft = true;

                //CHARACTER DOWN
            } else if (e.code === "KeyS") {

                pikachu.moveDown(5);
                //CHARACTER UP
                
            } else if (e.code === "KeyW") {

                down = true;
                pikachu.setSpriteSheet(newJump);
                pikachu.setAnimation(jump);

            } else if (e.code === "KeyE") {
                //CHARACTER WAVE
                pikachu.setAnimation(wave);
            } else if (e.code === "KeyR") {
                //CHARACTER ATTACK
                pikachu.setAnimation(thunderbolt);
                thunderAttack.startAttack();
            }
        });

        window.addEventListener("keyup", function (e) {
            down = false;
            if (pikachu.animation !== newIdleData) {
                pikachu.setAnimation(newIdleData);
                pikachu.setSpriteSheet(newIdle);
                pikachu.setAnimation(newIdleData);
            }

            if (e.code === "KeyR") {
                thunderAttack.endAttack();
            }

            if (e.code === "KeyD") {
                mapLeft = false;
            }
            if (e.code === "KeyA") {
                mapRight = false;
            }

        });
    }
}