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
          
          // any ideas tohelp? thank you very much sorry just saw ur prev text.
          counter++;
          // this one is tricky. do you know the DFS approach? yes. i did solve this. so basically you have to do a recursive function to
          //
          //traverse left, down, up, right when you encounter 1 in an array. reset that value to zero as soon as you find 1. this problem is quite difficult but for sure if you see the solution you will definetly get it :) so far you did good. :) 
          
          //  thanks. do you want to write up the recrusive way? i'll watch iaky :)  give me 2 mins i am looking fo my solution. ok
          
          
          
          
          
        }
      }
    }
  }
  
  
  return counter;
  
}



// here you go . :) so

// 
// import java.io.*;
// import java.util.*;

// class Solution {
//   @SuppressWarnings("unchecked")
//   static int getNumberOfIslands(int[][] binaryMatrix) {
//     // your code goes here
      
//     int islandcount = 0; 
//     int rows = binaryMatrix.length;
//     int cols = binaryMatrix[0].length;
    
//     for(int r = 0; r < rows  ; r++){ 
//         for(int c = 0; c< cols  ; c++){            
//           if(binaryMatrix[r][c] == 1){          
//             exploreMatrix(binaryMatrix,r,c,rows,cols);//,rowq,colq); calling explore matrix
//             islandcount ++;          
//         }              
//       }        
//     }    
//     return islandcount;    
//   }
  
//   @SuppressWarnings("unchecked")
//   static void exploreMatrix(int[][] matrix, int r , int c , int rows, int cols){//,Queue<Integer> rowq, Queue<Integer> colq){
    
//       if (r >= 0 && r < rows && c >= 0 && c < cols) { // here checking for row and col index to be between 0 and rows and 0 and col
			
// 			if (matrix[r][c] == 1) { // once i find value 1 i will assign as 0 ok got it so far. cool :) any questions on  what's the BIG O?  this? BIG O is representation to state maxium time or space taken by the program.means like a worst case how long will the algorithm take time to run. for example. lets take 2 for ok each loop runs for n * n time right. so its can O(n)2 ( big o of n square ) 
//         read this document its very good . http://bigocheatsheet.com/  great thanks so much!
// 				matrix[r][c] = 0;
// 			} else return;

// 			exploreMatrix(matrix, r - 1, c, rows, cols);   //  recursive function to see  // up?
// 			exploreMatrix(matrix, r, c - 1, rows, cols); // left

// 			exploreMatrix(matrix, r + 1, c, rows, cols); // bottom
// 			exploreMatrix(matrix, r, c + 1, rows, cols); // right?
// 		}

//   }
  
//   public static void main(String[] args) {

//     int[][] binaryMatrix = { {0,    1,    0,    1,    0},
//                             {0,    0,    1,    1,    1},
//                             {1,    0,    0,    1,    0},
//                             {0,    1,    1,    0,    0},
//                             {1,    0,    1,    0,    1}};
    
//     System.out.println( getNumberOfIslands(binaryMatrix));
    
//   }
// }





 
                       

