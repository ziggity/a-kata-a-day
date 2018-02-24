/*
Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
# returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
# returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
# returns 'Bart'

list([])
# returns ''
*/
// my solution: only newer browsers can take this Object.values it seems
function list(names){
if (names.length <1) return '';
  if (names.length === 1) {
  return Object.values(names[0]).toString()   
  }
  let final = names.map(function(x){return x.name; }).join(', ')
  final = final.split('');
  
  for(let i = final.length; i>=1; i--){
    if (final[i] === ','){
      final.splice(i, 1, ' &')
      return final.join('')
    }
  }
}

// top rated solution: regex / map / join

function list(names){
  return names.map(function(x){ return x.name; }).join(", ").replace(/,(?!.*,)/gmi, " &");
}
