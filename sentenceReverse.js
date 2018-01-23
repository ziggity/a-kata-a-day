/* 

Sentence Reverse
You are given an array of characters arr that consists of sequences of characters separated by space characters. Each space-delimited sequence of characters defines a word.

Implement a function reverseWords that reverses the order of the words in the array in the most efficient manner.

Explain your solution and analyze its time and space complexities.

Example:

input:  arr = [ 'p', 'e', 'r', 'f', 'e', 'c', 't', '  ',
                'm', 'a', 'k', 'e', 's', '  ',
                'p', 'r', 'a', 'c', 't', 'i', 'c', 'e' ]

output: [ 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e', '  ',
          'm', 'a', 'k', 'e', 's', '  ',
          'p', 'e', 'r', 'f', 'e', 'c', 't' ]
Constraints:

[time limit] 5000ms

[input] array.character arr

0 ≤ arr.length ≤ 100
[output] array.character

Hints & Tips
Even if your language of choice enables that, using standard functions to join the characters into a string, split it and reverse the split words is not efficient. When you do that the compiler/interpreter is using O(N) space to create the string,O(N) space to hold the split words and additional O(N) space to hold the re-joined reversed string. Also, the whole point of this question is to get you roll up your sleeves and do it yourself. Whenever a standard or a library function is used, ask your peer to explain the time and space complexities it take. In your evaluation of your peer’s complexity analysis, take that into account.
Watch for edge cases handling in your peer’s solution, e.g. empty array, array with nothing but spaces, array with one word only, multiple spaces between words, etc.
To get the maximum rating for problem solving, your peer must achieve a linear time complexity and a constant space complexity with no hints.
If you have time left, ask your peer how the mirrorReverse function could be implemented with a single index. It’s done with left to right linear iteration and swapping arr[i] and arr[n-1-i] as long as i < n-1-i.
Solution
One possible solution is doing a linear iteration on arr while pushing a copy of every word to a stack and then pulling them in reverse order while copying the words back into arr. Another approach is initializing a new array at the same length, iterating over arr from right to left and copying any sequence of characters to the new array from left to right. Both approaches take O(N) time and at least O(N) space.

A more elegant and efficient approach is to reverse all the characters in arr and then reverse the characters in each word separately. While the first reverse gives us the words in the reverse order as we wanted, it also reverses the characters of each word. To fix that, we do the second reverse, which reverses each word separately.

Reversing items in an array is done by a ‘mirror’ function, that swaps the items of every 2 indices with the same distance from the middle.

Pseudocode:

function reverseWords(arr):
    # reverse all characters:
    n = arr.length
    mirrorReverse(arr, 0, n-1)

    # reverse each word:
    wordStart = null
    for i from 0 to n-1:
        if (arr[i] == ' '):
            if (wordStart != null):
                mirrorReverse(arr, wordStart, i-1)
                wordStart = null
        else if (i == n-1):
            if (wordStart != null):
                mirrorReverse(arr, wordStart, i)
        else:
            if (wordStart == null):
                wordStart = i

    return arr


# helper function - reverses the order of items in arr
# please note that this is language dependent:
# if are arrays sent by value, reversing should be done in place

function mirrorReverse(arr, start, end):
    tmp = null
    while (start < end):
        tmp = arr[start]
        arr[start] = arr[end]
        arr[end] = tmp
        start++
        end--
Time Complexity: traversing the array twice with a constant number of actions for each item is linear O(N).

Space Complexity: using iteration indices and one temp variable takes constant O(1) memory.

Good luck! and remember…
*/


