class Fruit {
    constructor() {
        this.x;
        this.y;
    }

    pickLocation() {
        this.x = (Math.floor(Math.random() * rows - 1) + 1) * scale;
        this.y = (Math.floor(Math.random() * cols - 1) + 1) * scale;
    }

    draw() {
        ctx.fillStyle = "#ff0000";
        ctx.fillRect(this.x, this.y, scale, scale);
    }
}