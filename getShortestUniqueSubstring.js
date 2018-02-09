/*
Smallest Substring of All Characters
Given an array of unique characters arr and a string str, Implement a function getShortestUniqueSubstring that finds the smallest substring of str containing all the characters in arr. Return "" (empty string) if such a substring doesn’t exist.

Come up with an asymptotically optimal solution and analyze the time and space complexities.

Example:

input:  arr = ['x','y','z'], str = "xyyzyzyx"

output: "zyx"
*/
function getShortestUniqueSubstring(arr, str) {
  let smallestSeen;
  let counter =0; 
  for(let i=0; i<str.length; i++){
   let newArr = arr.slice();
   let seen ='';
    for(let j=i; j<str.length; j++){
      seen = seen+str[j];
      if(newArr.includes(str[j])){
        newArr.splice(newArr.indexOf(str[j]), 1);
      }   
      if(newArr.length===0){
        if(smallestSeen === undefined || smallestSeen.length > seen.length){
      smallestSeen = seen;
        }   
      }
    }
  }
 
  return smallestSeen === undefined ? '' : smallestSeen;
}
//longest sub array 
//console.log(getShortestUniqueSubstring(["A","B","C","E","K","I"],'KADOBECODEBANCDDDEI'));

//["A","B","C"], "BDOBECODEBANCDDD"








/*

Smallest Substring of All Characters
We scan the input string str from left to right while maintaining two indices - headIndex and tailIndex.

At each iteration, we examine a temporary substring [str.charAt(headIndex),str.charAt(headIndex+1),..., str.charAt(tailIndex)] and keep a copy of the shortest valid substring we’ve seen so far. Said differently, we keep incrementing tailIndex until the above substring contains every unique character in arr.

If the size of the resulting substring equals to arr.length then we return it since by definition there can’t be a shorter valid substring (otherwise, it’ll be missing 1 or more unique characters from arr).

Once we found a valid substring, we increment headIndex as long the substring remains valid. At every increment we also check if the current valid substring is shorter than the previously kept one. If it is, we update result to be the current substring.

We keep repeating the above steps in a loop until we either reach the end of the input string str or return the shortest valid substring, whichever comes first.

To examine the validity of str substrings we use 2 counters:

uniqueCounter (Integer) - the number of unique characters of arr that our current substring contains.
countMap (Map/Hash Table) - the number of occurrences of each character of arr in our current substring.
Pseudocode:

function getShortestUniqueSubstring(arr, str):
    headIndex = 0
    result = ""
    uniqueCounter = 0
    countMap = new Map()

    # initialize countMap
    for i from 0 to arr.length - 1:
        countMap.setValueOf(arr[i], 0)

    # scan str
    for tailIndex from 0 to str.length - 1:
        # handle the new tail
        tailChar = str.charAt(tailIndex)

        # skip all the characters not in arr
        if (countMap.keyExists(tailChar) == false):
            continue

        tailCount = countMap.getValueOf(tailChar)
        if (tailCount == 0):
            uniqueCounter = uniqueCounter + 1

        countMap.setValueOf(tailChar, tailCount + 1)

        # push head forward
        while (uniqueCounter == arr.length):
            tempLength = tailIndex - headIndex + 1
            if (tempLength == arr.length):
                # return a substring of str from
                # headIndex to tailIndex (inclusive)
                return str.substring(headIndex, tailIndex)

            if (result == "" OR tempLength < result.length):
                # return a substring of str from
                # headIndex to tailIndex (inclusive)
                result = str.substring(headIndex, tailIndex)

            headChar = str.charAt(headIndex)

            if (countMap.keyExists(headChar)):
                headCount = countMap.getValueOf(headChar) - 1
                if (headCount == 0):
                    uniqueCounter = uniqueCounter - 1
                countMap.setValueFor(headChar, headCount)

            headIndex = headIndex + 1

    return result
Time Complexity: we’re doing a linear iteration of both str and arr of lengths N and M respectively, so the runtime complexity is linear in the size of the input, i.e. O(N+M).

Space Complexity: we’re using a Map/Hash Table countMap with M key/values pairs plus few constant size counters, which together give us an O(M) space complexity (linear in the size of arr).

*/
