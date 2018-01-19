function bishopAndPawn(bishop,pawn){
  let board = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4,
    'e': 5,
    'f': 6,
    'g': 7,
    'h': 8
  }
  let bishopX = board[bishop[0]];

  let bishopY = parseInt(bishop[1]);
  
  let pawnX = board[pawn[0]];
  let pawnY = parseInt(pawn[1]);
    console.log('bY:',bishopY,'bX:', bishopX,'pX:', pawnX,'pY:', pawnY)
  if(bishopX + bishopY === pawnY + pawnX || bishopX + pawnY === bishopY + pawnX){
    return true;
  }
  
  return false;
  
}
// bishopAndPawn('d4', 'a7');

// Given the positions of a white bishop and a black pawn on the standard chess board, determine whether the bishop can capture the pawn in one move.

// The bishop has no restrictions in distance for each move, but is limited to diagonal movement. Check out the example below to see how it can move:


// Example

// For bishop = "a1" and pawn = "c3", the output should be
// bishopAndPawn(bishop, pawn) = true.
