You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits:

nextBigger(12)==21
nextBigger(513)==531
nextBigger(2017)==2071
If no bigger number can be composed using those digits, return -1:

nextBigger(9)==-1
nextBigger(111)==-1
nextBigger(531)==-1

Thoughts:

1. -1 is our defualt return if we can't make a bigger num by rearranging the index
2. edge case is in negative numbers this solution fails, it gets a larger -num not the other way around. i.e -503 = -530

Solution:

  function nextBigger(n) {
    var nextBigNum = -1;
    var nums = n.toString().split('');
    for (var i = nums.length - 1; i >= 0; --i) {
      if (nums[i] < nums[i + 1]) {
        var rightPartNums = nums.splice(i + 1);
        for (var j = 0; j < rightPartNums.length; ++j) {
          if (rightPartNums[j] > nums[i]) {
            nums[i] = rightPartNums[j] - nums[i];
            rightPartNums[j] = rightPartNums[j] - nums[i];
            nums[i] = rightPartNums[j] + nums[i];
            nextBigNum = parseInt(nums.concat(rightPartNums).join(''), 10);
            i = 0;
            break;
          }
        }
      }
    }

    return nextBigNum;
  }

Let's walk through what the code is doing with console logs here:

  function nextBigger(n) { // We call the function and pass our number into it (n)
    var nextBigNum = -1; // let's set our -1 in case we can't make a larger num i.e 111
    var nums = n.toString().split(''); // let's assign our number to nums, and split it so we can work with each digit
    console.log(1, nums) // 1 ['5', '0'. '3']
    for (var i = nums.length - 1; i >= 0; --i) { // for loop through the length of our nums starting at the backend
      if (nums[i] < nums[i + 1]) { // here we are checking if nums[i]<nums[i +1] - less than the number +1 index, so in our case comparing 503 3 to 0 and it is,  
        console.log(2, i) // 2 1 
        var rightPartNums = nums.splice(i + 1); // make var rightPartNums = nums splice i + 1.
        console.log(3, rightPartNums) // 3 ['3']
        for (var j = 0; j < rightPartNums.length; ++j) {
          if (rightPartNums[j] > nums[i]) { // compare numbers again, if it's greater do this:
            console.log(4, j) // 0
            nums[i] = rightPartNums[j] - nums[i]; // assign the index to the new value
            console.log(5, rightPartNums[i]) // 5 undefined 
            rightPartNums[j] = rightPartNums[j] - nums[i]; // swapping numbers around
            console.log(6, rightPartNums) // 6 [ 0 ]
            nums[i] = rightPartNums[j] + nums[i];
            console.log(7, nums[i]) // 7 3
            nextBigNum = parseInt(nums.concat(rightPartNums).join(''), 10); // concat them together and join so it's 530 now.The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
            console.log(8, nextBigNum) // 530
            i = 0; // set i to 0
            break; // break out of the loop
          }
        }
      }
    }

    return nextBigNum; // have to return nextBigNum here or else we get undefined
  }
  
  nextBigger('503')

Bonus! JS silly stuff: 

[] + [] = ? // ""
[] + {} = ? // [object Object]
{} + [] = ? // 0
{} + {} = ? // [object Object][object Object]
Array(16).join('wat')
Array(16).join('wat' -1) + " batman! "
