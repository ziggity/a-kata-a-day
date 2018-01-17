/*
Find the leftmost digit that occurs in a given string.

Example

For inputString = "var_1__Int", the output should be
firstDigit(inputString) = '1';
For inputString = "q2q-q", the output should be
firstDigit(inputString) = '2';
For inputString = "0ss", the output should be
firstDigit(inputString) = '0'.
Input/Output

[execution time limit] 4 seconds (js)

[input] string inputString

A string containing at least one digit.

Guaranteed constraints:
3 ≤ inputString.length ≤ 10.
*/

function firstDigit(inputString) {
    
    
   let result = inputString.match(/^\d+|\d+\b|\d+(?=\w)/g);
   
   for(i=0;i<result.length;i++){
      return result[0][0];
   }
  
    
}
