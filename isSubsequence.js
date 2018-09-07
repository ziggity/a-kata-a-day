/*
Implement the missing code, denoted by ellipses. You may not modify the pre-existing code.
Given a string s, determine if it is a subsequence of a given string t.

Example

For t = "CodeSignal" and s = "CoSi", the output should be
isSubsequence(t, s) = true;

For t = "CodeSignal" and s = "cosi", the output should be
the output should be
isSubsequence(t, s) = false.
*/
function isSubsequence(t, s) {
  var pattern = "";
  for (var i = 0; i < s.length; i++) {
    pattern += ".*["+s.charAt(i)+"]" ;
  }
  var re = new RegExp(pattern);
  return re.test(t);
}
