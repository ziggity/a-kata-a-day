
/*

Given a string, replace each its character by the next one in the English alphabet (z would be replaced by a).

Example

For inputString = "crazy", the output should be
alphabeticShift(inputString) = "dsbaz"

*/

function alphabeticShift(inputString) {
    let alphabet = ("abcdefghijklmnopqrstuvwxyz").split("");
    inputString = inputString.split('')
    
    for(let i=0; i<inputString.length; i++){
        let indexValue = 0;
        if(inputString[i] != 'z'){
          indexValue = alphabet.indexOf(inputString[i])+1;
        }
        inputString[i]  = alphabet[indexValue];
    }
           return inputString.join('')                                             
    
}
