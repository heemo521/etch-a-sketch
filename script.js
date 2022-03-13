//SLIDER-OUTPUT
const slider = document.querySelector('.grid-slider');
const sliderOutput = document.querySelector('.output');

//GRID SELECTOR
const grid = document.querySelector('.grid');

const showGridVal = function (val) {
    sliderOutput.innerHTML = `${val} x ${val}`;
};

const changeGrid = function (val) {
    createGridDiv(val);
    console.log('1fr '.repeat(val).trimEnd());
    grid.style.gridTemplateColumns = '1fr '.repeat(val).trimEnd();
    grid.style.gridTemplateRows = '1fr '.repeat(val).trimEnd();
};

const createGridDiv = function (val) {
    //MUST CLEAR GRID BEFORE CREATING NEW GRID
    grid.innerHTML = '';
    for (let i = 1; i <= val ** 2; i++) {
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        // pixel.textContent = '0';
        grid.appendChild(pixel);
    }
    console.log(grid.children.length);
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
