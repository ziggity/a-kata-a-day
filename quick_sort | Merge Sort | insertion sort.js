Insertion sort: 

var arrayRandom = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
var arrayOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arrayReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function insertionSort(array) {
  var countOuter = 0;
  var countInner = 0;
  var countSwap = 0;

  for(var i = 0; i < array.length; i++) {
    countOuter++;
    var temp = array[i];
    console.log(temp)
    var j = i - 1;
    while (j >= 0 && array[j] > temp) {
      countInner++;
      countSwap++;
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }

  console.log('outer:', countOuter, 'inner:', countInner, 'swap:', countSwap);
  return array;
}

insertionSort(arrayRandom.slice()); // => outer: 10 inner: 21 swap: 21
insertionSort(arrayOrdered.slice()); // => outer: 10 inner: 0 swap: 0
insertionSort(arrayReversed.slice()); 


----------------------------------------------------------------------------------------------------------------

Merge Sort: 

var arrayRandom = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
var arrayOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arrayReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

var countOuter = 0;
var countInner = 0;
var countSwap = 0;

function resetCounters() {
  countOuter = 0;
  countInner = 0;
  countSwap = 0;
}

// basic implementation (pivot is the first element of the array)
function quicksortBasic(array) {
  countOuter++;
  if(array.length < 2) {
    return array;
  }

  var pivot = array[0];
  var lesser = [];
  var greater = [];

  for(var i = 1; i < array.length; i++) {
    countInner++;
    if(array[i] < pivot) {
      lesser.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }

  return quicksortBasic(lesser).concat(pivot, quicksortBasic(greater));
}

quicksortBasic(arrayRandom.slice()); // => outer: 13 inner: 25 swap: 0
console.log('outer:', countOuter, 'inner:', countInner, 'swap:', countSwap);
resetCounters();

quicksortBasic(arrayOrdered.slice()); // => outer: 19 inner: 45 swap: 0
console.log('outer:', countOuter, 'inner:', countInner, 'swap:', countSwap);
resetCounters();

quicksortBasic(arrayReversed.slice()); // => outer: 19 inner: 45 swap: 0
console.log('outer:', countOuter, 'inner:', countInner, 'swap:', countSwap);
resetCounters();

console.log(quicksortBasic(arrayReversed))

----------------------------------------------------------------------------------------------------------------
Quick sort 

//Quicksort is a divide and conquer algorithm. Quicksort first divides a large array into two smaller sub-arrays: the low elements and the high elements. Quicksort can then recursively sort the sub-arrays.


var arrayRandom = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
var arrayOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arrayReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

var countOuter = 0;
var countInner = 0;
var countSwap = 0;

function resetCounters() {
  countOuter = 0;
  countInner = 0;
  countSwap = 0;
}

// basic implementation (pivot is the first element of the array)
function quicksortBasic(array) {
  countOuter++;
    console.log(countOuter);
  if(array.length < 2) {
    return array;
  }

  var pivot = array[0];
  var lesser = [];
  var greater = [];

  for(var i = 1; i < array.length; i++) {
    countInner++;
  
    if(array[i] < pivot) {
      lesser.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }

  return quicksortBasic(lesser).concat(pivot, quicksortBasic(greater));
}

console.log(arrayReversed)

---------------------------------------------------------------------------------------------------------------
Shellsort is an in-place comparison sort which can be seen as either a generalization of sorting by exchange (bubble sort) or sorting by insertion (insertion sort). The method starts by sorting pairs of elements far apart from each other, then progressively reducing the gap between elements to be compared. Starting with far apart elements can move some out-of-place elements into position faster than a simple nearest neighbor exchange.

var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

// gaps
var gaps = [701, 301, 132, 57, 23, 10, 4, 1];

function shellsort(array) {
  for(var g = 0; g < gaps.length; g++) {
    var gap = gaps[g];
    for(var i = gap; i < array.length; i++) {
      var temp = array[i];
      for(var j = i; j >= gap && array[j - gap] > temp; j -= gap) {
        array[j] = array[j - gap];
      }
      array[j] = temp;
    }
  }
  return array;
}

console.log(shellsort(array)); 



