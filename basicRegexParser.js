/*
Basic Regex Parser
Implement a regular expression function isMatch that supports the '.' and '*' symbols. The function receives two strings - text and pattern - and should return true if the text matches the pattern as a regular expression. For simplicity, assume that the actual symbols '.' and '*' do not appear in the text string and are used as special symbols only in the pattern string.

In case you aren’t familiar with regular expressions, the function determines if the text and pattern are the equal, where the '.' is treated as a single a character wildcard (see third example), and '*' is matched for a zero or more sequence of the previous letter (see fourth and fifth examples). For more information on regular expression matching, see the Regular Expression Wikipedia page.

Explain your algorithm, and analyze its time and space complexities.

Examples:

input:  text = "aa", pattern = "a"
output: false

input:  text = "aa", pattern = "aa"
output: true

input:  text = "abc", pattern = "a.c"
output: true

input:  text = "abbb", pattern = "ab*"
output: true

input:  text = "acd", pattern = "ab*c."
output: true
*/

function isMatch(text, pattern) {
  
  if(pattern.length === 0){
    return text.length === 0;
  }
  if(pattern.length == 1 || pattern.charAt(1) != '*'){
    if(text.length < 1 || pattern.charAt(0) != '.' && text.charAt(0) != pattern.charAt(0)){
      return false;
    } return isMatch(text.substring(1), pattern.substring(1));
  }else{
    let length = text.length;
    let i = -1;
    
    while (i<length && (i<0 || pattern.charAt(0) == '.' || pattern.charAt(0) == text.charAt(i))){
      if(isMatch(text.substring(i+1), pattern.substring(2))){
        return true;
      } i++;
    }
  }
  
  
  
  return false;
  
}
