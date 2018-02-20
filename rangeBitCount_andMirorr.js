/*
You are given two numbers a and b where 0 ≤ a ≤ b. Imagine you construct an array of all the integers from a to b inclusive. You need to count the number of 1s in the binary representations of all the numbers in the array.

Example

For a = 2 and b = 7, the output should be
rangeBitCount(a, b) = 11.

Given a = 2 and b = 7 the array is: [2, 3, 4, 5, 6, 7]. Converting the numbers to binary, we get [10, 11, 100, 101, 110, 111], which contains 1 + 2 + 1 + 2 + 2 + 3 = 11 1s.
*/

function rangeBitCount(a, b) {
    const oneCount = num => [...num.toString(2)].filter(bit => bit === "1").length;
    let sum = 0;
    for(let n=a; n<=b; n++){
        sum += oneCount(n);
    }
    return sum;
}

/*
Reverse the order of the bits in a given integer.

Example

For a = 97, the output should be
mirrorBits(a) = 67.

97 equals to 1100001 in binary, which is 1000011 after mirroring, and that is 67 in base 10.

For a = 8, the output should be
mirrorBits(a) = 1.
*/
function mirrorBits(a) {
    let bin =a.toString(2);
    let arr = [...bin];
    arr.reverse();
    let flipped = arr.join("");
    return parseInt(flipped,2)
}

/*
Presented with the integer n, find the 0-based position of the second rightmost zero bit in its binary representation (it is guaranteed that such a bit exists), counting from right to left.

Return the value of 2position_of_the_found_bit.

Example

For n = 37, the output should be
secondRightmostZeroBit(n) = 8.

3710 = 1001012. The second rightmost zero bit is at position 3 (0-based) from the right in the binary representation of n.
Thus, the answer is 23 = 8.
*/


function secondRightmostZeroBit(n) {
  return 1 << n.toString(2).match(/01*01*$/)[0].length-1;
}
