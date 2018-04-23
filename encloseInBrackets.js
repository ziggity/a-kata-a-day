/*
Given a string, enclose it in round brackets.

Example

For inputString = "abacaba", the output should be
encloseInBrackets(inputString) = "(abacaba)"
*/

function encloseInBrackets(inputString) {
  inputString = inputString.split('')
    inputString.splice(0,0,'(');
    inputString.splice(inputString.length, 0, ')')
    return inputString.join('')
}

//other way

function encloseInBrackets(inputString) {
    return "(" + inputString + ")"
}

// es6

encloseInBrackets=(s)=>`(${s})`;

