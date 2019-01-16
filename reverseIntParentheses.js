
/*

Write a function that reverses characters in (possibly nested) parentheses in the input string.

Input strings will always be well-formed with matching ()s.

Example

For inputString = "(bar)", the output should be
reverseInParentheses(inputString) = "rab";
For inputString = "foo(bar)baz", the output should be
reverseInParentheses(inputString) = "foorabbaz";
For inputString = "foo(bar)baz(blim)", the output should be
reverseInParentheses(inputString) = "foorabbazmilb";
For inputString = "foo(bar(baz))blim", the output should be
reverseInParentheses(inputString) = "foobazrabblim".
Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim".

*/


function reverseInParentheses(s) {
    // We keep running the function while 
    // there's an opening bracket in the string
    while (s.indexOf("(") !== -1) {
        s = reverseP(s);
    }
    return s;
}

function reverseP(s) {
    let len = s.length;
    // We find the innermost/last opening bracket,
    // and then we're going to find the matching closing bracket,
    // which is the next closing bracket after the opening bracket
    let openBracketInd = s.lastIndexOf("(");
    
    // The characters before the opening bracket
    let beforeBracket = s.slice(0, openBracketInd+1);
    
    // The characters before the opening bracket
    let afterBracket = s.slice(openBracketInd+1, len);
    
    // To get the index of the closing bracket we add the 
    // characters before the bracket to the index of the first closing
    // bracket in the string after the opening bracket
    let closeBracketInd = beforeBracket.length + afterBracket.indexOf(")");
    
    // Once we have the indexes, we're going to slice the string 
    // to remove the brackets
    let firstPart = s.slice(0, openBracketInd);
    let secondPart = s.slice(closeBracketInd+1, len);
    let middle = s.slice(openBracketInd+1, closeBracketInd);
    
    // We reverse the string between the brackets
    middle = middle.split('').reverse().join('');
    
    // And finally we join the parts and return the string
    return firstPart+middle+secondPart;
}
