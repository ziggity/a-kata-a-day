
Simple bubble sort method: using the some method in js I can write one for loop, that checks wheter some element in the array passes the test implemented by the function


function bubbleSort(array) {
  var next2last = array.length - 1; // 6
  
  array.some(function() {
    var isNotSwapped = true; // true true true 
    
    for (var index = 0; index < next2last; index += 1) {
      
      var nextIndex = index + 1; // 123456123456123456
      
      if (array[index] > array[nextIndex]) {
        var holder = array[nextIndex];   // 9 11 14 13 11 13 
        
        array[nextIndex] = array[index];  // 1 3 4 5 2 4 
        
        array[index] = holder; // 9 11 13 13 14 15 16 
        isNotSwapped = false;
      }
    }
    return isNotSwapped;
  });
}

var numbers = [13, 9, 15, 11, 14, 13, 16];
bubbleSort(numbers);
console.log(numbers);


Description
some() executes the callback function once for each element present in the array until it finds one where callback returns a truthy value (a value that becomes true when converted to a Boolean). If such an element is found, some() immediately returns true. Otherwise, some() returns false. callback is invoked only for indexes of the array which have assigned values; it is not invoked for indexes which have been deleted or which have never been assigned values.

callback is invoked with three arguments: the value of the element, the index of the element, and the array object being traversed.

If a thisArg parameter is provided to some(), it will be used as callbacks' this value. Otherwise, the value undefined will be used as its this value. The this value ultimately observable by callback is determined according to the usual rules for determining the this seen by a function.

some() does not mutate the array on which it is called.

The range of elements processed by some() is set before the first invocation of callback. Elements that are appended to the array after the call to some() begins will not be visited by callback. If an existing, unvisited element of the array is changed by callback, its value passed to the visiting callback will be the value at the time that some() visits that element's index; elements that are deleted are not visited.

Examples
Testing value of array elements

The following example tests whether any element in the array is bigger than 10.

function isBiggerThan10(element, index, array) {
  return element > 10;
}

[2, 5, 8, 1, 4].some(isBiggerThan10);  // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true
Testing array elements using arrow functions

Arrow functions provide a shorter syntax for the same test.

[2, 5, 8, 1, 4].some(x => x > 10);  // false
[12, 5, 8, 1, 4].some(x => x > 10); // true
Checking whether a value exists in an array

The following example returns true if the element exists in the array:

var fruits = ['apple', 'banana', 'mango', 'guava'];

function checkAvailability(arr, val) {
  return arr.some(function(arrVal) {
    return val === arrVal;
  });
}

checkAvailability(fruits, 'kela');   // false
checkAvailability(fruits, 'banana'); // true
