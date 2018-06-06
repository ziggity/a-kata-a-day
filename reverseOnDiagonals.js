/*
The longest diagonals of a square matrix are defined as follows:

the first longest diagonal goes from the top left corner to the bottom right one;
the second longest diagonal goes from the top right corner to the bottom left one.
Given a square matrix, your task is to reverse the order of elements on both of its longest diagonals.

Example

For

matrix = [[1, 2, 3],
          [4, 5, 6],
          [7, 8, 9]]
the output should be

reverseOnDiagonals(matrix) = [[9, 2, 7],
                              [4, 5, 6],
                              [3, 8, 1]]
Input/Output

[execution time limit] 4 seconds (py)

[input] array.array.integer matrix

Guaranteed constraints:
1 ≤ matrix.length ≤ 10,
matrix.length = matrix[i].length,
1 ≤ matrix[i][j] ≤ 1000.

[output] array.array.integer

Matrix with the order of elements on its longest diagonals reversed.

*/
function reverseOnDiagonals(a) {
    var n = a.length;
    var t;
    for( var i=0; i<n/2; i++ ) {
        // swap a[i][i] and a[n-i-1][n-i-1];
        t = a[i][i];
        a[i][i] = a[n-i-1][n-i-1];
        a[n-i-1][n-i-1] = t;
        
        // swap a[i][n-i-1] and a[n-i-1][i]
        t = a[i][n-i-1];
        a[i][n-i-1] = a[n-i-1][i];
        a[n-i-1][i] = t;
    }
    return a;
}
