/*
Given an array of integers your solution should find the smallest integer.

For example:
Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
*/

// my soltution:
class SmallestIntegerFinder {
  findSmallestInt(args) {
    let counter = Infinity;
    for(let i=0; i<args.length; i++){
      if(counter > args[i]){
        counter = args[i]
      }
    }
     return counter
  }
}


// top ranked solution:

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}
