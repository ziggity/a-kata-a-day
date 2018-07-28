/*
Merging 2 Packages
Given a package with a weight limit limit and an array arr of item weights, implement a function getIndicesOfItemWeights that finds two items whose sum of weights equals the weight limit limit. Your function should return a pair [i, j] of the indices of the item weights, ordered such that i > j. If such a pair doesn’t exist, return an empty array.

Analyze the time and space complexities of your solution.

Example:

input:  arr = [4, 6, 10, 15, 16],  lim = 21

output: [3, 1] # since these are the indices of the
               # weights 6 and 15 whose sum equals to 21
Constraints:

[time limit] 5000ms

[input] array.integer arr

0 ≤ arr.length ≤ 100

function getIndicesOfItemWeights(arr, limit) {
  let arrResult = [];
  let arrResult2 = [];
  for(let i=0; i<arr.length; i++) {
    for(let j=i+1; j<arr.length; j++) {
     console.log(arr[i], arr[j])
      if(arr[i]+arr[j] == limit){
      arrResult = [j,i]
       
      }
    }
    
  }
  console.log(arrResult)
  return arrResult;
}


*/

/*function getIndicesOfItemWeights(arr, limit) {
  
  let arrResult = {};
  
  arr.forEach((element, index) => {
    if(!arrResult.hasOwnProperty(element)) {
      arrResult[element] = {
        count:1,
        index
      };
    } else {
      arrResult[element].count++;
      arrResult[element].index = index;
    }
  })
  console.log(arrResult)
  }

*/


console.log(getIndicesOfItemWeights([4, 6, 10, 15, 16], 21))

function getIndicesOfItemWeights(arr, limit) {
  let obj = {};
  /*
  {
    weight: index,
    5: 0
  }  
  */
  
  for (let i = 0; i < arr.length; i++) {
    var value = arr[i];
    // lookup in obj
    if(arr.length<=1) return []
    j = obj[(limit - value)];
    
    if (j == undefined) {
      obj[value] = i;
    } else {
      return [i,j];
    }
  }
  
}



// psuedo code
//step 1: loop through array, checking val at i and adding it 
// two 
// if two indexes = limit, push those indexes into arrResult and return that variable. 
  /*       
  let length = arr.length;
  let pair = [];

  for (let i = 0; i < length; i++) {
    for (let j = i+1; j < length; j++) {
      if (arr[i] + arr[j] == limit) {
        pair = [j, i];
      }
    }
  }
  
  if (pair.length == 0) {
    return [];
  } else {
    return pair;
  }  
  
  */
