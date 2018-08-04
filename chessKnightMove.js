/*
Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform.

The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically and one square horizontally away from it. The complete move therefore looks like the letter L. Check out the image below to see all valid moves for a knight piece that is placed on one of the central squares.



Example

For cell = "a1", the output should be
chessKnightMoves(cell) = 2.



For cell = "c2", the output should be
chessKnightMoves(cell) = 6.




*/

function chessKnightMoves(cell) {
  const alph = [-2,-2,-1,-1,1,1,2,2]
  const nums = [-1,1,-2,2,-2,2,-1,1]
  let count = 0
  
  for (let i=0; i< alph.length; i++) {
    let letter = cell[0].charCodeAt() + alph[i]
    let num = parseInt(cell[1]) + nums[i]
    if ((letter > 96 && letter < 105) && (num > 0 && num < 9)) {
      count++
    }
  }
    return count
}
