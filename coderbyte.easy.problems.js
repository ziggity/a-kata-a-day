

function FirstReverse(str) { 

  // first we split the string which creates an array of characters, e.g. ['c','a','t']
  // then we call the reverse method on this array 
  // and finally we turn the reversed array back into a string using the join function
  return str.split('').reverse().join('');
         
}


Step-by-step solution for First Reverse

        
 View the challenge 
          
This challenge requires you to reverse an input string. A string in programming is sequence of characters and a character is simply a symbol that you can enter for the computer to read, such as a,b,z,$,4,? etc. An example of a string may be: "Hello" or "abc123$??." Strings always need to be written between double or single quotes (" or ').

There exist several built-in functions in almost all languages that reverse a string for you very easily, so we'll cover how to first reverse a string manually and then we'll show you how to do it using built-in functions.

A simple way to reverse a string would be to create a new string and fill it with the characters from the original string, but backwards. To do this, we need to loop through the original string starting from the end, and every iteration of the loop we move to the previous character in the string. Here is an example: 

function FirstReverse(str) { 

  var newString = "";

  // add each character to newString
  for (var i = str.length - 1; i >= 0; i--) {   
    newString = newString + str.charAt(i);
  }

  return newString;
         
}
   
FirstReverse(readline());                            

Below is code that shows how to achieve this using built-in string and array functions.

function FirstReverse(str) { 

  // first we split the string which creates an array of characters, e.g. ['c','a','t']
  // then we call the reverse function on this array 
  // and finally we turn the reversed array back into a string using the join function
  return str.split('').reverse().join('');
         
}
   
FirstReverse(readline());                            

=========================================================
  
  function FirstFactorial(num) { 

  // code goes here  
  return num; 
         
}
   
// keep this function call here 
FirstFactorial(readline());                            


solution:


 View the challenge 
          
This challenge requires you to return the factorial of a given number. A factorial of some number N is N multiplied by (N-1) multiplied by (N-2) and so forth until you reach the number 1. For example, the factorial of 4 is 4 * 3 * 2 * 1 = 24. The algorithm for this will be quite simple, we'll loop from 1 to N multiplying each number by the previous one until we reach our number. Note: the notation for a factorial is ! so the factorial of 4 is written 4!

In the code below, we create a new variable called factorial which we will use to store our temporary values as we loop. In our loop, we start at 1 and increment until we reach our variable num.

function FirstFactorial(num) { 

  var factorial = 1;

  for (var i = 1; i <= num; i++) {  
    // multiply each number between 1 and num  
    // factorial = 1 * 1 = 1
    // factorial = 1 * 2 = 2
    // factorial = 2 * 3 = 6
    // factorial = 6 * 4 = 24
    // ...
    factorial = factorial * i;
  }

  return factorial;
         
}
   
FirstFactorial(4);                            

It is also possible to create a recursive function to calculate the factorial. A recursive function calls itself some number of times until it reaches a condition that terminates the function calls. A factorial function can be represented by the following recursive terms:

1! = 1
2! = 1! * 2
3! = 2! * 3
4! = 3! * 4
5! = 4! * 5
...

We can see that each factorial relies on the previous factorial, and then it multiplies that number by the current number. We'll convert these recursive terms into the following function:

function FirstFactorial(num) { 

  // our factorial function
  function factorial(n) { 
 
    // terminate the recursion once we hit zero
    if (n===0) { return 1; }

    // otherwise keep calling the function recursively 
    else { return factorial(n-1) * n; }

  }

  return factorial(num);
         
}
   
FirstFactorial(4);                            

While the above recursive implementation is correct, it may run slowly if you try to calculate the factorial of a very large number. One solution to this is memoization. Memoization is a technique used in programming where you store values that take a long time to calculate in a list, which you can then retrieve values from easily later on. You can read more about recursion and memoization here.



function LongestWord(sen) { 

  // code goes here  
  return sen; 
         
}
   
// keep this function call here 
LongestWord(readline());                            


Step-by-step solution for Longest Word

        
 View the challenge 
          
This challenge requires you to return the longest word in a sentence. Our goal is therefore to somehow loop through the string (what is a string?) and compare the lengths of the words. For example, if the string were "hello from coderbyte" the program should return the word "coderbyte" because it has the longest length. To solve this we need to:

1. Strip away any punctuation because the challenge tells us to ignore these symbols, so the string "hello$%()" is actually just "hello"
2. Separate the sentence into a list of words in order to easily retrieve words and their respective lengths
3. Then loop through this list and compare the words to find the one with the longest length 

We will be using regular expression functions in order to strip away punctuation and turn the string into a list of words. Regular expressions are patterns we define for the program to find in some text.

Below is some code that performs each of these steps:

function LongestWord(sen) { 

  // we use the regex match function which searches the string for the
  // pattern and returns an array of strings it finds
  // in our case the pattern we define below returns words with
  // only the characters a through z and 0 through 9, stripping away punctuation
  // e.g. "hello$% ##all" becomes [hello, all]
  var arr = sen.match(/[a-z0-9]+/gi);

  // the array sort function takes a function as a parameter
  // which is used to compare each element in the array to the
  // next element in the array
  var sorted = arr.sort(function(a, b) {
    return b.length - a.length;
  });

  // this array now contains all the words in the original
  // string but in order from longest to shortest length
  // so we simply return the first element
  return sorted[0];
         
}
   
LongestWord("the $$$longest# word is coderbyte");                            


============================
  

function LetterChanges(str) { 

  // code goes here  
  return str; 
         
}
   
// keep this function call here 
LetterChanges(readline());                            



Step-by-step solution for Letter Changes

        
 View the challenge 
          
This challenge requires you to change every letter in the string to the letter following it in the alphabet, so a becomes b, z becomes a, etc. Once every letter is changed, we then need to capitalize only the vowels, namely: a, e, i, o, u.

We will be changing the letters by using their respective ASCII values and adding 1 to them in order to get the next letter in the alphabet. ASCII values are just numbers that are assigned to each character in a sequential order, for example, the ASCII code for the letter a is 97 and b is 98. What we'll do is convert a letter to its ASCII number, add 1 to it, then convert this new number back into a character using a built-in character function.

function LetterChanges(str) { 

  // we will replace every letter in the string with the letter following it
  // by first getting the charCode number of the letter, adding 1 to it, then 
  // converting this new charCode number to a letter using the fromCharCode function
  // we also check to see if the character is z and if so we simply convert the z to an a
  var converted = str.replace(/[a-z]/gi, function(char) { 
    return (char === 'z' || char === 'Z') ? 'a' : String.fromCharCode(char.charCodeAt() + 1);
  });

  // we have now successfully converted each letter to the letter following it
  // in the alphabet, and all we need to do now is capitalize the vowels
  var capitalized = converted.replace(/a|e|i|o|u/gi, function(vowel) { 
    return vowel.toUpperCase();
  });

  // return the final string
  return capitalized;
         
}
   
LetterChanges("fun times!");        

===============================
function SimpleAdding(num) { 

  // code goes here  
  return num; 
         
}
   
// keep this function call here 
SimpleAdding(readline());                            




Step-by-step solution for Simple Adding

        
 View the challenge 
          
This challenge requires you to add up all the numbers from 1 to a given argument. For example, if the parameter num is 4, your program should add up 1 + 2 + 3 + 4 and return 10. This will be pretty simple to write out as a loop. We'll maintain a variable and keep adding to it as we loop from 1 to num.

function SimpleAdding(num) { 

  var answer = 0;

  // loop from 1 to num
  for (var i = 1; i <= num; i++) {
    answer = answer + i;
  } 

  return answer;
         
}

SimpleAdding(4);                                                    

 There is also a very clever way to calculate the sum of the numbers 1 + 2 + 3 + .... The sum of the first N natural numbers is equal to n(n+1)/2 (see proof and why this is so).

function SimpleAdding(num) { 

  return (num*(num+1))/2;
         
}

SimpleAdding(4);                                                    

=======================


function LetterCapitalize(str) { 

  // code goes here  
  return str; 
         
}
   
// keep this function call here 
LetterCapitalize(readline());                            

Step-by-step solution for Letter Capitalize

        
 View the challenge 
          
This challenge requires you to capitalize the first letter of each word. To do this, we'll create an array of words, then loop through each word and capitalize the first letter, and then combine these words back into one string. Below is some simple code to accomplish this:

function LetterCapitalize(str) { 
  
  // split the string into an array
  var words = str.split(" ");

  // we split the word into two parts and then combine the parts 
  // the first part is the first letter which we capitalize and the 
  // second part is the rest of the string
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].substring(0,1).toUpperCase() + words[i].substring(1);
  }

  // return the array of words joined into a string
  return words.join(" ");
         
}
   
