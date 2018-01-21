Simple piglatin - 

Move the first letter of each word to the end of it, then add 'ay' to the end of the word.

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay

...............................................................................................

Thoughts:
1.First we'll split the words up, move the first letter to the end of it, and add ay to the end, too.
2.We'll have to check for index 0, and the length of the word
3. Use the trim method, to get rid of white space. 18 lines of code.

Refactored code:
1. taking the input, splitting it on the white space (seperate the words) ' ', make a clone of the array using map method, return that clone 
+the sliced index of 1, and the slice index of 0 and 1, + ay at the end, join them at the white space. 4 lines of code

-----------------------------------------------------------------------------------------------

Simple solution: 
function pigIt(str){
  //Code here
  var res = "";
  var begin = 0;
  for (var i = 0; i < str.length; i++)
  {
    if (i == begin)
      i += 1;
    if (str[i] != ' ')
      res += str[i];
    else
    {
      res += str[begin] + 'ay ';
      begin = i+1;
    }
  }
  res += str[begin] + 'ay ';
  return res.trim();
}

Refactored: 

function pigIt(str){
  return str.split(' ').map(function(el){
    return el.slice(1) + el.slice(0,1) + 'ay';
  }).join(' ');
}
