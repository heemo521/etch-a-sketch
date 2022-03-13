const MAIN_COLOR = `rgb(222, 226, 230)`;
const DARK_COLOR = `rgb(33, 37, 41)`;

//IS RANDOM_COLOR ENABLED
let isRandomColor = false;

//Set to color black only TEN-PERCENT of the time;
function setColorBlack() {
    const TEN_PERCENT = 10;
    const randomNumber = Math.floor(Math.random() * 101);

    //returns true 10 percent of the time when random number is less than or equal to 10
    return randomNumber <= TEN_PERCENT;
}

let count = 0;
let totalCount = 0;

//SELECTORS
const slider = document.querySelector('.grid-slider');
const sliderOutput = document.querySelector('.output');
const grid = document.querySelector('.grid');
const clearBtn = document.querySelector('.btn-clear');
const randomBtn = document.querySelector('.btn-randomRGB');

//CHANGE COLOR / DRAW
const changeColor = function (e) {
    let backgroundColor = e.target.style.backgroundColor;
    const isBlack = backgroundColor === DARK_COLOR;

    if (isRandomColor) {
        //Select black 10% of the time
        if (setColorBlack()) {
            e.target.style.backgroundColor = DARK_COLOR;
        } else {
            let r = Math.round(Math.random() * (255 - 1) + 1);
            let g = Math.round(Math.random() * (255 - 1) + 1);
            let b = Math.round(Math.random() * (255 - 1) + 1);
            e.target.style.backgroundColor = `rgb(${r},${g},${b})`;
        }
    } else {
        e.target.style.backgroundColor = DARK_COLOR;
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

//RANDOM RGB
randomBtn.addEventListener('click', () => {
    isRandomColor = !isRandomColor;
    if (isRandomColor) {
        randomBtn.textContent = 'Back in Black!';
    } else {
        randomBtn.textContent = 'Random Color';
    }
});
