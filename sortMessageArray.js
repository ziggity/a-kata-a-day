/*
K-Messed Array Sort
Given an array of integers arr where each element is at most k places away from its sorted position, code an efficient function sortKMessedArray that sorts arr. For instance, for an input array of size 10 and k = 2, an element belonging to index 6 in the sorted array will be located at either index 4, 5, 6, 7 or 8 in the input array.

Analyze the time and space complexities of your solution.

Example:

input:  arr = [1, 4, 5, 2, 3, 7, 8, 6, 10, 9], k = 2

output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// o(nlogk) o(nk) < o(nlogn)

*/

function sortKMessedArray(arr, k) {
   
  for(let i=0; i<arr.length; i++){
    let smallestEle = i;
    for(let j=i+1; j<arr.length && j<= k+i; j++){
      if(arr[j]<arr[smallestEle]){
        smallestEle = j;
      }
    }
    let temp = arr[smallestEle];
      arr[smallestEle] = arr[i];
      arr[i]=temp;
       console.log('temp',temp)
   
  }
  return arr;
}
let arr = [6,1,4,11,2,0,3,7,10,5,8,9];//11
let k = 6;

