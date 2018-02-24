/*
Your task is to split the chocolate bar of given dimension n x m into small squares. Each square is of size 1x1 and unbreakable. Implement a function that will return minimum number of breaks needed.

For example if you are given a chocolate bar of size 2 x 1 you can split it to single squares in just one break, but for size 3 x 1 you must do two breaks.

If input data is invalid you should return 0 (as in no breaks are needed if we do not have any chocolate to split). Input will always be a non-negative integer.
*/

var breakChocolate = function(n, m) {
 return (n*m === 0) ? 0 : n * m - 1;
};

//

/*
Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
*/

String.prototype.toJadenCase = function () {
  let result = '';
  let i=0;
 if(this[0]  === this[0].toLowerCase()){
        result += this[0].toUpperCase()
         i++
  }
  for(i; i<this.length; i++){
    result += this[i]
    if(this[i] ===' '){
     let cap = this[i+1].toUpperCase()
      result += cap
      i++
    }
  }
  return result;
};

// other soluition

String.prototype.toJadenCase = function () { 
  return this.split(" ").map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
}
