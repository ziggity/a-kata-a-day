/*
Consider a bishop, a knight and a rook on an n × m chessboard. They are said to form a triangle if each piece attacks exactly one other piece and is attacked by exactly one piece. Calculate the number of ways to choose positions of the pieces to form a triangle.
Note that the bishop attacks pieces sharing the common diagonal with it; the rook attacks in horizontal and vertical directions; and, finally, the knight attacks squares which are two squares horizontally and one square vertically, or two squares vertically and one square horizontally away from its position.
Example
For n = 2 and m = 3, the output should be
chessTriangle(n, m) = 8.
Input/Output
[time limit] 4000ms (py)
[input] integer n
Constraints:
1 ≤ n ≤ 40.
[input] integer m
Constraints:
1 ≤ m ≤ 40,
3 ≤ n · m.
[output] integer
*/
function chessTriangle(n, m) {
    var s = new Set();
    var rook, bishop, knight;
    var arr;
    for (var i = 0; i < n; ++i)
    {
        for (var j = 0; j < m; ++j)
        {
            rook = [i, j];
            for (var ri = 0; ri < n; ++ri)
            {
                if (i === ri)
                {
                    continue;
                }
                bishop = [ri, j];
                arr = findKnightPositions(rook, bishop, n, m);
                for (var k = 0; k < arr.length; ++k)
                {
                    var str = rook.toString() + ' ' + bishop.toString() 
                                + ' ' + arr[k].toString();
                    s.add(str);
                }
            }
            for (var rj = 0; rj < m; ++rj)
            {
                if (j === rj)
                {
                    continue;
                }
                bishop = [i, rj];
                arr = findKnightPositions(rook, bishop, n, m);
                for (var k = 0; k < arr.length; ++k)
                {
                    var str = rook.toString() + ' ' + bishop.toString() 
                                + ' ' + arr[k].toString();
                    s.add(str);
                }
            }
            for (var ri = 0; ri < n; ++ri)
            {
                if (i === ri)
                {
                    continue;
                }
                knight = [ri, j];
                arr = findBishopPositions(rook, knight, n, m);
                for (var k = 0; k < arr.length; ++k)
                {
                    var str = rook.toString() + ' ' + arr[k].toString() 
                                + ' ' + knight.toString();
                    s.add(str);
                }
            }
            for (var rj = 0; rj < m; ++rj)
            {
                if (j === rj)
                {
                    continue;
                }
                knight = [i, rj];
                arr = findBishopPositions(rook, knight, n, m);
                for (var k = 0; k < arr.length; ++k)
                {
                    var str = rook.toString() + ' ' + arr[k].toString() 
                                + ' ' + knight.toString();
                    s.add(str);
                }
            }
        }
    }
    return s.size;
}

function findKnightPositions(rook, bishop, n, m)
{
    var arr = [];
    var kAtt = [[-1, -2], [-2, -1], [-2, 1], [-1, 2],
               [1, -2], [2, -1], [2, 1], [1, 2]];
    var kLen = kAtt.length;
    
    var i1 = bishop[0] - 1;
    var j1 = bishop[1] - 1;
    while (i1 >= 0 && j1 >= 0)
    {
        for (var k = 0; k < kLen; ++k)
        {
            if (i1 + kAtt[k][0] === rook[0] && j1 + kAtt[k][1] === rook[1])
            {
                arr.push([i1, j1]);
            }
        }
        --i1;
        --j1;
    }
    i1 = bishop[0] + 1;
    j1 = bishop[1] + 1;
    while (i1 < n && j1 < m)
    {
        for (var k = 0; k < kLen; ++k)
        {
            if (i1 + kAtt[k][0] === rook[0] && j1 + kAtt[k][1] === rook[1])
            {
                arr.push([i1, j1]);
            }
        }
        ++i1;
        ++j1;
    }
    i1 = bishop[0] - 1;
    j1 = bishop[1] + 1;
    while (i1 >= 0 && j1 < m)
    {
        for (var k = 0; k < kLen; ++k)
        {
            if (i1 + kAtt[k][0] === rook[0] && j1 + kAtt[k][1] === rook[1])
            {
                arr.push([i1, j1]);
            }
        }
        --i1;
        ++j1;
    }
    i1 = bishop[0] + 1;
    j1 = bishop[1] - 1;
    while (i1 < n && j1 >= 0)
    {
        for (var k = 0; k < kLen; ++k)
        {
            if (i1 + kAtt[k][0] === rook[0] && j1 + kAtt[k][1] === rook[1])
            {
                arr.push([i1, j1]);
            }
        }
        ++i1;
        --j1;
    }
    
    return arr;
}

function findBishopPositions(rook, knight, n, m)
{
    var arr = [];
    var kAtt = [[-1, -2], [-2, -1], [-2, 1], [-1, 2],
               [1, -2], [2, -1], [2, 1], [1, 2]];
    var kLen = kAtt.length;
    
    for (var k = 0; k < kLen; ++k)
    {
        var i1 = knight[0] + kAtt[k][0];
        var j1 = knight[1] + kAtt[k][1];
        if (0 <= i1 && i1 < n && 0 <= j1 && j1 < m)
        {
            if (i1 + j1 === rook[0] + rook[1] || i1 - j1 === rook[0] - rook[1])
            {
                arr.push([i1, j1]);
            }
        }
    }
    
    return arr;
}
