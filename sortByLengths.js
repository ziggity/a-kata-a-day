/*
Given an array of strings, sort them in the order of increasing lengths. If two strings have the same length, their relative order must be the same as in the initial array.

Example

For

inputArray = ["abc",
              "",
              "aaa",
              "a",
              "zz"]
the output should be

sortByLength(inputArray) = ["",
                            "a",
                            "zz",
                            "abc",
                            "aaa"]
                            */
                            
  function sortByLength(inputArray) {
    inputArray.sort(
        function (x, y) {
            var cx = x.length;
            var cy = y.length;
            return cx - cy;
            
        }
    );
    return inputArray;
    
}

// or this method shorter es6

function sortByLength(inputArray) {
    inputArray.sort((a, b) => a.length - b.length);
    return inputArray;
}

// 
