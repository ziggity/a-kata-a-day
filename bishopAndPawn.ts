/*
Given the positions of a white bishop and a black pawn on the standard chess board, determine whether the bishop can capture the pawn in one move.

The bishop has no restrictions in distance for each move, but is limited to diagonal movement. Check out the example below to see how it can move:


Example

For bishop = "a1" and pawn = "c3", the output should be
bishopAndPawn(bishop, pawn) = true.



For bishop = "h1" and pawn = "h3", the output should be
bishopAndPawn(bishop, pawn) = false.



Input/Output
*/
function bishopAndPawn(bishop: string, pawn: string): boolean {
const board = {
    "a":1,
    "b":2,
    "c":3,
    "d":4,
    "e":5,
    "f":6,
    "g":7,
    "h":8
}


    const bishopX = board[bishop[0]];
    
    const bishopY = parseInt(bishop[1]);
    const pawnX = board[pawn[0]];
    const pawnY = parseInt(pawn[1]);
    console.log(bishopX, bishopY, pawnX, pawnY)
    if(bishopX + bishopY === pawnY + pawnX || bishopX + pawnY == pawnX + bishopY){
        return true;
    }
    return false;
}

console.log(bishopAndPawn('a1', 'c3'));

// other method

function bishopAndPawn(bishop, pawn) {
    return bishop[1] != pawn[1] && Math.abs((bishop.charCodeAt(0)-pawn.charCodeAt(0))/(+bishop[1] - +pawn[1]) ) == 1;    
}


// other

function bishopAndPawn(bishop, pawn) {
 var bishop1 = bishop.charCodeAt(0) - 97;
    var bishop2 = parseInt(bishop[1])
    var pawn1 = pawn.charCodeAt(0) - 97;
    var pawn2 = parseInt(pawn[1]);
    
    if(Math.abs(bishop1 - pawn1) == Math.abs(bishop2 - pawn2))
        return true;
    
    return false;
}

// other

const bishopAndPawn = (bishop, pawn) => {
    const bishopCol = bishop[0].charCodeAt();
    const pawnCol = pawn.charCodeAt(0);
    
    return Math.abs(bishopCol - pawnCol) === Math.abs(bishop[1] - pawn[1]);
}
