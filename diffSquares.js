function differentSquares(matrix) {
    
    let squares = [];
    for(let i=0; i<matrix.length -1; i++){
        for(let j=0; j<matrix[0].length-1; j++){
            let square = [[matrix[i][j], matrix[i][j+1]],
                         [matrix[i+1][j], matrix[i+1][j+1]]].join(',');
            
            if(!squares.includes(square)) squares.push(square);
                
            
        }
    }
    return squares.length
}

// Given a rectangular matrix containing only digits, calculate the number of different 2 × 2 squares in it.

// Example

// For

// matrix = [[1, 2, 1],
//           [2, 2, 2],
//           [2, 2, 2],
//           [1, 2, 3],
//           [2, 2, 1]]
// the output should be
// differentSquares(matrix) = 6.

// Here are all 6 different 2 × 2 squares:

// 1 2
// 2 2
// 2 1
// 2 2
// 2 2
// 2 2
// 2 2
// 1 2
// 2 2
// 2 3
// 2 3
// 2 1
