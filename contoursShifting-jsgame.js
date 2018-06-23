/*
Mark got a rectangular array matrix for his birthday, and now he's thinking about all the fun things he can do with it. He likes shifting a lot, so he decides to shift all of its i-contours in a clockwise direction if i is even, and counterclockwise if i is odd.

Here is how Mark defines i-contours:

the 0-contour of a rectangular array as the union of left and right columns as well as top and bottom rows;
consider the initial matrix without the 0-contour: its 0-contour is the 1-contour of the initial matrix;
define 2-contour, 3-contour, etc. in the same manner by removing 0-contours from the obtained arrays.
Implement a function that does exactly what Mark wants to do to his matrix.

Example

For

matrix = [[ 1,  2,  3,  4],
           [ 5,  6,  7,  8],
           [ 9, 10, 11, 12],
           [13, 14, 15, 16],
           [17, 18, 19, 20]]
the output should be

contoursShifting(matrix) = [[ 5,  1,  2,  3],
                             [ 9,  7, 11,  4],
                             [13,  6, 15,  8],
                             [17, 10, 14, 12],
                             [18, 19, 20, 16]]
For matrix = [[238, 239, 240, 241, 242, 243, 244, 245]],
the output should be
contoursShifting(matrix) = [[245, 238, 239, 240, 241, 242, 243, 244]].

Note, that if a contour is represented by a 1 × n array, its center is considered to be below it.

For

matrix = [[238],
           [239],
           [240],
           [241],
           [242],
           [243],
           [244],
           [245]]
the output should be

contoursShifting(matrix) = [[245],
                             [238],
                             [239],
                             [240],
                             [241],
                             [242],
                             [243],
                             [244]]
If a contour is represented by an n × 1 array, its center is considered to be to the left of it.

Input/Output

[execution time limit] 4 seconds (py)

[input] array.array.integer matrix

Guaranteed constraints:
1 ≤ matrix.length ≤ 100,
1 ≤ matrix[i].length ≤ 100,
1 ≤ matrix[i][j] ≤ 1000.

[output] array.array.integer

The given matrix with its contours shifted
*/
function contoursShifting(matrix) {
    const [n, m] = [matrix.length, matrix[0].length];
    const totalContours = Math.ceil(Math.min(n / 2, m / 2));
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

    for(let i = 0; i < totalContours; i++) {
        const coordsStack = [[i, i]];
        const valuesStack = [matrix[i][i]];
        let directionIndex = 0;
        let [dx, dy] = directions[directionIndex];
        let [x, y] = [i, i];
        
        while(true) {
            if(x + dx in matrix 
               && y + dy in matrix[0] 
               && matrix[x + dx][y + dy] <= 10000) {
                //assign the value
                x += dx;
                y += dy;
                matrix[x][y] += 10001;
                if(x === i && y === i) break;
                coordsStack.push([x, y])
                valuesStack.push(matrix[x][y]);
            } else {
                //switch directions
                directionIndex++;
                if(directionIndex >= 4) break;
                [dx, dy] = directions[directionIndex];
            }
        }
        
        if(i % 2) {
            const temp = valuesStack.shift();
            valuesStack.push(temp);
        } else {
            const temp = valuesStack.pop();
            valuesStack.unshift(temp);
        }
        
        while(valuesStack.length) {
            const [xNext, yNext] = coordsStack.pop();
            matrix[xNext][yNext] = valuesStack.pop();
        }
    }
    
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            matrix[i][j] %= 10001;
        }
    }
    
    return matrix;
}






function contoursShifting2(matrix) {
    const [n, m] = [matrix.length, matrix[0].length];
    const totalContours = Math.ceil(Math.min(n / 2, m / 2));
    const visited = Array.from({length: n}, () => Array(m).fill(false));
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

    for(let i = 0; i < totalContours; i++) {
        const coordsStack = [[i, i]];
        const valuesStack = [matrix[i][i]];
        let directionIndex = 0;
        let [dx, dy] = directions[directionIndex];
        let [x, y] = [i, i];
        
        while(true) {
            if(x + dx in matrix && y + dy in matrix[0] && !visited[x + dx][y + dy]) {
                //assign the value
                x += dx;
                y += dy;
                visited[x][y] = true;
                if(x === i && y === i) break;
                coordsStack.push([x, y])
                valuesStack.push(matrix[x][y]);
            } else {
                //switch directions
                directionIndex++;
                if(directionIndex >= 4) break;
                [dx, dy] = directions[directionIndex];
            }
        }
        
        if(i % 2) {
            const temp = valuesStack.shift();
            valuesStack.push(temp);
        } else {
            const temp = valuesStack.pop();
            valuesStack.unshift(temp);
        }
        
        while(valuesStack.length) {
            const [xNext, yNext] = coordsStack.pop();
            matrix[xNext][yNext] = valuesStack.pop();
        }
    }
    
    return matrix;
}





function contoursShifting1(matrix) {
    const [n, m] = [matrix.length, matrix[0].length];
    const totalContours = Math.ceil(Math.min(n / 2, m / 2));
    const visited = Array.from({length: n}, () => Array(m).fill(false));
    
    const clockwiseDirections = [
        [0, 1], [1, 0], [0, -1], [-1, 0]
    ];
    
    const counterClockwiseDirections = [
        [1, 0], [0, 1], [-1, 0], [0, -1]
    ];
    
    for(let i = 0; i < totalContours; i++) {
        const startValue = matrix[i][i];
        let lastValue = matrix[i][i];
        const directions = i % 2 ? counterClockwiseDirections : clockwiseDirections;
        let directionIndex = 0;
        let [dx, dy] = directions[directionIndex];
        let [x, y] = [i, i];
        
        while(true) {
            if(x + dx in matrix && y + dy in matrix[0] && !visited[x + dx][y + dy]) {
                //assign the value
                x += dx;
                y += dy;
                visited[x][y] = true;
                if(x === i && y === i) {
                    //console.log("we made it")
                    matrix[i][i] = lastValue;
                    break;
                }
                [matrix[x][y], lastValue] = [lastValue, matrix[x][y]];
                
            } else {
                //switch directions
                directionIndex++;
                if(directionIndex >= 4) {
                    matrix[i][i] = lastValue;
                    break;
                }
                [dx, dy] = directions[directionIndex];
            }
        }
        
    }
    
    console.log(visited);
    return matrix;
}
