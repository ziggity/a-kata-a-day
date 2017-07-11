

function FirstReverse(str) { 

  // first we split the string which creates an array of characters, e.g. ['c','a','t']
  // then we call the reverse method on this array 
  // and finally we turn the reversed array back into a string using the join function
  return str.split('').reverse().join('');
         
}
