function shiftedArrSearch(shiftArr, num) {
  let pivot = findPivotPoint(shiftArr);
  if (pivot === 0 || num < shiftArr[0]) {
    return binarySearch(shiftArr, pivot, shiftArr.length - 1, num)
  } else {
    return binarySearch(shiftArr, 0, pivot - 1, num)
  }
}


// shiftArr = [9, 12, 17, 2, 4, 5]; num = 17
// pivot = 4
// shiftArr[0] = 9
// binarySearch([9, 12, 17, 2, 4, 5], 0, 3, 17)no

// we find a pivot point in our array (basically where consecutive indices don't have sorted values) to tell us where the shift has occurred
// if our pivot is 0, the array has not been shifted and is still perfectly sorted
// if the number we're looking for is less than the value at the first index of the array, we know what we're looking for is probably in the second half of the array
// in both of these cases, we begin binarySearch looking at the second half of the array and go from there
// in any other case, we search the first half of the array and go from there

function findPivotPoint(arr) {
  let start = 0;
  let end = arr.length - 1;
  
  while(start <= end) {
    let mid = start + Math.floor((end - start)/2);
    if (mid === 0 || arr[mid] < arr[mid - 1]) {
      return mid
    }
    if (arr[mid] > arr[0]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return 0;
}

console.log('found pivot', findPivotPoint([1,2,3,4]))


// arr = [9, 12, 17, 2, 4, 5]
// start = 0; end = 5; mid = 2; arr[mid] = 17; arr[mid - 1] = 12; arr[0] = 9
// start = 3; end = 5; mid = 5; arr[mid] = 5; arr[mid - 1] = 4; arr[0] = 9;
// start = 3; end = 4; arr[mid] = 4; arr[mid - 1] = 17;
// return 4;

function binarySearch(arr, start, end, num) {
  while (start <= end) {
    let mid = start + Math.floor((end - start)/2)
    if (arr[mid] < num) {
      start = mid + 1;
    } else if (arr[mid] === num) {
      return mid;
    } else {
      end = mid - 1;
    }
  }
}



binarySearch([9, 12, 17, 2, 4, 5], 0, 3, 17)
// start = 0; end = 3; num = 17; mid = 1; arr[mid] = 12;
// start = 2; end = 3; num = 17; mid = 2; arr[mid] = 17;
// return 2;