LetterCapitalize("hello world from coderbyte");                                                                          

There is also another way to solve this challenge by using regular expressions and matching each word in the string and changing the first letter.

function LetterCapitalize(str) { 
  
  // our regex [a-z] matches every alphabetic character in the string
  // but the \b before it specifies a word boundary, in other words, nothing can 
  // come before those letters therefore selecting every word in the string
  return str.replace(/\b[a-z]/gi, function(char) { 
    return char.toUpperCase();
  });
         
}
   
LetterCapitalize("hello world from coderbyte");    
======================
  
  function SimpleSymbols(str) { 

  // code goes here  
  return str; 
         
}
   
// keep this function call here 
SimpleSymbols(readline());    


Step-by-step solution for Simple Symbols

        
 View the challenge 
          
This challenge requires you to determine if every alphabetic character in a string has a plus (+) symbol on the left and right side of itself. For example: the string "+a+b+c+" is good but the string "===+3+f=+b+" is not because the "f" does not have a plus symbol to its right. A very simple way to solve this challenge is to create a loop that every time it gets to an alphabetic character, it checks to see if it is surrounded by + symbols.

function SimpleSymbols(str) { 

  // pad the strings so that if a character exists at the beginning
  // of the string for example, we don't get on out-of-bounds error by
  // trying to get the character before it
  var str = '=' + str + '=';

  // loop through entire string
  for (var i = 0; i < str.length; i++) {
    
    // check to see if current character is an alphabetic character  
    // by using a simple case-insensitive regex pattern 
    if (str[i].match(/[a-z]/i) !== null) {

      // check to see if a + symbol is to the left and right
      // if not, then we know this string is not valid
      if (str[i-1] !== '+' || str[i+1] !== '+') { 
        return false;
      }

    }
 
  }

  return true;
  
}
   
