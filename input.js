class InputHandler {
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

        window.addEventListener("keyup", e => {

            if (e.code === "KeyA" ||
                e.code === "KeyD" ||
                e.code === "KeyS" ||
                e.code === "KeyW" ||
                e.code === "KeyE" ||
                e.code === "KeyR"
            ) {
                this.keys.splice(this.keys.indexOf(e.code));
                down = false;
            }

        });
    }
}