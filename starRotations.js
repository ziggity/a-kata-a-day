/*(
Consider a (2k+1) × (2k+1) square subarray of an integer integers matrix. Let's call the union of the square's two longest diagonals, middle column and middle row a star. Given the coordinates of the star's center in the matrix and its width, rotate it 45 · t degrees clockwise preserving position of all matrix elements that do not belong to the star.

Example

For

matrix = [[1, 0, 0, 2, 0, 0, 3],
          [0, 1, 0, 2, 0, 3, 0],
          [0, 0, 1, 2, 3, 0, 0],
          [8, 8, 8, 9, 4, 4, 4],
          [0, 0, 7, 6, 5, 0, 0],
          [0, 7, 0, 6, 0, 5, 0],
          [7, 0, 0, 6, 0, 0, 5]]
width = 7, center = [3, 3] and t = 1, the output should be

starRotation(matrix, width, center, t) = [[8, 0, 0, 1, 0, 0, 2],
                                          [0, 8, 0, 1, 0, 2, 0],
                                          [0, 0, 8, 1, 2, 0, 0],
                                          [7, 7, 7, 9, 3, 3, 3],
                                          [0, 0, 6, 5, 4, 0, 0],
                                          [0, 6, 0, 5, 0, 4, 0],
                                          [6, 0, 0, 5, 0, 0, 4]]
For

matrix = [[1, 0, 0, 2, 0, 0, 3],
          [0, 1, 0, 2, 0, 3, 0],
          [0, 0, 1, 2, 3, 0, 0],
          [8, 8, 8, 9, 4, 4, 4],
          [0, 0, 7, 6, 5, 0, 0]]
width = 3, center = [1, 5] and t = 81, the output should be

starRotation(matrix, width, center, t) = [[1, 0, 0, 2, 0, 0, 0],
                                          [0, 1, 0, 2, 3, 3, 3],
                                          [0, 0, 1, 2, 0, 0, 0],
                                          [8, 8, 8, 9, 4, 4, 4],
                                          [0, 0, 7, 6, 5, 0, 0]]
Input/Output

[execution time limit] 4 seconds (py)

[input] array.array.integer matrix

A two-dimensional array of integers.

Guaranteed constraints:
3 ≤ matrix.length ≤ 15,
3 ≤ matrix[i].length ≤ 15,
matrix[i].length == matrix[j].length,
0 ≤ matrix[i][j] ≤ 99.
*/

const LEG = [
    [ -1, -1 ],   // NW
    [ -1,  0 ],   // N
    [ -1,  1 ],   // NE
    [  0,  1 ],   // E
    [  1,  1 ],   // SE
    [  1,  0 ],   // S
    [  1, -1 ],   // SW
    [  0, -1 ]    // W
];

function starRotation(matrix, width, center, t) {
    const hwidth = (width - 1) >> 1;
    const ans = matrix.map((v, i) => v.slice());
        
    for (var leg = 0; leg < LEG.length; leg++, t++) {
        var si = center[0];
        var sj = center[1];
        var di = center[0];
        var dj = center[1];
        
        t %= LEG.length;
        
        for (var rho = 0; rho <= hwidth; rho++) {
            ans[di][dj] = matrix[si][sj];
            
            si += LEG[leg][0];
            sj += LEG[leg][1];

            di += LEG[t][0];
            dj += LEG[t][1];
        }
    }

    return ans;    
}


