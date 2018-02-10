/*
Pairs with Specific Difference
Given an array arr of distinct integers and a nonnegative integer k, write a function findPairsWithGivenDifference that returns an array of all pairs [x,y] in arr, such that x - y = k. If no such pairs exist, return an empty array.

In your solution, try to reduce the memory usage while maintaining time efficiency. Prove the correctness of your solution and analyze its time and space complexities.

Note: the order of the pairs in the output array doesn’t matter.

Examples:

input:  arr = [0, -1, -2, 2, 1], k = 1
output: [[0, -1], [-1, -2], [2, 1], [1, 0]]

input:  arr = [1, 7, 5, 3, 32, 17, 12], k = 17
output: []

*/

function findPairsWithGivenDifference(arr, k) {
  let newArr = arr.slice()
  let result = [];
  
  let map = new Map();
  
  for(let i=0; i<arr.length; i++){
    let x = arr[i];
    let y;
        //console.log(map,  map.get(x-k),  map.get(x+k))
    if((y = map.get(x-k))!=undefined){ result.push([x,y])}
    if((y = map.get(x+k))!=undefined){ result.push([y,x])}
    map.set(x,arr[i]);
    //console.log(map)
  }
 
  return result;
}
  let arr = [0, -1, -2, 2, 1],
    k = 1;
console.log(findPairsWithGivenDifference(arr,k));



/*
Pairs with Specific Difference
A naive approach is is to run two loops. The outer loop picks the first element (smaller element) and the inner loop looks up for the element picked by the outer loop plus k. While this solution is done in O(1) space complexity, its time complexity is O(N^2), which isn’t asymptotically optimal.

We can use sorting and binary search to improve the time complexity to O(N⋅log(N)). The first step is to sort the array in an ascending order. Once the array is sorted, we traverse the array from left to right, and for each element arr[i], we do a binary search for arr[i] + k in arr. If the element is found, we add this pair to our output array.

Both the first and second steps take O(N⋅log(N)). So the overall time complexity is O(N⋅log(N)).

There is a more elegant solution. The time complexity of the second step of the above algorithm can be improved to O(N) The first step remains same. Here’s the general idea:

Sort the array.

Use two pointers first and last to iterate over the array and do the following:

a. If arr[last] - arr[first] == k add the pair [arr[last], arr[first]] to the result array.

b. If arr[last] - arr[first] < k, increment last by one.

c. If arr[last] - arr[first] > k, increment first by one.

Stop iterating when one of the pointers is out of the array bound.

Pseudocode:

function findPairsWithGivenDifference(arr, k):
    arr.sort()
    answer = []
    first = 0
    last = 1

    while (last < arr.length AND first < arr.length):
        if (first != last AND arr[last] - arr[first] == k):
            answer.push( [arr[last], arr[first]] )
            first++
            last++
        else if(arr[last] - arr[first] < k):
            last++
        else:
            first++

    return answer
In this solution, we skip checking many pairs, yet we claim that all the correct pairs are found. Why are all the pairs found? If we incremented the first pointer, it means that arr[last] - arr[first] > k, thus all remaining pairs with the number in arr[first] have a larger difference than k (thus we only eliminated wrong pairs). If we incremented the last pointer, then since the array is distinct, all other unchecked pairs with arr[last] have arr[last] - arr[first] < k. Since every step in the while clause increments one of the counters, there is no double counting.

Time Complexity: the most expensive step in the algorithm is sorting the array, which takes O(N⋅log(N)) time. The while loop is O(N) since every iteration increments one of the counters by one (thus the maximal number of iterations is 2N). So the total time complexity is O(N⋅log(N)) + O(N) = O(N·log(N)).

Space Complexity: since the size of the output itself is O(N), the space complexity is O(N) as well. However, excluding the output, notice that we used only O(1) space since the sorting is in place and we only initialize two pointers.

*/
