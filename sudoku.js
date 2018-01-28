function sudoku(grid){
  let rows = [];
  let cols = [];
  let sqrs = [];
  for(let i=0; i<9; i++){
    rows.push(Array(9).fill(0));
    cols.push(Array(9).fill(0));
    sqrs.push(Array(9).fill(0));
  }
  for(let i=0; i<9; i++){
    for(let j=0; j<9; j++){
      let number = grid[i][j];
      let k = 3* Math.floor(i/3)+Math.floor(j/3);
      if(rows[i][number-1] 
      || cols[j][number-1] 
      || sqrs[k][number -1]) {
        return false;
      }
      rows[i][number -1]++;
      cols[j][number -1]++;
      sqrs[k][number -1]++;
    }
  }
return rows;
  
  
}




// function sudoku(grid) {
//   let archive = new Set();
//   for(let n=0; n<81; n++){
//     let i= Math.floor(n/9);
//     let j = i % 9;
//     let k = 3 * Math.floor(1/3) + Math.floor(j/3);
//     let number = grid[i][j];
//     let rowHash = i*10+number;
//     let colHash = j*10+number + 100;
//     let sqrHash = k * number + 200;
//     if([rowHash, colHash, sqrHash].some(x => archive.has(x))){
//       return false;
//     }
//     archive = new Set([rowHash, colHash, sqrHash, ...archive]);
//   }
//   return true;
// }

// Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with digits so that each column, each row, and each of the nine 3 × 3 sub-grids that compose the grid contains all of the digits from 1 to 9.

// This algorithm should check if the given grid of numbers represents a correct solution to Sudoku.

// Example

// For the first example below, the output should be true. For the other grid, the output should be false: each of the nine 3 × 3 sub-grids should contain all of the digits from 1 to 9.

let grid = [[1,3,2,5,4,6,9,8,7], 
             [4,6,5,8,7,9,3,2,1], 
             [7,9,8,2,1,3,6,5,4], 
             [9,2,1,4,3,5,8,7,6], 
             [3,5,4,7,6,8,2,1,9], 
             [6,8,7,1,9,2,5,4,3], 
             [5,7,6,9,8,1,4,3,2], 
             [2,4,3,6,5,7,1,9,8], 
             [8,1,9,3,2,4,7,6,5]];
 
 sudoku(grid)
