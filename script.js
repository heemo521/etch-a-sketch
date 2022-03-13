const MAIN_COLOR = `rgb(222, 226, 230)`;
let isRandomColor = false;

//SELECTORS
const slider = document.querySelector('.grid-slider');
const sliderOutput = document.querySelector('.output');
const grid = document.querySelector('.grid');
const clearBtn = document.querySelector('.btn-clear');
const randomBtn = document.querySelector('.btn-randomRGB');

//CHANGE COLOR
const changeColor = function (e) {
    let backgroundColor = e.target.style.backgroundColor;
    if (backgroundColor === MAIN_COLOR) {
        if (isRandomColor === false) {
            e.target.style.backgroundColor = '#212529';
        } else {
            let r = Math.round(Math.random() * (255 - 1) + 1);
            let g = Math.round(Math.random() * (255 - 1) + 1);
            let b = Math.round(Math.random() * (255 - 1) + 1);
            e.target.style.backgroundColor = `rgb(${r},${g},${b})`;
        }
    }
};

//CREATE AND DISPLAY GRID
const showGridVal = function (val) {
    sliderOutput.innerHTML = `${val} x ${val}`;
};

const changeGrid = function (val) {
    createGridDiv(val);
    grid.style.gridTemplateColumns = '1fr '.repeat(val).trimEnd();
    grid.style.gridTemplateRows = '1fr '.repeat(val).trimEnd();
};

const createGridDiv = function (val) {
    //MUST CLEAR GRID BEFORE CREATING NEW GRID TO CREATE ONLY THE SPECIFIED NUMBER OF DIVS
    grid.innerHTML = '';
    for (let i = 1; i <= val ** 2; i++) {
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.style.backgroundColor = MAIN_COLOR;
        pixel.addEventListener('mouseenter', changeColor);
        // gridPixels.push(pixel);
        grid.appendChild(pixel);
    }
};

const displayGrid = function () {
    let gridVal = this.value;
    showGridVal(gridVal);
    changeGrid(gridVal);
};
//DISPLAY GRID AT START
displayGrid.call(slider);

//DISPLAY GRID BASED ON THE INPUT
slider.addEventListener('input', displayGrid);

//CLEAR
const clearGrid = function () {
    const gridSelector = document.querySelectorAll('.pixel');
    console.dir('clear');
    // gridSelector.forEach((pixel) => pixel.style.backgroundColor === MAIN_COLOR);
    gridSelector.forEach((pixel) => {
        pixel.style.backgroundColor = MAIN_COLOR;
    });
};

clearBtn.addEventListener('click', clearGrid);
// clearBtn.addEventListener('click', () => {
//     console.log('clear');
// });

//RANDOM RGB
randomBtn.addEventListener('click', () => {
    isRandomColor = !isRandomColor;
});
