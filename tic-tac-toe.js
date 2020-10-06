
const board = document.getElementById('board');
const game = document.getElementById('game');
const controls = document.getElementsByClassName('controls');
const statusDiv = document.querySelector('#status');
const resetDiv = document.querySelector('.btn');
const cellDivs = document.querySelectorAll('.square');


const play_x = 'X';
const play_o = 'O';


let current_game = true;
let player_turn = true;



const converter = (letter) => letter === 'X' ? play_x : play_o;

const Win_master = (letter) => {
  current_game = false;
  if (letter === 'X') {
    statusDiv.innerHTML = `${converter(letter)} has won!`;
  } else {
    statusDiv.innerHTML = `<span>${converter(letter)} has won!</span>`;
  }
};

const is_GameStatus = () => {
  const topLeft = cellDivs[0].classList[1];
  const topMiddle = cellDivs[1].classList[1];
  const topRight = cellDivs[2].classList[1];
  const middleLeft = cellDivs[3].classList[1];
  const middleMiddle = cellDivs[4].classList[1];
  const middleRight = cellDivs[5].classList[1];
  const bottomLeft = cellDivs[6].classList[1];
  const bottomMiddle = cellDivs[7].classList[1];
  const bottomRight = cellDivs[8].classList[1];

  
  if (topLeft && topLeft === topMiddle && topLeft === topRight) {
    Win_master(topLeft);
    cellDivs[0].classList.add('won');
    cellDivs[1].classList.add('won');
    cellDivs[2].classList.add('won');
  } else if (middleLeft && middleLeft === middleMiddle && middleLeft === middleRight) {
    Win_master(middleLeft);
    cellDivs[3].classList.add('won');
    cellDivs[4].classList.add('won');
    cellDivs[5].classList.add('won');
  } else if (bottomLeft && bottomLeft === bottomMiddle && bottomLeft === bottomRight) {
    Win_master(bottomLeft);
    cellDivs[6].classList.add('won');
    cellDivs[7].classList.add('won');
    cellDivs[8].classList.add('won');
  } else if (topLeft && topLeft === middleLeft && topLeft === bottomLeft) {
    Win_master(topLeft);
    cellDivs[0].classList.add('won');
    cellDivs[3].classList.add('won');
    cellDivs[6].classList.add('won');
  } else if (topMiddle && topMiddle === middleMiddle && topMiddle === bottomMiddle) {
    Win_master(topMiddle);
    cellDivs[1].classList.add('won');
    cellDivs[4].classList.add('won');
    cellDivs[7].classList.add('won');
  } else if (topRight && topRight === middleRight && topRight === bottomRight) {
    Win_master(topRight);
    cellDivs[2].classList.add('won');
    cellDivs[5].classList.add('won');
    cellDivs[8].classList.add('won');
  } else if (topLeft && topLeft === middleMiddle && topLeft === bottomRight) {
    Win_master(topLeft);
    cellDivs[0].classList.add('won');
    cellDivs[4].classList.add('won');
    cellDivs[8].classList.add('won');
  } else if (topRight && topRight === middleMiddle && topRight === bottomLeft) {
    Win_master(topRight);
    cellDivs[2].classList.add('won');
    cellDivs[4].classList.add('won');
    cellDivs[6].classList.add('won');
  } else if (topLeft && topMiddle && topRight && middleLeft && middleMiddle && middleRight && bottomLeft && bottomMiddle && bottomRight) {
    current_game = false;
    statusDiv.innerHTML = 'Game is tied!';
  } else {
  player_turn = !player_turn;
  if (player_turn) {
  statusDiv.innerHTML = `${play_x} is next`;
  } else {
  statusDiv.innerHTML = `<span>${play_o} is next</span>`;
  }
  }
 };
 
 
 
 const handleReset = () => {
  player_turn= true;
  statusDiv.innerHTML = `${play_x} is next`;
  for (const cellDiv of cellDivs) {
  cellDiv.classList.remove('X');
  cellDiv.classList.remove('O');
  cellDiv.classList.remove('won');
  }
  current_game = true;
 };
 
 const handleCellClick = (e) => {
  const classList = e.target.classList;
 
  if (!current_game || classList[1] === 'X' || classList[1] === 'O') {
  return;
  }
 
  if (player_turn) {
  classList.add('X');
  is_GameStatus();
  } else {
  classList.add('O');
  is_GameStatus();
  }
 };
 
 
 
 resetDiv.addEventListener('click', handleReset);
 
 for (const cellDiv of cellDivs) {
  cellDiv.addEventListener('click', handleCellClick)
 }
