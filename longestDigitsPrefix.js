function longestDigitsPrefix(inputString) {
let digits = "0123456789".split('')
inputString = inputString.split('');
let prefix = [];

for(let i=0; i<inputString.length; i++){
  if(digits.includes(inputString[i]) === false){
    break;
  }
  prefix.push(inputString[i]);
}
return prefix.join('')
}

// Given a string, output its longest prefix which contains only digits.

// Example

let inputString="123aa1"

longestDigitsPrefix(inputString) // '123'
