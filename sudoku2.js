/*
Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with numbers in such a way that each column, each row, and each of the nine 3 × 3 sub-grids that compose the grid all contain all of the numbers from 1 to 9 one time.

Implement an algorithm that will check whether the given grid of numbers represents a valid Sudoku puzzle according to the layout rules described above. Note that the puzzle represented by grid does not have to be solvable.

Example

For

grid = [['.', '.', '.', '1', '4', '.', '.', '2', '.'],
        ['.', '.', '6', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '1', '.', '.', '.', '.', '.', '.'],
        ['.', '6', '7', '.', '.', '.', '.', '.', '9'],
        ['.', '.', '.', '.', '.', '.', '8', '1', '.'],
        ['.', '3', '.', '.', '.', '.', '.', '.', '6'],
        ['.', '.', '.', '.', '.', '7', '.', '.', '.'],
        ['.', '.', '.', '5', '.', '.', '.', '7', '.']]
the output should be
sudoku2(grid) = true;

For

grid = [['.', '.', '.', '.', '2', '.', '.', '9', '.'],
        ['.', '.', '.', '.', '6', '.', '.', '.', '.'],
        ['7', '1', '.', '.', '7', '5', '.', '.', '.'],
        ['.', '7', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '8', '3', '.', '.', '.'],
        ['.', '.', '8', '.', '.', '7', '.', '6', '.'],
        ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
        ['.', '1', '.', '2', '.', '.', '.', '.', '.'],
        ['.', '2', '.', '.', '3', '.', '.', '.', '.']]
the output should be
sudoku2(grid) = false.

The given grid is not correct because there are two 1s in the second column. Each column, each row, and each 3 × 3 subgrid can only contain the numbers 1 through 9 one time.

*/

function sudoku2(grid) {
  return rowIsValid(grid) && columnIsValid(grid) && squareIsValid(grid)
}
let rowIsValid = (grid) => {
  let result = true;
  for (let i = 0; i < grid.length; i++) {
    let set = new Set();
    for (let j = 0; j < grid[i].length; j++) {
      let cell = grid[j][i];
      if (cell !== '.') {
        if (set.has(cell)) {
          result = false;
          break;
        } else {
          set.add(cell);
        }
      }
    }
  }
  return result;
}
let singleRowIsValid = (row) => {
  
}
let columnIsValid = (grid) => {
  for (let i = 0; i < grid.length; i++) {
    let column = grid[i]
    if ( !singleColumnIsValid(column) ) {
      console.log('line 12')
      return false;
    };
  }
  return true;
}
let singleColumnIsValid = (column) => {
  let set = new Set();
  for (let i = 0; i < column.length; i++) {
    let cell = column[i]
    if ( cell !== '.') {
      if ( set.has(cell) ) {
        console.log('line 23', 'set', set, 'cell', cell)
        return false
      } else {
        set.add(cell)
      }
    }
  }
  return true;
}

let squareIsValid = (grid) => {
  let result = true;
  for (let i = 0; i < grid.length; i+=3) {
    for (let j = 0; j < grid[i].length; j+=3) {
      let square = [];
      square.push(grid[i][j]);
      square.push(grid[i][j+1]);
      square.push(grid[i][j+2]);
      square.push(grid[i+1][j]);
      square.push(grid[i+1][j+1]);
      square.push(grid[i+1][j+2]);
      square.push(grid[i+2][j]);
      square.push(grid[i+2][j+1]);
      square.push(grid[i+2][j+2]);
      console.log('square =>', square)
      let set = new Set();
      for (let k = 0; k < square.length; k++) {
        let cell = square[k];
        if ( cell !== '.') {
          if (set.has(cell)) {
            console.log('false')
            result = false;
            break;
          } else {
            set.add(cell)
          }
        }
      }
    }
  }
  return result;
};

