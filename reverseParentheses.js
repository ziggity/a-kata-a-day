/* You are given a string s that consists of English letters, punctuation marks, whitespace characters and brackets. It is guaranteed that the brackets in s form a regular bracket sequence.

Your task is to reverse the strings in each pair of matching parenthesis, starting from the innermost one.

Example

For string "s = a(bc)de" the output should be

reverseParentheses(s) = "acbde".

Input/Output

[time limit] 4000ms (js) [input] string s

A string consisting of English letters, punctuation marks, whitespace characters and brackets. It is guaranteed that parenthesis form a regular bracket sequence.

Constraints:

5 ≤ x.length ≤ 55.

[output] string

It has to work with the following inputs:

s: "a(bcdefghijkl(mno)p)q" Expected Output: "apmnolkjihgfedcbq"
s: "co(de(fight)s)" Expected Output: "cosfighted"

*/

function reverseParentheses(s) {
  for(var i = 0; i < s.length; i++) {
    if(s[i] === ")") {
      s = s.substring(0, i) + s.substring(i + 1);
      i--;
      var reversed = "";
      while(s[i] !== "(") {
        reversed += s[i];
        s = s.substring(0, i) + s.substring(i + 1);
        i --;
      }
      s = s.substring(0, i) + reversed + s.substring(i + 1);
      i += reversed.length - 1;
    }
  }
  return s;
}

// Or

var reverse = (str) => str.split('').reverse().join('');

var reverseParentheses = (s) => {
    while (s.includes('(')) {
        var l = s.lastIndexOf('(');
        var r = s.indexOf(')', s.lastIndexOf('('));
        s = s.slice(0, l) + reverse(s.slice(l + 1, r)) + (r + 1 === s.length ? s.slice(r, -1) : s.slice(r + 1));
    }
    return s;
};

//OR

function reverseParentheses(s) {
    if (s.includes('(')){
        return reverseParentheses(reverseOnce(s));
    } else {     
        return s;
    }
}

function reverseOnce(s){
    var regexp = /\(([^()]*)\)/i;
    var subStr = regexp.exec(s)[1];
    subStr = subStr.split('').reverse().join('');
    return s.replace(regexp, subStr)
}

// So many ways to solve it, I found the slice method to be most intuitive for me. Disecting the string up, and juggling it and bringing it back together. 

