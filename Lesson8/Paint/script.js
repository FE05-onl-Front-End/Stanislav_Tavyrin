let colors = ['red', 'blue', 'aqua', 'green', 'orange', 'purple', 'yellow', 'SteelBlue', 'lime', 'maroon'];
let palette = document.getElementById('palette');
let selectFormActive = document.getElementById('select');
let canvas = document.querySelectorAll('.canvas-img');
let canvasImages = document.querySelectorAll('.svg');


document.body.onload = addColorElement;

function addColorElement() {

    for (let i = 0; i < colors.length; i++) {
        let newColor = document.createElement('div');
        newColor.style.backgroundColor = colors[i];
        newColor.style.width = '100%';
        newColor.style.height = '100%';
        newColor.style.borderRadius = '4px';
        newColor.style.border = '1px solid #000';
        palette.appendChild(newColor);
    }
}

function selectColor(event) {
    canvasImages.forEach(({ style }) => {
        style.fill = `${event.target.style.backgroundColor}`;
        
    })
}

palette.addEventListener('click', selectColor);

function resetColor() {
    canvasImages.forEach(({ style }) => {
        style.fill = '#fff';
    })
}

function showFigure() {
    canvas.forEach(({ id }, index) => {
        resetColor();
        canvas[index].style.display = 'none';
        id == selectFormActive.value ? canvas[index].style.display = 'block' : false;
        return id;
    })
}