SimpleSymbols("+d+=3=+s+");                                                                                                
=========================
  
  
  
  function CheckNums(num1,num2) { 

  // code goes here  
  return num1 + num2; 
         
}
   
// keep this function call here 
CheckNums(readline());                            

Step-by-step solution for Check Nums

        
 View the challenge 
          
This challenge requires you to return the string "true" if the second integer parameter (num2) is larger than the first (num1). This is actually a very simple challenge which doesn't require a lot of code.

function CheckNums(num1, num2) { 

  // we use a ternary expression to write as little code as possible
  return (num2 === num1) ? '-1' : (num2 > num1) ? true : false;
         
}
   
CheckNums(3, 122);            

===============================
  
  
  function TimeConvert(num) { 

  // code goes here  
  return num; 
         
}
   
// keep this function call here 
TimeConvert(readline());                            


Step-by-step solution for Time Convert

        
 View the challenge 
          
This challenge requires you to convert an integer, which represents the number of minutes, for example 63 means 214 minutes, and convert this integer into hours and minutes. So if the input was 63, then your program should output the string '1:3' because 63 minutes converts to 1 hour and 3 minutes.

We will use the modulo operation to solve this challenge. The modulo operation simply returns the remainder after a division, so for example, the remainder of 5 / 2 is 1, so the modulo of 5 / 2 is 1.

function TimeConvert(num) { 

  // to get the hours, we divide num by 60 and round it down
  // e.g. 61 / 60 = 1 hour
  // e.g. 43 / 60 = 0 hours
  var hours = Math.floor(num / 60);

  // to get the minutes, now we use the remainder that we discarded above
  // the modulo operation is represented by the % symbol
  // e.g. 61 % 60 = 1 minute
  // e.g. 43 % 60 = 43 minutes
  var minutes = num % 60;

  // combine the hours and minutes
  return hours + ':' + minutes;
         
}
   
TimeConvert(124);              

================================
  
  function AlphabetSoup(str) { 

  // code goes here  
  return str; 
         
}
   
// keep this function call here 
AlphabetSoup(readline());                            


Step-by-step solution for Alphabet Soup

        
 View the challenge 
          
This challenge requires you to alphabetically sort the characters in a string. We'll sort the characters using the built-in array sort function.

function AlphabetSoup(str) { 

  // convert the string into an array of characters
  var chars = str.split("");

  // sort the array in alphabetical order
  var sorted = chars.sort();

  // return the newly sorted string
  return sorted.join("");
         
}
   
AlphabetSoup("coderbyte");  
