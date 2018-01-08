/*

Given two strings, find the number of common characters between them.

Example

For s1 = "aabcc" and s2 = "adcaa", the output should be
commonCharacterCount(s1, s2) = 3.

Strings have 3 common characters - 2 "a"s and 1 "c".

Input/Output

[execution time limit] 4 seconds (js)

[input] string s1

A string consisting of lowercase latin letters a-z.

Guaranteed constraints:
1 ≤ s1.length ≤ 15.

*/

function commonCharacterCount(s1, s2) {
    var string1=s1.split('');
    var string2=s2.split('');
    var common=0;
    
    for(var i=0;i<string1.length;i++){
        if(string2.indexOf(string1[i])>=0){
            common++;
            string2.splice(string2.indexOf(string1[i]),1);
        }
    }
    return common;
}
