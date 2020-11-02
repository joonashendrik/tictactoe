//let is gameOver = false
let gameboard = [
    ['-', '-', '-',],
    ['-', '-', '-',],
    ['-', '-', '-',]
];

const cellDivs = document.querySelectorAll('.cell');

cellDivs.forEach(element => {
    element.addEventListener('click', event => {
        const selectedCell = event.currentTarget
        const selectedRow = selectedCell.dataset.row
        const selectedCol = selectedCell.dataset.col

        if (gameboard[selectedRow][selectedCol] == '-') {
            selectedCell.innerText = 'O'
            gameboard[selectedRow][selectedCol] = 'O'
            console.log(isGameOver())
        }
    })
})

function getEmptyCell() {
    x = Math.floor(Math.random() * 3 )
    y = Math.floor(Math.random() * 3 )
    do {
        x = 0 - 2
        y = 0 - 2
    } while (gameboard[x][y]);
        return[x, y]

}

function isGameOver () {

    for ( let i = 0; i < 3; i++) {

        if ( gameboard[0][0] == gameboard[0][1] && gameboard[0][1] == gameboard[0][2] && gameboard[0][0] != '-') {
            return true
        }
        return false
    }
}