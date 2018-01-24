// Your task is to make a function that can take any non-negative integer as a
// argument and return it with it's digits in descending order. Descending order
// means that you take the highest digit and place the next highest digit.
// immediately after it.

function descendingOrder(n){
  var digits = String(n).split('');

  digits.sort(function(a, b){
    return b - a;
  });

  return parseInt(digits.join(''));
}

// or this way in a few lines:

function descendingOrder(n){
return parseInt(n.toString().sort().join(''))
}
