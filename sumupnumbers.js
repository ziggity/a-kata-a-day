
function sumUpNumbers(inputString) {

  var answer = 0,
  currentNumber = 0;

  for (var i = 0; i < inputString.length; i++) {
    if ('0' <= inputString[i] && inputString[i] <= '9') {
      currentNumber = currentNumber * 10 + inputString.charCodeAt(i) - '0'.charCodeAt(0);
    }
    else {
      answer += currentNumber;
      currentNumber = 0;
    }
  }
  answer += currentNumber;

  return answer;
}

sumUpNumbers("2 apples, 12 oranges") //14
// CodeMaster has just returned from shopping. He scanned the check of the items he bought and gave the resulting string to Ratiorg to figure out the total number of purchased items. Since Ratiorg is a bot he is definitely going to automate it, so he needs a program that sums up all the numbers which appear in the given input.

// Help Ratiorg by writing a function that returns the sum of numbers that appear in the given inputString.

// Example

// For inputString = "2 apples, 12 oranges", the output should be
// sumUpNumbers(inputString) = 14.
