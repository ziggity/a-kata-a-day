/*
Given array of integers, remove each kth element from it.

Example

For inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and k = 3, the output should be
extractEachKth(inputArray, k) = [1, 2, 4, 5, 7, 8, 10].
*/

function extractEachKth(inputArray, k) {
  let newArr = [];
  let counter = 0;
  for(i=0; i<inputArray.length; i++){
   newArr.push(inputArray[i])
   counter ++
   if(counter === k){
    counter = 0;
    newArr.splice(newArr.length-1)
   }
  }
  
return newArr;
}
