function differentSymbolsNaive(s) {
  let object1 = {};
  
  for(var i=0; i<s.length; i++){
    if(object1[s[i]]){
      object1[s[i]] ++
    }else{
      object1[s[i]] = 1;
    }
  }
  return Object.keys(object1).length;

}
// Given a string, find the number of different characters in it.

// Example

let s = "cabca";
differentSymbolsNaive(s)//3

// There are 3 different characters a, b and c.
