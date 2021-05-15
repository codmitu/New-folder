const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const increaseBtn = document.querySelector('#increase');
const decreaseBtn = document.querySelector('#decrease');
const resetBtn = document.querySelector('#reset');
const sizeEl = document.querySelector('#size');
const colorBtn = document.querySelector('#color');
const bgColorBtn = document.querySelector('#bgColor');
const rubberBtn = document.querySelector('#rubber');
const undoBtn = document.querySelector('#undo');
canvas.style.backgroundColor = "white";

canvas.width = 800;
canvas.height = 800;

let rubber = false;
let size2;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.strokeStyle = "green";
ctx.lineWidth = 5;
let drawing = false;
let pathsry = [];
let points = [];
let color;
let size;
var mouse = { x: 0, y: 0 };
var previous = { x: 0, y: 0 };

canvas.addEventListener('mousedown', function (e) {
    drawing = true;
    size = ctx.lineWidth;
    color = ctx.strokeStyle;
    previous = { x: mouse.x, y: mouse.y };
    mouse = oMousePos(canvas, e);
    points = [];
    points.push({ x: mouse.x, y: mouse.y, size: size, color: color });
    console.log(points)
});

canvas.addEventListener('mousemove', function (e) {
    if (drawing) {
        previous = { x: mouse.x, y: mouse.y };
        mouse = oMousePos(canvas, e);
        // saving the points in the points array
        points.push({ x: mouse.x, y: mouse.y });
        // drawing a line from the previous point to the current point
        ctx.beginPath();
        ctx.moveTo(previous.x, previous.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke();
    }
});


canvas.addEventListener('mouseup', function () {
    drawing = false;
    // Adding the path to the array or the paths
    pathsry.push(points);
    console.log(pathsry)
});


undo.addEventListener("click", Undo);

function drawPaths() {
    // delete everything
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // draw all the paths in the paths array
    pathsry.forEach(path => {
        ctx.beginPath();
        ctx.moveTo(path[0].x, path[0].y);
        ctx.strokeStyle = path[0].color;
        ctx.lineWidth = path[0].size;
        for (let i = 0; i < path.length; i++) {
            ctx.lineTo(path[i].x, path[i].y);
        }
        ctx.stroke();
    })
    colorBtn.value = ctx.strokeStyle;
}

colorBtn.addEventListener('input', (e) => {
    document.body.style.backgroundColor = e.target.value + '33'; // 33 is #color transparency (20%);
    canvas.style.boxShadow = '0px 0px 20px ' + e.target.value;
    updateColor(e.target.value);
});
colorBtn.addEventListener('click', (e) => {
    updateColor(e.target.value);
});

function updateColor(e) {
    ctx.strokeStyle = e;
    if (rubber) {
        ctx.lineWidth = size2;
        rubber = false;
    }
    updateSize();
}

function Undo() {
    // remove the last path from the paths array
    pathsry.splice(-1, 1);
    // draw all the paths in the paths array
    drawPaths();
    updateSize();
}


// a function to detect the mouse position
function oMousePos(canvas, evt) {
    var ClientRect = canvas.getBoundingClientRect();
    return { //objeto
        x: Math.round(evt.clientX - ClientRect.left),
        y: Math.round(evt.clientY - ClientRect.top)
    }
}

increaseBtn.addEventListener('mousedown', () => {
    ctx.lineWidth++;
    if (ctx.lineWidth > 30) {
        ctx.lineWidth = 30;
    }
    updateSize();
});
decreaseBtn.addEventListener('click', () => {
    ctx.lineWidth--;
    if (ctx.lineWidth < 1) {
        ctx.lineWidth = 1;
    }
    updateSize();
});
rubberBtn.addEventListener('click', () => {
    size2 = ctx.lineWidth;
    ctx.strokeStyle = "white";
    rubber = true;
    ctx.lineWidth = 15;
});
bgColorBtn.addEventListener('input', (e) => {
    canvas.style.backgroundColor = e.target.value;
})
function updateSize() {
    sizeEl.innerText = ctx.lineWidth;
    colorBtn.style.width = ctx.lineWidth + 10 + "px";
    colorBtn.style.height = ctx.lineWidth + 10 + "px";
}

updateSize();














// const canvas = document.querySelector('canvas');
// const ctx = canvas.getContext('2d');

// const increaseBtn = document.querySelector('#increase');
// const decreaseBtn = document.querySelector('#decrease');
// const resetBtn = document.querySelector('#reset');
// const sizeEl = document.querySelector('#size');
// const colorBtn = document.querySelector('#color');
// const bgColorBtn = document.querySelector('#bgColor');
// const rubberBtn = document.querySelector('#rubber');
// canvas.style.backgroundColor = "white";

// canvas.width = 800;
// canvas.height = 800;


// let rubber = false;
// let size = 5;
// let size2;
// let x = undefined;
// let y = undefined;
// let color = "green";
// let isPressed = false;


// function updateSize() {
//     sizeEl.innerText = size;
//     colorBtn.style.width = size + 10 + "px";
//     colorBtn.style.height = size + 10 + "px";
// }
// canvas.addEventListener('mousedown', (e) => {
//     isPressed = true;
//     x = e.offsetX;
//     y = e.offsetY;
// })
// canvas.addEventListener('mouseup', (e) => {
//     isPressed = false;
//     x = undefined;
//     y = undefined;
// })

// canvas.addEventListener('mousemove', (e) => {
//     if (isPressed) {
//         const x2 = e.offsetX;
//         const y2 = e.offsetY;
//         drawCircle(x2, y2);
//         drawLine(x, y, x2, y2);
//         x = x2;
//         y = y2;

//     } else if (isPressed && rubber) {
//         drawCircle(5, 5);
//         drawLine(5, 5, 5, 5);
//     }
// });

// canvas.addEventListener('click', (e) => {
//     const x2 = e.offsetX;
//     const y2 = e.offsetY;
//     drawCircle(x2, y2);
//     drawLine(x, y, x2, y2);
//     x = x2;
//     y = y2;
// });



// function drawCircle(x, y) {
//     ctx.beginPath();
//     ctx.arc(x, y, size, 0, Math.PI * 2);
//     ctx.fillStyle = color;
//     ctx.fill();
// };
// function drawLine(x1, y1, x2, y2) {
//     ctx.beginPath();
//     ctx.moveTo(x1, y1);
//     ctx.lineTo(x2, y2);
//     ctx.strokeStyle = color;
//     ctx.lineWidth = size * 2;
//     ctx.stroke();
// };
// increaseBtn.addEventListener('mousedown', () => {
//     size++;
//     if (size > 30) {
//         size = 30;
//     }
//     updateSize();
// });
// decreaseBtn.addEventListener('click', () => {
//     size--;
//     if (size < 1) {
//         size = 1;
//     }
//     updateSize();
// });
// colorBtn.addEventListener('input', (e) => {
//     color = e.target.value;
//     color2 = color;
//     document.body.style.backgroundColor = e.target.value + '33'; // 33 is #color transparency (20%);
//     canvas.style.boxShadow = '0px 0px 20px ' + e.target.value;
//     if (rubber) {
//         size = size2;
//         rubber = false;
//     }
//     updateSize();
// });
// colorBtn.addEventListener('click', (e) => {
//     color = e.target.value;
//     if (rubber) {
//         size = size2;
//         rubber = false;
//     }
//     updateSize();
// })
// bgColorBtn.addEventListener('input', (e) => {
//     canvas.style.backgroundColor = e.target.value;
// })
// rubberBtn.addEventListener('click', () => {
//     size2 = size;
//     color = canvas.style.backgroundColor;
//     rubber = true;
//     size = 10;
// });
// resetBtn.addEventListener('click', () => {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
// });

// updateSize();
