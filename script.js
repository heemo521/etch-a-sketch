//SLIDER-OUTPUT
const slider = document.querySelector('.grid-slider');
const sliderOutput = document.querySelector('.output');
// sliderOutput.innerHTML = `${slider.value} x ${slider.value}`;

//DYNAMIC GRID BASED ON THE INPUT VALUE
//create divs using css-grid
//GRID SELECTOR
const grid = document.querySelector('.grid');

const showGridVal = function (val) {
    sliderOutput.innerHTML = `${val} x ${val}`;
};

//FUNCTION TO CHANGE GRID
const changeGrid = function (val) {
    createGridDiv(val);
    grid.style.gridTemplateColumns = `repeat(${val}, '1fr')`;
    grid.style.gridTemplateRows = `repeat(${val}, '1fr')`;
};

const createGridDiv = function (val) {
    //MUST CLEAR GRID BEFORE CREATING NEW GRID
    grid.innerHTML = '';
    for (let i = 1; i <= val; i++) {
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        // gridDiv.push(pixel);
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
