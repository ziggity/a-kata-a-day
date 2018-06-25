/*
You have a rectangular white board with some black cells. The black cells create a connected black figure, i.e. it is possible to get from any black cell to any other one through connected adjacent (sharing a common side) black cells.

Find the perimeter of the black figure assuming that a single cell has unit length.

It's guaranteed that there is at least one black cell on the table.

Example

For

matrix = [[false, true,  true ],
          [true,  true,  false],
          [true,  false, false]]
the output should be
polygonPerimeter(matrix) = 12.



For

matrix = [[true, true,  true],
          [true, false, true],
          [true, true,  true]]
the output should be
polygonPerimeter(matrix) = 16.



Input/Output

[execution time limit] 4 seconds (py)

[input] array.array.boolean matrix

A matrix of booleans representing the rectangular board where true means a black cell and false means a white one.

Guaranteed constraints:
2 ≤ matrix.length ≤ 5,
2 ≤ matrix[0].length ≤ 5.
*/
function polygonPerimeter(matrix) {
    perimeter = 0
    for(i = 0; i < matrix.length; i++){
        for(j = 0; j < matrix[0].length; j++){
           if (i - 1 < 0 && matrix[i][j]) {
                perimeter++;
            }
            if (i + 1 == matrix.length && matrix[i][j]) {
                perimeter++;
            }
            if (j - 1 < 0 && matrix[i][j]) {
                perimeter++;
            }
            if (j + 1 == matrix[0].length && matrix[i][j]) {
                perimeter++;
            }
            if (matrix[i][j] && 0 <= i - 1) {
                if (!matrix[i - 1][j]) {
                    perimeter++;
                }
            }
            if (matrix[i][j] && i + 1 < matrix.length) {
                if (!matrix[i + 1][j]) {
                    perimeter++;
                }
            }
            if (matrix[i][j] && 0 <= j - 1) {
                if (!matrix[i][j - 1]) {
                    perimeter++;
                }
            }
            if (matrix[i][j] && j + 1 < matrix[0].length) {
                if (!matrix[i][j + 1]) {
                    perimeter++;
                }
            }
        }
    }
    return perimeter
}
