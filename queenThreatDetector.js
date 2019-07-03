
const generateBoard = function(queen1, queen2) {
  
  let chessboard = [                      //empty board
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ];

  for (let r = 0; r < 8; r ++) {                 //board with 2 queens
    for (let c = 0; c < 8; c ++) {
      if (r === queen1[0] && c === queen1[1] || r === queen2[0] && c === queen2[1]) {
        chessboard[r][c] = 1;
      }
    }
  }
  return chessboard;
};

const queenThreat = function(chessboard) {

  //loop will find both queens and store in queens array = [X1, Y1, x2, y2]

  let queens = [];
  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      if (chessboard[x][y] === 1) {
        queens.push(x, y);
      }
    }
  }

  let checkmate = false;

  if (Math.abs(queens[0] - queens[2]) === Math.abs(queens[1] - queens[3])) {
    checkmate = true;
  }

  return checkmate;

};

let whiteQueen = [0, 5]; //[row0, column5]
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(`Checkmate: ${queenThreat(generatedBoard)}`);
