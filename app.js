//CONTROLLER: HANDLE USER INPUT

document.addEventListener('click', function (event) {

	if (event.target.matches('.tile')) {
    renderPlay(event.target);
  } else if (event.target.matches('#startNewGame')) {
    startNewGame();
  } else {
    return;
  }

}, false);

///////MODEL: KEEP TRACK OF STATE OF PLAY

let currentPlayerX = true;

let winnerDecided = false;

let board = [
  ['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', '9']
];

usedTiles = [];

//VIEW: UPDATE PRESENTATION OF STATE OF PLAY
function renderPlay (element) {

  if (winnerDecided) {
    alert('Game Over! Start a new game and try again!');
    return;
  }

  if (usedTiles.includes(element.id)) {
    return;
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === element.id) {
        if (currentPlayerX) {
          board[i].splice(j, 1, 'X')
          element.innerHTML = 'X';
          currentPlayerX = false;
          usedTiles.push(element.id);
        } else {
          board[i].splice(j, 1, 'O');
          element.innerHTML = 'O';
          currentPlayerX = true;
          usedTiles.push(element.id);
        }
      }
    }
  };

  updateTurnTracker();

  checkForWinner();

};

//HELPER FUNCTIONS

function updateTurnTracker () {
  if (currentPlayerX) {
    document.getElementById('currentTurn').innerHTML = 'X\'s turn';
  } else {
    document.getElementById('currentTurn').innerHTML = 'O\'s turn';
  }
};

function checkForWinner () {

  rowCheck(board);

  columnCheck(board);

  diagonalCheck(board);

  if (usedTiles.length === 9) {
    alert('Draw! Start a new game and improve thine skills');
  }

};

function rowCheck (board) {
  board.forEach(row => {
    if (row.every(tile => tile === 'X')) {
      alert(`X has won! Congratulations X!`);
      winnerDecided = true;
      return;
    } else if (row.every(tile => tile === 'O')) {
      alert(`O has won! Congratulations O!`);
      winnerDecided = true;
      return;
    }});
};

function columnCheck (board) {

  if (board.map(row => row[0]).every(tile => tile === 'X')) {
    alert('X has won! Congratulations X!');
    console.log('1');
    winnerDecided = true;
    return;
  } else if (board.map(row => row[0]).every(tile => tile === 'O')) {
    alert('O has won! Congratulations to O!');
    console.log('2');
    winnerDecided = true;
    return;
  } else if (board.map(row => row[1]).every(tile => tile === 'X')) {
    alert('X has won! Congratulations X!');
    console.log('3');
    winnerDecided = true;
    return;
  } else if (board.map(row => row[1]).every(tile => tile === 'O')) {
    alert('O has won! Congratulations to O!');
    console.log('4');
    winnerDecided = true;
    return;
  } else if (board.map(row => row[2]).every(tile => tile === 'X')) {
    alert('X has won! Congratulations X!');
    console.log('5');
    winnerDecided = true;
    return;
  } else if (board.map(row => row[2]).every(tile => tile === 'O')) {
    alert('O has won! Congratulations to O!');
    console.log('6');
    winnerDecided = true;
    return;
  }

};

function diagonalCheck (board) {

  let diagonalOne = [board[0][0], board[1][1], board[2][2]];
  let diagonalTwo = [board[0][2], board[1][1], board[2][0]];

  if (diagonalOne.every(tile => tile === 'X')) {
    alert('X has won! Congratulations to X!');
    winnerDecided = true;
    return;
  } else if (diagonalOne.every(tile => tile === 'O')) {
    alert('O has won! Congratulations to O!');
    winnerDecided = true;
    return;
  } else if (diagonalTwo.every(tile => tile === 'X')) {
    alert('X has won! Congratulations to X!');
    winnerDecided = true;
    return;
  } else if (diagonalTwo.every(tile => tile === 'O')) {
    alert('O has won! Congratulations to O!');
    winnerDecided = true;
    return;
  }

};

function startNewGame () {

  currentPlayerX = true;

  winnerDecided = false;

  board = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9']
  ];

  usedTiles.length = 0;

  let tiles = Array.from(document.getElementsByClassName('tile'));

  tiles.forEach(tile => {
    tile.innerHTML = '.';
  })

}
