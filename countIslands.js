function getNumberOfIslands(binaryMatrix) {
  var counter = 0; // return islands
  for(var i=0; i<binaryMatrix.length; i++){
    for(var j=0; j<binaryMatrix[0].length; j++){
      if(binaryMatrix[i][j] == '1'){
        
        binaryMatrix[i][j] = 0;
        if((i == 0 || binaryMatrix[i-1][j] == 0) && (j ==0 || binaryMatrix[i][j-1] == 0) || (binaryMatrix[i][j+1] == 0 || 'undefined') || (binaryMatrix[i+1][j] == 0) ){
           counter++;
                   }
                }
              }
            }
  
  return counter;
  
}
  

   var  binaryMatrix = [ [0,    1,    0,    1,    0], //
                         [0,    0,    1,    1,    1], // 
                         [1,    0,    0,    1,    0], // 
                         [0,    1,    1,    0,    0], // 
                         [1,    0,    1,    0,    1] ] // 

                       

getNumberOfIslands(binaryMatrix)

function getNumberOfIslands(binaryMatrix) {
  var counter = 0; // return islands
  for(var i=0; i<binaryMatrix.length; i++){
    for(var j=0; j<binaryMatrix[0].length; j++){
      if(binaryMatrix[i][j] == '1'){
        
        binaryMatrix[i][j] = 0;
        if((i == 0 || binaryMatrix[i-1][j] == 0) && (j ==0 || binaryMatrix[i][j-1] == 0) && (binaryMatrix[i][j+1] == 0 || 'undefined') || (binaryMatrix[i+1][j] == 0) ){ // here you are checking for left and right. you can write another if to check top and bottom and what ever counted already make that zero to avoid re-calculating same number. does this help? yeah i agree. it still fails. i think my && and || are mixed up
          
         
          counter++          
        }
      }
    }
  }
  
  
  return counter;
  
}






 
                       

