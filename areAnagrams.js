What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false
Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

.....................................................................................................................

Thoughts:
1. split word and words into "" individual char
2.compare the strings of word and words, if either is empty return, empty array
3. go through each array (iterate through), and compare index 0-n, see if they match up with words / word
4. return the anagrams


Javascript Solution: 
var areAnagrams = function(a, b) {
    // if length is not the same the words can't be anagrams
    if (a.length != b.length) return false;
    // make words comparable
    a = a.split("").sort().join("");
    b = b.split("").sort().join("");
    // check if each character match before proceeding
    for (var i = 0; i < a.length; i++) {
        if ((a.charAt(i)) != (b.charAt(i))) {
            return false;
        }
    }
    // all characters match!
    return true;
};


Python solution:

def anagrams(word, words):
    word_arr = sorted(list(word))
    ans = []
    for i in words:
        if sorted(list(i)) == word_arr:
            ans.append(i)
    return ans
