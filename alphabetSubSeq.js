/*
Check whether the given string is a subsequence of the plaintext alphabet.

Example

For s = "effg" or s = "cdce", the output should be
alphabetSubsequence(s) = false;
For s = "ace" or s = "bxz", the output should be
alphabetSubsequence(s) = true.
*/
function alphabetSubsequence(s) {
let alpha = 'abcdefghijklmnopqrstuvwxyz'.split('').join(',');
    for(let i=1; i<s.length; i++){
      if(s.charCodeAt(i)-s.charCodeAt(i-1) <= 0) return false;
       }
       return true
    }


//other method
function alphabetSubsequence(s) {
    return s == [...new Set(s)].sort().join('')
}

//other

function alphabetSubsequence(s) {p=0
    return [...s].every(x=>(c=x.charCodeAt(),r=c>p|!p,p=c,r))
}
