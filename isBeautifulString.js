function isBeautifulString(inputString) {

let charCount = [];

for(let i=0; i<26; i++) {
  charCount.push(0);
}
for(let char of inputString){
  let charIndex = char.charCodeAt()- 'a'.charCodeAt();
  charCount[charIndex]++;
}
for(let i=1; i<charCount.length; i++){
  if(charCount[i] > charCount[i-1]) return false;
}
return true;
}

     
//           A string is said to be beautiful if b occurs in it no more times than a; c occurs in it no more times than b; etc.

// Given a string, check whether it is beautiful.

// Example

// For inputString = "bbbaacdafe", the output should be
// isBeautifulString(inputString) = true;
// For inputString = "aabbb", the output should be
// isBeautifulString(inputString) = false;
// For inputString = "bbc", the output should be
// isBeautifulString(inputString)
