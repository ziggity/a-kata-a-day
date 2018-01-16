/*
Given two cells on the standard chess board, determine whether they have the same color or not.

Example

For cell1 = "A1" and cell2 = "C3", the output should be
chessBoardCellColor(cell1, cell2) = true.
*/

function chessBoardCellColor(cell1, cell2) {
  let chessboard = [
  ['A', '1', '0', '1', '0', '1', '0', '1', '0'],
  ['B', '0', '1', '0', '1', '0', '1', '0', '1'],
  ['C', '1', '0', '1', '0', '1', '0', '1', '0'],
  ['D', '0', '1', '0', '1', '0', '1', '0', '1'],
  ['E', '1', '0', '1', '0', '1', '0', '1', '0'],
  ['F', '0', '1', '0', '1', '0', '1', '0', '1'],
  ['G', '1', '0', '1', '0', '1', '0', '1', '0'],
  ['H', '0', '1', '0', '1', '0', '1', '0', '1']
  ];
  // 1 = white, 0 = black
  let cellRow1 = cell1[0];// B
  let cellRow2 = cell2[0]; // H
  let value1 = cell1[1]; // 2
  let value2 = cell2[1]; // 8
  let compare1 = '';
  let compare2 = '';
  
  console.log(cellRow1, cellRow2, value1, value2)

    if(cellRow1 == 'A'){
      compare1 = chessboard[0][value1] 
    }
    if(cellRow1 == 'B'){
      compare1 = chessboard[1][value1]
    }
    if(cellRow1 == 'C'){
      compare1 = chessboard[2][value1]
    }
    if(cellRow1 == 'D'){
      compare1 = chessboard[3][value1]
    }
    if(cellRow1 == 'E'){
      compare1 = chessboard[4][value1]
    }
    if(cellRow1 == 'F'){
      compare1 = chessboard[5][value1]
    }
    if(cellRow1 == 'G'){
      compare1 = chessboard[6][value1]
    }
    if(cellRow1 == 'H'){
      compare1 = chessboard[7][value1]
    }
      if(cellRow2 == 'A'){
     compare2 = chessboard[0][value2]
     console.log(chessboard[0][value2])
    }
    if(cellRow2 == 'B'){
      compare2 = chessboard[1][value2]
    }
    if(cellRow2 == 'C'){
      compare2 = chessboard[2][value2]
    }
    if(cellRow2 == 'D'){
      compare2 = chessboard[3][value2]
    }
    if(cellRow2 == 'E'){
      compare2 = chessboard[4][value2]
    }
    if(cellRow2 == 'F'){
      compare2 = chessboard[5][value2]
    }
    if(cellRow2 == 'G'){
      compare2 = chessboard[6][value2]
    }
    if(cellRow2 == 'H'){
      compare2 = chessboard[7][value2]
    }
    if(compare1 == compare2){
      return true
    }
    else {
      return false
    }
}
let cellOne = "B2";
let cellTwo = "H8";
chessBoardCellColor(cellOne, cellTwo) 
