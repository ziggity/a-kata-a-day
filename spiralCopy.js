function spiralCopy(inputMatrix) {
 let spiral =[];
  if(inputMatrix.length ==1){
    return inputMatrix[0]
  }
  var recurse = () => {
      if(inputMatrix.length == 0 ){
        return;
       }
    spiral = spiral.concat(inputMatrix.shift())
    for(var i=0; i<inputMatrix.length; i++){
         spiral.push(inputMatrix[i].pop()) 
    }
    spiral = spiral.concat(inputMatrix.pop().reverse())
    console.log('spiral',spiral)
    console.log(inputMatrix)
    for(var j=inputMatrix.length-1; j>0; j--){
      spiral.push(inputMatrix[j].shift())
    }
    recurse(inputMatrix)
  console.log(spiral)
  }
  recurse(inputMatrix)
  return spiral;
}
spiralCopy([ [1,    2,   3,  4,    5],
             [6,    7,   8,  9,   10],
             [11,  12,  13,  14,  15],
             [16,  17,  18,  19,  20] ])
             
             
//             Matrix Spiral Copy
// Given a 2D array (matrix) inputMatrix of integers, create a function spiralCopy that copies inputMatrix’s values into a 1D array in a spiral order, clockwise. Your function then should return that array. Analyze the time and space complexities of your solution.

// Example:

// input:  inputMatrix  = [ [1,    2,   3,  4,    5],
//                         [6,    7,   8,  9,   10],
//                         [11,  12,  13,  14,  15],
//                         [16,  17,  18,  19,  20] ]

// output: [1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12]
// See the illustration below to understand better what a clockwise spiral order looks like.

// alt Clockwise spiral order
