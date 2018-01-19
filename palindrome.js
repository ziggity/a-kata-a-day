Palindrome chain length

Number is a palindrome if it is equal to the number with digits in reversed order. For example, 5, 44, 171, 4884 are palindromes and 43, 194, 4773 are not palindromes.

Write a method palindrome_chain_length which takes a positive number and returns the number of special steps needed to obtain a palindrome. The special step is: "reverse the digits, and add to the original number". If the resulting number is not a palindrome, repeat the procedure with the sum until the resulting number is a palindrome.

If the input number is already a palindrome, the number of steps is 0.

Input will always be a positive integer.

For example, start with 87:

87 + 78 = 165; 165 + 561 = 726; 726 + 627 = 1353; 1353 + 3531 = 4884

4884 is a palindrome and we needed 4 steps to obtain it, so palindrome_chain_length(87) == 4


.........................................................................................
Thoughts:

1.Reverse the input, to check for palindrome, if not paldindrome add them together like in the example, and count how many times it takes to get to the paldindrome. 
2.For loop, comparing, and pushing a counter up each time
3.return the total number of times it took to get to the paldinrome answer. 



..........................................................................................

    var count = 0;
    var palindrome = parseInt((n + '').split('').reverse().join(''));
    while (palindrome !== n) { // while the palindrome var is not equal to the input value of n, we need to do this:
      n = parseInt(n) + parseInt(palindrome); // adding the two values together
      console.log(n)
      palindrome = parseInt((n + '').split('').reverse().join('')); // we need this here or else we run into infinite loop
      ++count;
      console.log(count);
    }
 
    return count;
   
  };
  
  palindromeChainLength("553")
  
  consolelogs: 
908
1
1717
2
8888
3
=> 3
