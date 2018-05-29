/*
You're given a substring s of some cyclic string. What's the length of the smallest possible string that can be concatenated to itself many times to obtain this cyclic string?

Example

For s = "cabca", the output should be
cyclicString(s) = 3.

"cabca" is a substring of a cycle string "abcabcabcabc..." that can be obtained by concatenating "abc" to itself. Thus, the answer is 3.


*/
function cyclicString(s) {
    var length = 1;
    while (s.slice(0, length).repeat(s.length).slice(0, s.length) != s)
        length++;
    return length;
}

function cycle(s, len) {
    var ans = s;
    
    while(ans.length < len) {
        ans += s;
    }
    
    return ans.substring(0, len);
}
// other
function cyclicString(s) {
    var i = 1;
    
    while (i < s.length) {
        if (cycle(s.substring(0, i), s.length) === s) {
            break;
        }
        i++;
    }
    
    return i;
}
