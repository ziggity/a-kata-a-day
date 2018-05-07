/*
Given an array of strings, return another array containing all of its longest strings.

Example

For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

Input/Output

[execution time limit] 4 seconds (js)

[input] array.string inputArray

A non-empty array.

Guaranteed constraints:
1 ≤ inputArray.length ≤ 10,
1 ≤ inputArray[i].length ≤ 10.

[output] array.string

Array of the longest strings, stored in the same order as in the inputArray.
*/
function allLongestStrings(inputArray) {
    var len = 0;
    let newArr = [];
    inputArray.forEach(function(ele){
        if(ele.length >= len){
            len = ele.length;
        }
    })
    let longest = inputArray.map((x) => {
        if (x.length >= len){
             newArr.push(x)
        }
    })
    return newArr
}

// other way:

function allLongestStrings(inputArray) {
    l=Math.max(...inputArray.map(x=>x.length))
    
    return inputArray.filter(x=>x.length==l)
}


// other way

function allLongestStrings(s) {
    b=[]
    s=s.sort((a,b)=>b.length-a.length)
    s.map(a=>a.length==s[0].length?b.push(a):1)
    return b
}
