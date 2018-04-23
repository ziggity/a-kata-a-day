/*
Proper nouns always begin with a capital letter, followed by small letters.

Correct a given proper noun so that it fits this statement.

Example

For noun = "pARiS", the output should be
properNounCorrection(noun) = "Paris";
For noun = "John", the output should be
properNounCorrection(noun) = "John".
*/
function properNounCorrection(noun) {
noun = noun.toLowerCase();
let result = ''
  for(let i=0; i<noun.length; i++){
    if(noun.length<=1) return noun.toUpperCase();
    if(i == 0){
     result = result + noun[i].toUpperCase();
     i++;
    } 
    result = result + noun[i] 
  }
    
    return result
}

// eloquent method

function properNounCorrection(noun) {
    return noun[0].toUpperCase() + noun.slice(1).toLowerCase();
}
