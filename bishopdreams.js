/*
In ChessLand there is a small but proud chess bishop with a recurring dream. In the dream the bishop finds itself on an n × m chessboard with mirrors along each edge, and it is not a bishop but a ray of light. This ray of light moves only along diagonals (the bishop can't imagine any other types of moves even in its dreams), it never stops, and once it reaches an edge or a corner of the chessboard it reflects from it and moves on.
Given the initial position and the direction of the ray, find its position after k steps where a step means either moving from one cell to the neighboring one or reflecting from a corner of the board.
Example
For boardSize = [3, 7], initPosition = [1, 2],
initDirection = [-1, 1] and k = 13, the output should be
chessBishopDream(boardSize, initPosition, initDirection, k) = [0, 1].
Here is the bishop's path:
[1, 2] -> [0, 3] -(reflection from the top edge)-> [0, 4] -> 
[1, 5] -> [2, 6] -(reflection from the bottom right corner)-> [2, 6] ->
[1, 5] -> [0, 4] -(reflection from the top edge)-> [0, 3] ->
[1, 2] -> [2, 1] -(reflection from the bottom edge)-> [2, 0] -(reflection from the left edge)->
[1, 0] -> [0, 1]
Input/Output
[time limit] 4000ms (py)
[input] array.integer boardSize
An array of two integers, the number of rows and columns, respectively. Rows are numbered by integers from 0 to boardSize[0] - 1, columns are numbered by integers from 0 to boardSize[1] - 1 (both inclusive).
Constraints:
1 ≤ boardSize[i] ≤ 20.
[input] array.integer initPosition
An array of two integers, indices of the row and the column where the bishop initially stands, respectively.
Constraints:
0 ≤ initPosition[i] < boardSize[i].
[input] array.integer initDirection
An array of two integers representing the initial direction of the bishop. If it stands in (a, b), the next cell he'll move to is (a + initDirection[0], b + initDirection[1]) or whichever it'll reflect to in case it runs into a mirror immediately.
Constraints:
initDirection[i] ∈ {-1, 1}.
[input] integer k
Constraints:
1 ≤ k ≤ 109.
[output] array.integer
The position of the bishop after k steps.
*/
function chessBishopDream(boardSize, initPosition, initDirection, k) {
    var tempArr = findLoop(boardSize, initPosition, initDirection);
    var offsetArr = tempArr[0];
    var loopArr = tempArr[1];
    if (k < offsetArr.length)
    {
        return offsetArr[k];
    }
    else
    {
        k -= (offsetArr.length);
        k %= loopArr.length;
        return loopArr[k];
    }
}

function findLoop(boardSize, initPosition, initDirection)
{
    var rows = boardSize[0];
    var columns = boardSize[1];
    var dirs = [[-1, -1], [-1, 1], [1, 1], [1, -1]];
    var dirIndex = -1;
    for (var i = 0; i < 4; ++i)
    {
        if (dirs[i][0] === initDirection[0] && dirs[i][1] === initDirection[1])
        {
            dirIndex = i;
        }
    }
    var position = initPosition;
    var hPos = position[0] + ':' + position[1] + ' ' + dirIndex;
    var posArr = [];
    var hArr = [];
    while (hArr.indexOf(hPos) === -1)
    {
        posArr.push(position.slice(0));
        hArr.push(hPos);
        
        var pi = position[0];
        var pj = position[1];
        var di = dirs[dirIndex][0];
        var dj = dirs[dirIndex][1];
        
        if (0 <= pi + di && pi + di < rows && 0 <= pj + dj && pj + dj < columns)
        {
            position[0] = pi + di;
            position[1] = pj + dj;
        }
        else if ((pi + di < 0 && pj + dj < 0)
                || (pi + di >= rows && pj + dj >= columns)
                || (pi + di < 0 && pj + dj >= columns)
                || (pi + di >= rows && pj + dj < 0))
        {
            dirIndex += 2;
            dirIndex %= 4;
        }
        else if (pi + di < 0 || pi + di >= rows)
        {
            position[1] = pj + dj;
            if (dirIndex === 0)
            {
                dirIndex = 3;
            }
            else if (dirIndex === 1)
            {
                dirIndex = 2;
            }
            else if (dirIndex === 2)
            {
                dirIndex = 1;
            }
            else if (dirIndex === 3)
            {
                dirIndex = 0;
            }
        }
        else if (pj + dj < 0 || pj + dj >= columns)
        {
            position[0] = pi + di;
            if (dirIndex === 0)
            {
                dirIndex = 1;
            }
            else if (dirIndex === 1)
            {
                dirIndex = 0;
            }
            else if (dirIndex === 2)
            {
                dirIndex = 3;
            }
            else if (dirIndex === 3)
            {
                dirIndex = 2;
            }
        }
        hPos = position[0] + ':' + position[1] + ' ' + dirIndex;
    }
    var offset = hArr.indexOf(hPos);
    var offsetArr = posArr.slice(0, offset);
    var loopArr = posArr.slice(offset);
    var res = [];
    res[0] = offsetArr;
    res[1] = loopArr;
    return res;
}
