function longestWord(text) {
  text = text.replace(/[^a-z0-9]+|\s+/gmi, " ");
  let textLower = text.split(' ')
   let longestWord = ''
 
  for(var i=0; i<textLower.length; i++){
   if(textLower[i].length > longestWord.length){
     longestWord = textLower[i]
     console.log(longestWord)
   }
    
  }
  
  return longestWord
}


longestWord('ready, steady, go!')

// Define a word as a sequence of consecutive English letters. Find the longest word from the given string.

// Example

// For text = "Ready, steady, go!", the output should be
// longestWord(text) = "steady".
