/*
Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with digits so that each column, each row, and each of the nine 3 × 3 sub-grids that compose the grid contains all of the digits from 1 to 9.

This algorithm should check if the given grid of numbers represents a correct solution to Sudoku.

Example

For the first example below, the output should be true. For the other grid, the output should be false: each of the nine 3 × 3 sub-grids should contain all of the digits from 1 to 9.



Input/Output

[execution time limit] 4 seconds (js)

[input] array.array.integer grid

A matrix representing 9 × 9 grid already filled with numbers from 1 to 9.

[output] boolean

true if the given grid represents a correct solution to Sudoku, false otherwise.
*/
function sudoku(grid){
  function nineFactorial(num) {
    return num === 362880;
  }
  let rows = Array(9).fill(1);
  let cols = Array(9).fill(1);
  let sqrs = Array(9).fill(1);
  
  for(let i=0; i<9; i++){
      for(let j=0; j< 9; j++){
        let number = grid[i][j];
        let k = 3 * Math.floor( i/3) + Math.floor(j/3);
        rows[i] *= number;
        cols[j] *= number;
        sqrs[k] *= number;
      }
  }
  return rows.every(nineFactorial)
  && cols.every(nineFactorial)
  && sqrs.every(nineFactorial);
  
}
