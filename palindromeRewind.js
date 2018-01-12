/*
Given a string, find out if its characters can be rearranged to form a palindrome.

Example

For inputString = "aabb", the output should be
palindromeRearranging(inputString) = true.

We can rearrange "aabb" to make "abba", which is a palindrome.




*/

function palindromeRearranging(inputString) {
  let charArray = inputString.split('');
 let letterObject = {};
 
 for(var i = 0; i<charArray.length; i++){
   if(!letterObject.hasOwnProperty([charArray[i]])){
     letterObject[charArray[i]] =1;
   }else{
     letterObject[charArray[i]] ++;
   }
 }
 var oddCount = 0;
 for(val in letterObject){
   if(letterObject[val] % 2 !== 0){
     oddCount++
   }
 }
 return oddCount > 1 ? false : true;

}
