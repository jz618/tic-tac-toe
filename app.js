/*
  create a variable that adds a X class
  create a variable that adds a O class
  declare winning conditions
  declare boolean for checking turn
  store all the cells here

  need initialize game function
    listen for a click and only listen for one click <- apply to call the cells
    set turn to X

  need to handle click
    place marker down
    check win
    check draw
    switch turns

  need to place a marker down
    check for who's turn
      need a new class to cell with add
      specify content with .innerHTML
  
  need to switch turns
  need to check win
  need to check for draw
*/

const xClass = 'X';
const oClass = 'O';
const winningCombos = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
];

const allCells = document.querySelectorAll('.cell');
console.log(allCells);
let isXTurn;

const startGame = () => {
  isXTurn = true;
  allCells.forEach(cell => 
    cell.addEventListener('click', handleClick, {once: true}
  ))
};

const handleClick = cell => {
  console.log('clicked');
}

startGame();

