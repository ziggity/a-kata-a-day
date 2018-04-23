/*
Determine whether the given string can be obtained by one concatenation of some string to itself.

Example

For inputString = "tandemtandem", the output should be
isTandemRepeat(inputString) = true;
For inputString = "qqq", the output should be
isTandemRepeat(inputString) = false;
For inputString = "2w2ww", the output should be
isTandemRepeat(inputString) = false.
*/

function isTandemRepeat(inputString) {
    let len = inputString.length/2
    let split = inputString.split('')
    let compare2 = split.slice(len).join('')
    console.log('c2',compare2)
    let compare = split.splice(0, len).join('')
    if(compare != compare2) return false
    return true
    
}

// es6

function isTandemRepeat(s) {
    return s.slice(0,s.length / 2) == s.slice(s.length / 2)
}
