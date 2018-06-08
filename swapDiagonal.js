/*
The longest diagonals of a square matrix are defined as follows:

the first longest diagonal goes from the top left corner to the bottom right one;
the second longest diagonal goes from the top right corner to the bottom left one.
Given a square matrix, your task is to swap its longest diagonals by exchanging their elements at the corresponding positions.

Example

For

matrix = [[1, 2, 3],
          [4, 5, 6],
          [7, 8, 9]]
the output should be

swapDiagonals(matrix) = [[3, 2, 1],
                         [4, 5, 6],
                         [9, 8, 7]]
                         */
                         
                         function swapDiagonals(matrix) {
    for (var i = 0; i < matrix.length >> 1; i++) {
        const j = matrix.length - i - 1;
        var x;
        
        x = matrix[i][i];
        matrix[i][i] = matrix[i][j];
        matrix[i][j] = x;
        
        x = matrix[j][i];
        matrix[j][i] = matrix[j][j];
        matrix[j][j] = x;
   }
        
    return matrix;
}
