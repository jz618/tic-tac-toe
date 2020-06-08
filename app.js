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
      need a new class to cell with add
      specify content with .innerHTML
  
  need to switch turns
  need to check win
  need to check for draw
*/

const xClass = 'X';
const oClass = 'O';
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5 ,8],
  [0, 4, 8],
  [2, 4, 6]
];

const allCells = document.querySelectorAll('.cell');
let isXTurn;

const startGame = () => {
  isXTurn = true;
  allCells.forEach(cell => 
    cell.addEventListener('click', handleClick, {once: true}
  ))
};

const handleClick = event => {
  const cell = event.target;
  let currentMarker = isXTurn ? xClass : oClass;
  // check for win with current marker
   // alert X or Y is the winner
  // check for draw
   // alert is a draw
  // otherwise
   // switch turns
  addMarker(cell, currentMarker);
  var hasWon = checkWin(currentMarker);

  if (hasWon){
    console.log("Winner!")
  } else {
    switchTurn();
  }
}

const addMarker = (cell, marker) => {
  cell.classList.add(marker);
  cell.innerHTML = marker;
}

const switchTurn = () => {
  isXTurn = !isXTurn;
}

const checkDraw = () => {
  // set check to true;
  // iterate over allCells
   // if there is X or O isn't in class list
     // set check to false
     // return the check
}

const checkWin = (marker) => (
  // The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value - use to iterate through winning combinations array
    // The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value - use to iterate through array in winning combinations (this will provide the indexes we need to look at for allCells)
      // check whether marker exists within the current cell

  // for each of the combos in the winning combinations array
   // for every index noted in that combo
     // check whether the current marker exists within allCells[index]
  winningCombos.some(combo => (
    combo.every(index => (
      allCells[index].classList.contains(marker)
    ))
  ))
)

startGame();

