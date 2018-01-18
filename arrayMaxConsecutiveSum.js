/*
Given array of integers, find the maximal possible sum of some of its k consecutive elements.

Example

For inputArray = [2, 3, 5, 1, 6] and k = 2, the output should be
arrayMaxConsecutiveSum(inputArray, k) = 8.
All possible sums of 2 consecutive elements are:

2 + 3 = 5;
3 + 5 = 8;
5 + 1 = 6;
1 + 6 = 7.
Thus, the answer is 8.
*/



function arrayMaxConsecutiveSum(inputArray, k) {
let sum = 0;
let max = 0;
    
for(let i = 0; i < k; i++){
    sum += inputArray[i];
}
    max = sum;
    
    for(let j = k; j < inputArray.length; j++){
        sum -= inputArray[j - k];
        sum += inputArray[j];
        if(sum > max){
            max = sum;
        }
    }
    
    return max;
}
