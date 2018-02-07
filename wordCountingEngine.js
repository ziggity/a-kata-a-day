// Word Count Engine
// Implement a document scanning function wordCountEngine, which receives a string document and returns a list of all unique words in it and their number of occurrences, sorted by the number of occurrences in a descending order. If two or more words have the same count, they should be sorted alphabetically (in an ascending order). Assume that all letters are in english alphabet. You function should be case-insensitive, so for instance, the words “Perfect” and “perfect” should be considered the same word.

// The engine should strip out punctuation (even in the middle of a word) and use whitespaces to separate words.

// Analyze the time and space complexities of your solution. Try to optimize for time while keeping a polynomial space complexity.

// Examples:

// input:  document = "Practice makes perfect. you'll only
//                     get Perfect by practice. just practice!"

// output: [ ["practice", "3"], ["perfect", "2"],
//           ["by", "1"], ["get", "1"], ["just", "1"],
//           ["makes", "1"], ["only", "1"], ["youll", "1"]  ]

function wordCountEngine(document) {
 let document1 = document.toLowerCase();
 let result = [];
 let splitter = document1.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").split(' ');
 let objOfWords = {};
    for(let i=0; i<splitter.length; i++){
      if(objOfWords[splitter[i]]){
        objOfWords[splitter[i]]++;
      }
      else{
        objOfWords[splitter[i]] = 1;
      }
    }
 let string1 = ''
 for (var obj in objOfWords) {
   string1 = string1 + objOfWords[obj];
  console.log(string1)
}

  return Object.entries(objOfWords)
}

console.log(wordCountEngine("Practice makes perfect. you'll only get Perfect by practice. just practice!"));
