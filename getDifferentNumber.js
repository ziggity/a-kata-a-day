function getDifferentNumber(arr) {
 if(arr[0]!==0 && arr.length<=1){
    return 0;
  }
  for(let j=0; j<arr.length; j++){
    let cache = arr[j];
    if(cache > arr.length){
      arr[j] = -1;
    }
    else{
      arr[j]=arr[cache];
      arr[cache]=cache;
    }
  }
  for (var y = 0; y < arr.length; y++){
        if(arr[y] != y){
          return y;
        }
      }
  return arr.length;
}

// another way to solve this with map function:
function getDifferentNumber(arr) {
  let temp = new Array(arr.length);
  arr.forEach((v)=>{
      if(v < arr.length){
        temp[v] = true;
      }
  });
  let index = -1;
  if(!temp.length) return 0;
  if((index = temp.findIndex((v)=>!v))==-1) return arr.length ; 
  return index;
}
/*

Given an array arr of unique nonnegative integers, implement a function getDifferentNumber that finds the smallest nonnegative integer that is NOT in the array.

Even if your programming language of choice doesn’t have that restriction (like Python), assume that the maximum value an integer can have is MAX_INT = 2^31-1. So, for instance, the operation MAX_INT + 1 would be undefined in our case.

Your algorithm should be efficient, both from a time and a space complexity perspectives.

Solve first for the case when you’re NOT allowed to modify the input arr. If successful and still have time, see if you can come up with an algorithm with an improved space complexity when modifying arr is allowed. Do so without trading off the time complexity.

Analyze the time and space complexities of your algorithm.

Example:

input:  arr = [0, 1, 2, 3]

output: 4 

*/
