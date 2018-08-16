/*
An amazon (also known as a queen+knight compound) is an imaginary chess piece that can move like a queen or a knight (or, equivalently, like a rook, bishop, or knight). The diagram below shows all squares which the amazon attacks from e4 (circles represent knight-like moves while crosses correspond to queen-like moves).



Recently you've come across a diagram with only three pieces left on the board: a white amazon, white king and black king. It's black's move. You don't have time to determine whether the game is over or not, but you'd like to figure it out in your head. Unfortunately, the diagram is smudged and you can't see the position of the black's king, so it looks like you'll have to check them all.

Given the positions of white pieces on a standard chessboard, determine the number of possible black king's positions such that:

it's checkmate (i.e. black's king is under amazon's attack and it cannot make a valid move);
it's check (i.e. black's king is under amazon's attack but it can reach a safe square in one move);
it's stalemate (i.e. black's king is on a safe square but it cannot make a valid move);
black's king is on a safe square and it can make a valid move.
Note that two kings cannot be placed on two adjacent squares (including two diagonally adjacent ones).

Example

For king = "d3" and amazon = "e4", the output should be
amazonCheckmate(king, amazon) = [5, 21, 0, 29].



Red crosses correspond to the checkmate positions, orange pluses refer to checks and green circles denote safe squares.

For king = "a1" and amazon = "g5", the output should be
amazonCheckmate(king, amazon) = [0, 29, 1, 29].



Stalemate position is marked by a blue square.

Input/Output

[execution time limit] 4 seconds (py)

[input] string king

Position of the white's king in the chess notation.

[input] string amazon

Position of the white's amazon in the same notation.

Guaranteed constraints:
amazon ≠ king.

[output] array.integer

Array of four integers, each equal to the number of black's king positions corresponding to a specific situation. The integers should be presented in the same order as the situations were described, i.e. 0 for checkmates, 1 for checks, etc.
/*
function amazonCheckmate(king, amazon) {
    var kPos = decodePosition(king);
    var amPos = decodePosition(amazon);
    
    var table = new Array(8);
    for (var i = 0; i < 8; ++i)
    {
        table[i] = new Array(8);
        table[i].fill(0);
    }
    
    //-1 - unavailable
    //0 - free
    //1 - under attack
    
    for (var i1 = kPos[0] - 1; i1 <= kPos[0] + 1; ++i1)
    {
        for (var j1 = kPos[1] - 1; j1 <= kPos[1] + 1; ++j1)
        {
            if (0 <= i1 && i1 < 8 && 0 <= j1 && j1 < 8)
            {
                table[i1][j1] = -1;
            }
        }
    }
    
    var i1 = amPos[0] - 1;
    var j1 = amPos[1] - 1;
    while (i1 >= 0 && j1 >= 0)
    {
        if (i1 === kPos[0] && j1 === kPos[1])
        {
            break;
        }
        if (table[i1][j1] !== -1)
        {
            table[i1][j1] = 1;
        }
        --i1;
        --j1;
    }
    i1 = amPos[0] + 1;
    j1 = amPos[1] + 1;
    while (i1 < 8 && j1 < 8)
    {
        if (i1 === kPos[0] && j1 === kPos[1])
        {
            break;
        }
        if (table[i1][j1] !== -1)
        {
            table[i1][j1] = 1;
        }
        ++i1;
        ++j1;
    }
    i1 = amPos[0] + 1;
    j1 = amPos[1] - 1;
    while (i1 < 8 && j1 >= 0)
    {
        if (i1 === kPos[0] && j1 === kPos[1])
        {
            break;
        }
        if (table[i1][j1] !== -1)
        {
            table[i1][j1] = 1;
        }
        ++i1;
        --j1;
    }
    i1 = amPos[0] - 1;
    j1 = amPos[1] + 1;
    while (i1 >= 0 && j1 < 8)
    {
        if (i1 === kPos[0] && j1 === kPos[1])
        {
            break;
        }
        if (table[i1][j1] !== -1)
        {
            table[i1][j1] = 1;
        }
        --i1;
        ++j1;
    }
    
    i1 = amPos[0] - 1;
    j1 = amPos[1];
    while (i1 >= 0)
    {
        if (i1 === kPos[0] && j1 === kPos[1])
        {
            break;
        }
        if (table[i1][j1] !== -1)
        {
            table[i1][j1] = 1;
        }
        --i1;
    }
    i1 = amPos[0] + 1;
    j1 = amPos[1];
    while (i1 < 8)
    {
        if (i1 === kPos[0] && j1 === kPos[1])
        {
            break;
        }
        if (table[i1][j1] !== -1)
        {
            table[i1][j1] = 1;
        }
        ++i1;
    }
    
    i1 = amPos[0];
    j1 = amPos[1] - 1;
    while (j1 >= 0)
    {
        if (i1 === kPos[0] && j1 === kPos[1])
        {
            break;
        }
        if (table[i1][j1] !== -1)
        {
            table[i1][j1] = 1;
        }
        --j1;
    }
    i1 = amPos[0];
    j1 = amPos[1] + 1;
    while (j1 < 8)
    {
        if (i1 === kPos[0] && j1 === kPos[1])
        {
            break;
        }
        if (table[i1][j1] !== -1)
        {
            table[i1][j1] = 1;
        }
        ++j1;
    }
    
    var knDirs = [[-1, -2], [-2, -1], [-2, 1], [-1, 2],
                 [1, -2], [2, -1], [2, 1], [1, 2]];
    var knLen = knDirs.length;
    for (var kn = 0; kn < knLen; ++kn)
    {
        var kni = amPos[0] + knDirs[kn][0];
        var knj = amPos[1] + knDirs[kn][1];
        if (0 <= kni && kni < 8 && 0 <= knj && knj < 8)
        {
            if (table[kni][knj] !== -1)
            {
                table[kni][knj] = 1;
            }
        }
    }
    
    //console.log(table);
    
    var kDirs = [[-1, -1], [-1, 0], [-1, 1],
                [0, -1], [0, 1],
                [1, -1], [1, 0], [1, 1]];
    var kdLen = kDirs.length;
    
    var res = [0, 0, 0, 0];
    for (var i = 0; i < 8; ++i)
    {
        for (var j = 0; j < 8; ++j)
        {
            if (table[i][j] === -1)
            {
                continue;
            }
            if (i === amPos[0] && j === amPos[1])
            {
                continue;
            }
            var canMove = false;
            for (var k = 0; k < kdLen; ++k)
            {
                var ki = i + kDirs[k][0];
                var kj = j + kDirs[k][1];
                if (0 <= ki && ki < 8 && 0 <= kj && kj < 8)
                {
                    if (table[ki][kj] === 0)
                    {
                        canMove = true;
                        break;
                    }
                }
            }
            if (table[i][j] === 1)
            {
                if (canMove)
                {
                    ++res[1];
                }
                else
                {
                    ++res[0];
                }
            }
            else if (table[i][j] === 0)
            {
                if (canMove)
                {
                    ++res[3];
                }
                else
                {
                    ++res[2];
                }
            }
        }
    }
    return res;
}

function decodePosition(p)
{
    var arr = [];
    arr[0] = p.charCodeAt(0) - 'a'.charCodeAt(0);
    arr[1] = Number(p.charAt(1)) - 1;
    return arr;
}
