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

// Big O is O(n log n) since I"m sorting it before I loop through it. I understand I can do this sorting in place and that will speed it up

function getDifferentNumber(arr) {
  let sorted = arr.sort()
  let returnValue = 0;
  if(sorted[0] !== 0){
     return 0
   }
  for(let i=0; i<sorted.length; i++){
    if(i !== sorted[i] ) {
      returnValue =  i
      return returnValue
      }
    }
   return sorted[sorted.length-1]+1;
  }

console.log(getDifferentNumber([1,3,0,2])); //4

