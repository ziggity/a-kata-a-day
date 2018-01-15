/*
Check if all digits of the given integer are even.

Example

For n = 248622, the output should be
evenDigitsOnly(n) = true;
For n = 642386, the output should be
evenDigitsOnly(n) = false.
*/

function evenDigitsOnly(n) {
let string1 = n.toString();

  for(var i=0; i<string1.length; i++){
    if(string1[i] % 2 != 0){
      return false
    }
  }
  return true


}
