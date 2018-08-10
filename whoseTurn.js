/*
Imagine a standard chess board with only two white and two black knights placed in their standard starting positions: the white knights on b1 and g1; the black knights on b8 and g8.



There are two players: one plays for white, the other for black. During each move, the player picks one of his knights and moves it to an unoccupied square according to standard chess rules. Thus, a knight on d5 can move to any of the following squares: b6, c7, e7, f6, f4, e3, c3, and b4, as long as it is not occupied by either a friendly or an enemy knight.



The players take turns in making moves, starting with the white player. Given the configuration p of the knights after an unspecified number of moves, determine whose turn it is.

Example

For p = "b1;g1;b8;g8", the output should be
whoseTurn(p) = true.

The configuration corresponds to the initial state of the game. Thus, it's white's turn.
*/
function whoseTurn(p) {
    var defaults = [[1, 0], [6, 0], [1, 7], [6, 7]];
    
    var arr = p.split(';');
    var w1 = decodePos(arr[0]);
    var w2 = decodePos(arr[1]);
    var b1 = decodePos(arr[2]);
    var b2 = decodePos(arr[3]);
    
    var wPar1 = countPathParity(w1, defaults[0]);
    var wPar2 = countPathParity(w2, defaults[1]);
    var bPar1 = countPathParity(b1, defaults[2]);
    var bPar2 = countPathParity(b2, defaults[3]);
    
    if ((wPar1 + wPar2) % 2 === (bPar1 + bPar2) % 2)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function countPathParity(cFrom, cTo)
{
    if (cFrom[0] === cTo[0] && cFrom[1] === cTo[1])
    {
        return 0;
    }
    
    var dirs = [[-1, -2], [-2, -1], [-2, 1], [-1, 2],
               [1, -2], [2, -1], [2, 1], [1, 2]];
    var dLen = dirs.length;
    
    var table = new Array(8);
    for (var i = 0; i < 8; ++i)
    {
        table[i] = new Array(8);
        table[i].fill(-1);
    }
    
    var st = [];
    table[cFrom[0]][cFrom[1]] = 0;
    st.push(cFrom);
    while (st.length > 0)
    {
        var v = st.pop();
        if (v[0] === cTo[0] && v[1] === cTo[1])
        {
            return table[v[0]][v[1]] % 2;
        }
        for (var i = 0; i < dLen; ++i)
        {
            var i1 = v[0] + dirs[i][0];
            var j1 = v[1] + dirs[i][1];
            if (0 <= i1 && i1 < 8 && 0 <= j1 && j1 <= 8)
            {
                if (table[i1][j1] === -1)
                {
                    table[i1][j1] = table[v[0]][v[1]] + 1;
                    
                    if (table[cTo[0]][cTo[1]] !== -1)
                    {
                        return table[cTo[0]][cTo[1]] % 2;
                    }
                    
                    st.push([i1, j1]);
                }
            }
        }
    }
}

function decodePos(p)
{
    var arr = [];
    arr[0] = p.charCodeAt(0) - 'a'.charCodeAt(0);
    arr[1] = Number(p.charAt(1)) - 1;
    return arr;
}
