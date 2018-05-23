/*
Given an array of 2k integers (for some integer k), perform the following operations until the array contains only one element:

On the 1st, 3rd, 5th, etc. iterations (1-based) replace each pair of consecutive elements with their sum;
On the 2nd, 4th, 6th, etc. iterations replace each pair of consecutive elements with their product.
After the algorithm has finished, there will be a single element left in the array. Return that element.

Example

For inputArray = [1, 2, 3, 4, 5, 6, 7, 8], the output should be
arrayConversion(inputArray) = 186.

We have [1, 2, 3, 4, 5, 6, 7, 8] -> [3, 7, 11, 15] -> [21, 165] -> [186], so the answer is 186.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer inputArray

Guaranteed constraints:
1 ≤ inputArray.length ≤ 20,
-9 ≤ inputArray[i] ≤ 99.
*/

function arrayConversion(inputArray) {
  var operation = 1;
  while (inputArray.length > 1) {
    var newArray = [];
    for (var i = 0; i < inputArray.length; i += 2) {
      if (operation % 2 === 1) {
        newArray.push(inputArray[i] + inputArray[i + 1]);
      } else {
        newArray.push(inputArray[i] * inputArray[i + 1]);
      }
    }
    inputArray = newArray.slice();
    operation++;
  }
  return inputArray[0];
}



// other method

arrayConversion = (a, bMult) =>
    a.length == 1? a[0] :
        arrayConversion(a.reduce((p,c,i) => (i&1 && p.push(bMult ? c*a[i-1] : c+a[i-1]), p), []), !bMult)


