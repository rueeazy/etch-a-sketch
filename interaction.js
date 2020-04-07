const container = document.querySelector('.container')
      
function makeGrid(size) {
      container.style.setProperty('--grid-rows', size);
      container.style.setProperty('--grid-cols', size);

      let squares = size*size;

      for (let i = 0; i < squares; i++) {
          let gridItem = document.createElement('div');
          container.appendChild(gridItem).className = 'gridItem';
      };
};

function clearGrid() {
    let divs = document.querySelectorAll('.gridItem')
    divs.forEach(div => {
        container.removeChild(div);
    });
}

function reset() {
    let size = prompt('How many squares would you like?');
    clearGrid();
    makeGrid(size);
    changeColor();
}

function rbg() {
    let divs = document.querySelectorAll('.gridItem')
    divs.forEach(div => {
        div.addEventListener('mouseover', function(e) {
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            this.style.backgroundColor = '#' + randomColor;
        });
    });
}

function changeColor() {
    let divs = document.querySelectorAll('.gridItem')
    divs.forEach(div => {
        div.addEventListener('mouseover', function(e) {
            div.classList.add('changeColor');
    });
});
}

makeGrid(32);
changeColor();