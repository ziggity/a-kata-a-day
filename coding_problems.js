/*
1.You are given an array of 0 - n unique integers with a missing integer. Write an
algorithm that returns the missing integer.
*/
//Naive way: (sort array then for loop through it return i that is not equal to arr[i])

function missingInt(arr){
  arr = arr.sort();
  for(let i=0; i<arr.length; i++){
    if(arr[i] != i) return i
  }
  return false
}
arr = [0,1,2,3,4,6,7] // 5

missingInt(arr);
/*
2.Implement an algorithm to determine if a string has all unique characters.
*/
// going to build a hash map / dictionary / key value store object literal.
// also could use the JS Set() object as well since it only allows one unique item
//The Set object lets you store unique values of any type, whether primitive values or object references.
function hasSingleChar(str){
  if(str.length > 26) return false;
  var mySet = new Set();
  for(let i=0; i<str.length; i++){
    if(mySet.has(str[i])){
      return false;
    }
    else{
      mySet.add(str[i]);
    }
  }
  return true
}

hasSingleChar('hello')
/*
3.FizzBuzz Reinvented: Write a routine in your favourite programming language that
will take a list of strings as input, and for each string in the list will do one of the
following:
1. Print only Fizz if the string contains the letter A
2. Print only Buzz if the string contains the letter B
3. Print only BuzzBuzz if the string contains both A and B
*/
function fizzBuzzRe(arr){
  let result = '';
  for(let i=0; i<arr.length; i++){
  if(arr[i].indexOf('A') && arr[i].indexOf('B')){
          result = result + 'BuzzBuzz';
        }
    if(arr[i].indexOf('A')){
      result = result + 'Fizz';
    }if(arr[i].indexOf('B')){
          result = result + 'Buzz' ;
        }
  }
  return result
  
}

fizzBuzzRe(['arrary', 'of', 'a', 'list', 'of', 'strings'])//not working just yet
/*
4.Find the first non-repeating character in a string.
*/
function firstUniqueChar(str) {
  var counter = {};
  for (i=0; i<str.length; i++){
      var currentChar = str[i];
      if(counter[currentChar]) {
        counter[currentChar]++;
      } else {
        counter[currentChar] = 1;
      }
  }
    for (i=0; i<str.length; i++){
       currentChar = str[i];
      if(counter[currentChar]==1) {
        return currentChar;
      }
  }
return "Does not contain a non-repeating character";
}

firstUniqueChar("baby") //'a'
*/
/*
5.Assume you have two sorted lists, merge them together to make one sorted list.
*/
