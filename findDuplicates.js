/*Find The Duplicates
Given two sorted arrays arr1 and arr2 of passport numbers, implement a function findDuplicates that returns an array of all passport numbers that are both in arr1 and arr2. Note that the output array should be sorted in an ascending order.

Let N and M be the lengths of arr1 and arr2, respectively. Solve for two cases and analyze the time & space complexities of your solutions: M ≈ N - the array lengths are approximately the same M ≫ N - arr2 is much bigger than arr1.

Example:

input:  arr1 = [1, 2, 3, 5, 6, 7], arr2 = [3, 6, 7, 8, 20]

output: [3, 6, 7] # since only these three values are both in arr1 and arr2

*/

function findDuplicates(arr1, arr2) {
  let obj1 = {};
  let result = [];
  for(let i=0; i<arr1.length; i++){
    if(obj1[arr1[i]]){
      obj1[arr1[i]]++;
    }else{
      obj1[arr1[i]]=1;
    }
  }
  for(let j=0; j<arr2.length; j++){
    if(obj1[arr2[j]]){
      obj1[arr2[j]]++;
    }
    // {3: 2}
    if(obj1[arr2[j]]>=2){
      result.push(arr2[j])
    }
    
  }
  return (result); 
}

let arr1 = [1, 2, 3, 5, 6, 7], arr2 = [3, 6, 7, 8, 20];
// O (N+M)
console.log(findDuplicates(arr1,arr2))
