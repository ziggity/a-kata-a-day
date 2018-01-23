function lineEncoding(s) {
  var counter = 1;
  var result = [];
  for (var i = 1; i < s.length +1; i++) {
    if (s.charAt(i) === s.charAt(i - 1)) {
      counter++;
    } else {
      if (counter > 1) {
        result.push(counter);
      }
      result.push(s[i - 1]);
      console.log(result)
      counter = 1;
    }
  }

  return result.join('');
}

// Given a string, return its encoding defined as follows:

// First, the string is divided into the least possible number of disjoint substrings consisting of identical characters
// for example, "aabbbc" is divided into ["aa", "bbb", "c"]
// Next, each substring with length greater than one is replaced with a concatenation of its length and the repeating character
// for example, substring "bbb" is replaced by "3b"
// Finally, all the new strings are concatenated together in the same order and a new string is returned.
// Example

// For s = "aabbbc", the output should be
// lineEncoding(s) = "2a3bc".
