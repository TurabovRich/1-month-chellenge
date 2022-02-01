let grid = document.querySelector('.table'),
    boxes = document.getElementsByClassName('box'),
    boxSide = document.querySelector('.num'),
    containerSide = '300px',
    btn = document.querySelector('.button')

grid.style.width = containerSide
let boxSize = boxSide.value

function Table() {
    for (let i = 0; i < boxSize * boxSize; i++) {
        createDiv()
    }
    Hover()

}

Table()

function createDiv() {
    let div = document.createElement('div')
    div.classList.add('box')
    div.style.height = grid.offsetWidth / boxSize + "px";
    div.style.width = grid.offsetWidth / boxSize + "px";
    grid.appendChild(div)

}


boxSide.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        if (e.target.value !== 16) {
            resetGrid(e.target.value);
        }
    }
})


function resetGrid(newSize) {
    grid.innerHTML = ''
    boxSize = newSize
    Table()
}

function Hover() {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('mouseover', () => {
            boxes[i].classList.add('black')
        })

    }
}


let input = document.querySelector('#input')

function submit() {
    console.log(input.value);
}