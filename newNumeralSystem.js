/*
Your Informatics teacher at school likes coming up with new ways to help you understand the material. When you started studying numeral systems, he introduced his own numeral system, which he's convinced will help clarify things. His numeral system has base 26, and its digits are represented by English capital letters - A for 0, B for 1, and so on.

The teacher assigned you the following numeral system exercise: given a one-digit number, you should find all unordered pairs of one-digit numbers whose values add up to the number.

Example

For number = 'G', the output should be
newNumeralSystem(number) = ["A + G", "B + F", "C + E", "D + D"].

Translating this into the decimal numeral system we get: number = 6, so it is ["0 + 6", "1 + 5", "2 + 4", "3 + 3"].

*/

function newNumeralSystem(number) {
let alpha = { 'A':0,'B':1,'C':2,'D':3,'E':4,'F':5,'G':6,'H':7,'I':8,'J':9,'K':10,'L':11,'M':12, 'N':13, 'O':14,'P':15,'Q':16,'R':17,'S':18,'T':19,'U':20,'V':21,'W':22,'X':23,'Y':24,'Z':25 };
let result = [];
if(number == 'A') return [`${number} + ${number}`]
  for(let key in alpha){
    result.push(key)
       if(key == number){
      break;
       }
  }
let resultClone = result.slice();
var rightSide = resultClone.splice(Math.floor(resultClone.length / 2),resultClone.length-1).reverse();

var leftSide = result.splice(0,Math.ceil(result.length / 2));
var leftSide2 =leftSide.slice();
let finalResult = [];
console.log(leftSide2, rightSide)
for(var i=0; i<leftSide2.length; i++){
  console.log('hi')
  finalResult.push(`${leftSide2[i]} + ${rightSide[i]}`)
    
  
}
  return finalResult
  
}

// other method

function newNumeralSystem(number) {

    function toNS( n ) {
        return String.fromCharCode('A'.charCodeAt()+n);
    }
    
    function fromNS( ch ) {
        return ch.charCodeAt() - 'A'.charCodeAt();
    }
    
    var iNumber = fromNS(number);
    var result = [];
    
    for( var i=0; i<=iNumber/2; i++ ) {
        var j = iNumber-i;
        result.push( toNS(i) + " + " + toNS(j) );
    }
    
    return result;
}
// other method

function newNumeralSystem(number) {
    var n = number.charCodeAt(0) - 65,
        numToChar = (num) => String.fromCharCode(65 + num),
        result = [];
    for (var i = 0; i <= n / 2; i++) {
        result.push(`${numToChar(i)} + ${numToChar(n - i)}`);
    }
    return result;
}

