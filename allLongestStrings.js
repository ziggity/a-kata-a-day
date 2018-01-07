/*
Given an array of strings, return another array containing all of its longest strings.

Example

For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

Input/Output

[execution time limit] 4 seconds (js)

[input] array.string inputArray

A non-empty array.

Guaranteed constraints:
1 ≤ inputArray.length ≤ 10,
1 ≤ inputArray[i].length ≤ 10.

[output] array.string

Array of the longest strings, stored in the same order as in the inputArray.

[JavaScript (ES6)] Syntax Tips
*/

function allLongestStrings(inputArray) {
  var max = inputArray[0].length;
  inputArray.map(v => max = Math.max(max, v.length));
  inputArray = inputArray.filter(v => v.length == max);
  return inputArray;
}

function allLongestStrings(inputArray) {
  var answer = [inputArray[0]];
  for(var i = 1; i < inputArray.length; i++) {
    if(inputArray[i].length === answer[0].length) {
      answer.push(inputArray[i]);
    }
    if(inputArray[i].length > answer[0].length) {
      answer = [inputArray[i]];
    }
  }
  return answer;
}
