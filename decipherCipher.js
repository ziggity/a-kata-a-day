/*

Consider the following ciphering algorithm:

For each character replace it with its code.
Concatenate all of the obtained numbers.
Given a ciphered string, return the initial one if it is known that it consists only of lowercase letters.

Note: here the character's code means its decimal ASCII code, the numerical representation of a character used by most modern programming languages.

Example

For cipher = "10197115121", the output should be
decipher(cipher) = "easy".

Explanation: charCode('e') = 101, charCode('a') = 97, charCode('s') = 115 and charCode('y') = 121.
*/

function decipher(cipher) {
    let temp = 0;
    let result = '';
    let finalResult = '';
  
    for(let val in cipher){
       console.log(String.fromCharCode(parseInt(result)))
        result += cipher[val];
       if(parseInt(result)<=122 && parseInt(result)>=97){
         
         finalResult += String.fromCharCode(parseInt(result));
         result = '';
       }
    }
    return finalResult
}
// other method

function decipher(cipher) {
    return String.fromCharCode(...cipher.match(/1..|../g))
}


// other method

function decipher(cipher) {
    if(cipher.length < 1) {
        return "";
    }
    var regex = /^(97|98|99|\d\d\d)(.*)/;
    var match = regex.exec(cipher);
    console.log(match);
    return String.fromCharCode(match[1]) + decipher(match[2]);
}


// other 

function decipher(cipher) {
    var ca = 'a'.charCodeAt();
    var cz = 'z'.charCodeAt();
    
    var r = '';
    var num = '';
    for( var i=0; i<cipher.length; i++ ) {
        num += cipher.charAt( i );
        if( Number(num) >= ca && Number(num) <= cz ) {
            r += String.fromCharCode( Number(num) );
            num = '';
        }
    }
    return r;
}
