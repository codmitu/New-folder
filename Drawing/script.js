const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const increaseBtn = document.querySelector('#increase');
const decreaseBtn = document.querySelector('#decrease');
const resetBtn = document.querySelector('#reset');
const sizeEl = document.querySelector('#size');
const colorBtn = document.querySelector('#color');
const bgColorBtn = document.querySelector('#bgColor');
const rubberBtn = document.querySelector('#rubber');
const redoBtn = document.querySelector('#redo');
const undoBtn = document.querySelector('#undo');
canvas.style.backgroundColor = "white";

canvas.width = 800;
canvas.height = 800;

let rubber = false;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.strokeStyle = "green";
ctx.lineWidth = 5;
let drawing = false;
let undo = [];
let points = [];
let redo = [];
let color;
let size;
let size2;
let mouse = { x: 0, y: 0 };
let previous = { x: 0, y: 0 };

canvas.addEventListener('mousedown', function (e) {
    drawing = true;
    size = ctx.lineWidth;
    color = ctx.strokeStyle;
    previous = { x: mouse.x, y: mouse.y };
    mouse = oMousePos(canvas, e);
    points = [];
    points.push({ x: mouse.x, y: mouse.y, size: size, color: color });
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
canvas.addEventListener('click', function (e) {
    ctx.beginPath();
    ctx.lineTo(mouse.x, mouse.y);
    ctx.stroke();

});


canvas.addEventListener('mouseup', function () {
    drawing = false;
    // Adding the path to the array or the paths
    undo.push(points);
});

redoBtn.addEventListener('click', Redo);

function Redo() {
    if (redo.length > 0) {
        undo.push(redo[redo.length - 1]);
        redo.splice(-1, 1);
        drawPaths();
        updateSize();
    }
}

undoBtn.addEventListener("click", Undo);

function Undo() {
    if (undo.length > 0) {
        // remove the last path from the paths array
        redo.push(undo[undo.length - 1]);
        undo.splice(-1, 1);
        // draw all the paths in the paths array
        drawPaths();
        updateSize();
    }
}

function drawPaths() {
    // delete everything
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // draw all the paths in the paths array
    undo.forEach(path => {
        // console.log(path)
        if (path === undefined) {
            return;
        }
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
resetBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    undo = [];
    redo = [];
    points = [];
})

updateSize();