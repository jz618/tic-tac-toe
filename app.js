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

  addMarker(cell, currentMarker);

  if (checkWin(currentMarker)){
    setTimeout(() => {alert('We have a winner!')}, 100);
  } else if (checkDraw()){
    setTimeout(() => {alert('We have a draw!')}, 100);
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

const checkDraw = () => (
  [...allCells].every(cell => (
    cell.classList.contains(xClass) || cell.classList.contains(oClass)
  ))
)

const checkWin = (marker) => (
  winningCombos.some(combo => (
    combo.every(index => (
      allCells[index].classList.contains(marker)
    ))
  ))
)

startGame();