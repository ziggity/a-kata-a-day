const isNext = (string1, string2) =>
  1 === string1
          .split('')
          .reduce((acc, item, index) => acc + +(item !== string2[index]), 0)


const arranged = array => {
  for (let i = 0; i + 1 < array.length; i++) {
    if (!isNext(array[i], array[i + 1]))
      return false
  }
  return true
}

const findNext = (string, array) => {
  let index = -1
  for (let i = 0; i < array.length && index == -1; i++) {
    if (isNext(string, array[i]))
      index = i
  }
  return index
}

const stringsRearrangement = arr => {
  let next = 0

  arr.sort()

  for (let i = 0; i < arr.length && next >= 0 && !arranged(arr); i++) {
    next = findNext(arr[i], arr)

    if (next >= 0 && (next > i + 1 || next < i - 1)) {
      arr.splice(i + 1, 0, arr[next])

      const start = (next < i + 1) ? next : next + 1
      arr.splice(start, 1)
    }
  }
  return arranged(arr)
}
//-------------------------------- 
// This solution below fails to meet a few hidden tests:
function stringsRearrangement(inputArray) {
  var bruteForce = function(depth, inputArray) {
    var swap = function(i, j) {
      tmp = inputArray[i];
      inputArray[i] = inputArray[j];
      inputArray[j] = tmp;
    };
    if (depth === inputArray.length) {
      for (var i = 0; i < inputArray.length - 1; i++) {
        var differences = 0;
        for (var j = 0; j < inputArray[i].length; j++) {
          if (inputArray[i][j] !== inputArray[i + 1][j]) {
            differences++;
             console.log(differences,inputArray[i], inputArray[j])
          }
        }
        if (differences !== 1) {
          return false;
        }
      }
      return true;      
    }
    for (var i = depth; i < inputArray.length; i++) {
      swap(depth, i);
      if (bruteForce(depth + 1, inputArray)) {
        return true;
      }
      swap(depth, i);
    }
    return false;
  };
  return bruteForce(0, inputArray);    
}

// Given an array of equal-length strings, check if it is possible to rearrange the strings in such a way that after the rearrangement the strings at consecutive positions would differ by exactly one character.

// Example

// For inputArray = ["aba", "bbb", "bab"], the output should be
// stringsRearrangement(inputArray) = false;

// All rearrangements don't satisfy the description condition.

let inputArray = ["ab", "bb", "aa"];
stringsRearrangement(inputArray); //true

// Strings can be rearranged in the following way: "aa", "ab", "bb".
// Input/Output
