/*
Find the number of ways to express n as sum of some (at least two) consecutive positive integers.

Example

For n = 9, the output should be
isSumOfConsecutive2(n) = 2.

There are two ways to represent n = 9: 2 + 3 + 4 = 9 and 4 + 5 = 9.

For n = 8, the output should be
isSumOfConsecutive2(n) = 0.

There are no ways to represent n = 8.
*/
function isSumOfConsecutive2(n) {
let result = 0;
    for(let start = 1; start<n; start++){
        let num = n;
        let subtrahend = start;
        while (num > 0) {
            num -= subtrahend;
            subtrahend++;
        }
        if(num==0){
            result++
        }
    }
    return result;
}
