/*
Implement the missing code, denoted by ellipses. You may not modify the pre-existing code.
A sentence is considered correct if:

it starts with a capital letter;
it ends with a full stop, question mark or exclamation point ('.', '?' or '!');
full stops, question marks and exclamation points don't appear anywhere else in the sentence.
Given a sentence, return true if it is correct and false otherwise.

Example

For sentence = "This is an example of *correct* sentence.",
the output should be
isSentenceCorrect(sentence) = true;

For sentence = "!this sentence is TOTALLY incorrecT",
the output should be
isSentenceCorrect(sentence) = false.
*/

function isSentenceCorrect(sentence) {
  var re = /^[A-Z][^?.!]*[?.!]$/;
  return re.test(sentence);
}

// /^[A-Z] = Beginning: first char in string
//[^?.!] = Negated set: make sure no other ?.! appears instring
//*[?.!]$/; = Quantifier: last char contains at least one of these

/*
Implement the missing code, denoted by ellipses. You may not modify the pre-existing code.
Implement a function that replaces each digit in the given string with a '#' character.

Example

For input = "There are 12 points", the output should be
replaceAllDigitsRegExp(input) = "There are ## points".
*/
function replaceAllDigitsRegExp(input) {

  return  input.replace(/\d/g, '#') ;
}

// input.replace(/\d/g, '#') ;

//replace method takes two parameters, in this case we use regex as one, and other as the char we are going to sub in (scan for digits global)

/*
Implement the missing code, denoted by ellipses. You may not modify the pre-existing code.
You are given a string consisting of words separated by whitespace characters, where the words consist only of English letters. Your task is to swap pairs of consecutive words and return the result.

Example

For s = "CodeFight On", the output should be
swapAdjacentWords(s) = "On CodeFight";
For s = "How are you today guys", the output should be
swapAdjacentWords(s) = "are How today you guys".
Input/Output

[execution time limit] 3 seconds (cs)

[input] string s

A string consisting of whitespace characters (' ') and English letters. There is exactly one whitespace character between two consecutive words, and both the first and the last characters of s are not equal to ' '.
*/
function swapAdjacentWords(s) {
  return s.replace(/([\w]+) (\w+)/g, "$2 $1");
}

//s.replace(/([\w]+) ( = Character set checking work + white space
// \w+)/g, = same as above case insensitve
// "$2 $1"); = swap 1st one with 2nd


/*
Implement the missing code, denoted by ellipses. You may not modify the pre-existing code.
You are given a string s of characters that contains at least n numbers (here, a number is defined as a consecutive series of digits, where any character immediately to the left and right of the series are not digits). The numbers may contain leading zeros, but it is guaranteed that each number has at least one non-zero digit in it.

Your task is to find the nth number and return it as a string without leading zeros.

Example

For s = "8one 003number 201numbers li-000233le number444" and n = 4,
the output should be
nthNumber(s, n) = "233".
*/

function nthNumber(s, n) {
  var re = new RegExp(`(?:[0-9]+[^0-9]+){${n-1}}0*([0-9]+)`);
  return re.exec(s)[1];
}

//new RegExp(`(?:[0-9]+[^0-9]+) = Capturing group one
//{${n-1}}0*([0-9]+)`);





