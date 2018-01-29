/*
Array Index & Element Equality
Given a sorted array arr of distinct integers, write a function indexEqualsValueSearch that returns the lowest index i for which arr[i] == i. Return -1 if there is no such index. Analyze the time and space complexities of your solution and explain its correctness.

Examples:

input: arr = [-8,0,2,5]
output: 2 # since arr[2] == 2

input: arr = [-1,0,3,6]
output: -1 # since no index in arr satisfies arr[i] == i.

*/

// O(log n) method: using BST binary search -> since the arr is sorted, we can deduct that 

function indexEqualsValueSearch(arr) {
  let seen = {};
  
  let mid = 0;
  let start = 0;
  let end = arr.length - 1;
  
  while(start <= end)
    {
      mid = Math.floor((start + end)/2);
      if(arr[mid] < mid){
        start = mid + 1;
      }
      else if(arr[mid] > mid)
        {
          end = mid - 1;
        }
      else
        return mid
    }

  return -1
}


// O(N) method:
function indexEqualsValueSearch(arr) {
  
  for(var i=0; i<arr.length; i++){
    if(arr[i] == i){
      return i
    }
  }
  
  return -1
}

