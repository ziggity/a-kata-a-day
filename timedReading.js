/*
Timed Reading is an educational tool used in many schools to improve and advance reading skills. A young elementary student has just finished his very first timed reading exercise. Unfortunately he's not a very good reader yet, so whenever he encountered a word longer than maxLength, he simply skipped it and read on.

Help the teacher figure out how many words the boy has read by calculating the number of words in the text he has read, no longer than maxLength.
Formally, a word is a substring consisting of English letters, such that characters to the left of the leftmost letter and to the right of the rightmost letter are not letters.

Example

For maxLength = 4 and
text = "The Fox asked the stork, 'How is the soup?'",
the output should be
timedReading(maxLength, text) = 7.

The boy has read the following words: "The", "Fox", "the", "How", "is", "the", "soup".

Input/Output
*/
function timedReading(maxLength, text) {

var count = 0;
var split1 = text.replace(/[,!.@#$%^&*?]/g, "");
  if(split1.length<1) return 0
let splitUp = split1.split(' ');
console.log('split1',splitUp)
str = splitUp.toString().replace(/[^A-Za-z,\.]+/g, "");
str = str.split(',')
console.log('str', str, str[0].length, text)
  for(let i=0; i<str.length; i++){
   
    if(str[i].length <= maxLength){
      count ++
      
    }
  }
  return count
}

//another method
function timedReading(maxLength, text) {
    return (text.match(/[a-z]+/gi) || []).filter(w=>w.length<=maxLength).length;
}

//similar method
function timedReading(maxLength, text) {
    
    var count = 0,
        words = text.match(/[a-z]+/ig);
    
    if (words) {
        count = words.reduce((count, val) => {
            if (val.length <= maxLength) {
                count++;
            };
            return count;
        }, 0);
    };
    
    return count

}
