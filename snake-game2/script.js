const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');
const scale = 20;

const rows = canvas.height / scale;
const cols = canvas.width / scale;

const snakeXCoord = canvas.width / 2 - scale / 2;
const snakeXYCoord = canvas.height / 2 - scale / 2;

let snake;

(function setup() {
    snake = new Snake(snakeXCoord, snakeXYCoord, 0, 0, 0, []);
    fruit = new Fruit();

    fruit.pickLocation();

    window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        fruit.draw();
        snake.update();
        snake.draw();

        if (snake.eat(fruit)) {
            fruit.pickLocation();
        }
    }, 300)
}());

window.addEventListener('keydown', e => {
    const direction = e.key.replace('Arrow', '');
    snake.changeDirection(direction);
})


