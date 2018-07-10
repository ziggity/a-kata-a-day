/*
Given a rectangular matrix of integers, check if it is possible to rearrange its rows in such a way that all its columns become strictly increasing sequences (read from top to bottom).

Example

For

matrix = [[2, 7, 1], 
          [0, 2, 0], 
          [1, 3, 1]]
the output should be
rowsRearranging(matrix) = false;

For

matrix = [[6, 4], 
          [2, 2], 
          [4, 3]]
the output should be
rowsRearranging(matrix) = true.
*/
function rowsRearranging(matrix) {
    matrix.sort((a, b) => a.reduce((p,c)=>p*c, 1) - b.reduce((p,c)=>p*c, 1));
    console.log(matrix);
    for(var i=0;i<matrix.length-1;i++){
        for(var j=0;j<matrix[0].length;j++){
            if(matrix[i][j] >= matrix[i+1][j]){
                return false;
            }
        }
    }
    
    return true;
}

// or this way

function rowsRearranging(matrix) {
    matrix.sort((a, b) => a[0] - b[0]);
    
    for(let i = 0; i < matrix.length - 1; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            if(matrix[i][j] >= matrix[i + 1][j]) {
                return false;
            }
        }
    }
    return true;
}
