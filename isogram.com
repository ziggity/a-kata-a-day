/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

isIsogram( "Dermatoglyphics" ) == true
isIsogram( "aba" ) == false
isIsogram( "moOse" ) == false // -- ignore letter case
*/
// my solution: build an obj key value store, loop through it check if values greater than 1 exist, break out if does

function isIsogram(str){
  if(str === '') return true;
  str = str.toLowerCase();
  let obj1 = {};
  for(let j=0; j<str.length; j++){
    if(obj1[str[j]]){
      obj1[str[j]] ++
    }
    else{
    obj1[str[j]] = 1}
  }
  for(let key in obj1){
    if(obj1[key] >1) return false
  }
  return true
}

// or: polynomial time On^2
function isIsogram(str){
  var i, j;
  str = str.toLowerCase();
  for(i = 0; i < str.length; ++i)
    for(j = i + 1; j < str.length; ++j)
      if(str[i] === str[j])
        return false;
  return true;
}

