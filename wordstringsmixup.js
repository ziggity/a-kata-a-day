// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

 

// Example 1:

// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r
// Example 2:

// Input: word1 = "ab", word2 = "pqrs"
// Output: "apbqrs"
// Explanation: Notice that as word2 is longer, "rs" is appended to the end.
// word1:  a   b 
// word2:    p   q   r   s
// merged: a p b q   r   s
// Example 3:

// Input: word1 = "abcd", word2 = "pq"
// Output: "apbqcd"
// Explanation: Notice that as word1 is longer, "cd" is appended to the end.
// word1:  a   b   c   d
// word2:    p   q 
// merged: a p b q c   d
 // hint: Use two pointers, one pointer for each string. Alternately choose the character from each pointer, and move the pointer upwards.

// Constraints:

// 1 <= word1.length, word2.length <= 100
// word1 and word2 consist of lowercase English letters.

//Thoughts, first split each word into an array, then merge them with modulo i conditional check or a counter,
// and if we run out of letters to add just append rest of word at end
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let word1split = word1.split("");
    let woard2split = word2.split("");
   const longestWordLength = word1split.length > woard2split.length ? word1split : woard2split
    console.log(word1split, woard2split)
    for(let i = 0; i < longestWordLength.length; i++){
        if(i < woard2split.length){
            word1split[i] = word1split[i] + woard2split[i]
        }else{
            word1split[i] = word1split[i] + woard2split[woard2split.length - 1]
        }
    }
     word1split.pop()
    return word1split.join("");
};

console.log(mergeAlternately("abcd", "zyx")) // expected output azbycxd