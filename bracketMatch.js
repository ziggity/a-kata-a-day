/*
A string of brackets is considered correctly matched if every opening bracket in the string can be paired up with a later closing bracket, and vice versa. For instance, “(())()” is correctly matched, whereas “)(“ and “((” aren’t. For instance, “((” could become correctly matched by adding two closing brackets at the end, so you’d return 2.
Given a string that consists of brackets, write a function bracketMatch that takes a bracket string as an input and returns the minimum number of brackets you’d need to add to the input in order to make it correctly matched.
Explain the correctness of your code, and analyze its time and space complexities.
Examples:
input:  text = “(()”
output: 1
input:  text = “(())”
output: 0
input:  text = “())(”
output: 2
Constraints:
[time limit] 5000ms
[input] string text
1 ≤ text.length ≤ 5000
[output] integer

- see brackets and want to determine the # of brackets needed to make it equal and make sure each bracket is a pair 
*/

/*
function bracketMatch(str) {
  let i = 0;
  let tempA = '';
  
  while(i < str.length - 1) {
    if (str[i] === '(' && str[i + 1] === ')') {
      if (str[i + 2] === 'undefined') {
        tempA = '';
      } else {
        tempA = str.slice(i + 2, str.length);
      }
      str = str.slice(0, i) + tempA;
      i = 0;
    } else {
      i++;
    }
  }
  
  return str.length; 
}
*/

function bracketMatch(str) {
  let counterOpen = 0; 
  let counterClose = 0; 
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      counterOpen++; 
    } else if (counterOpen > 0 && str[i] === ')') {
      counterOpen--; 
    } else {
      counterClose++;
    }
  }
  return counterOpen + counterClose;
}



console.log(bracketMatch('())('))
