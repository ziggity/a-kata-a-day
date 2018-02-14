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

// solution passing 5/8 tests;
function isMatch(text, pattern) {
		let strLen = text.length;
		let patLen = pattern.length;
		let pati = 0, stri = 0;
		while (pati < patLen || stri < strLen) {
			if (pati + 1 < patLen && pattern.charAt(pati + 1) == '*') {
				while (stri < strLen && text.charAt(stri) == pattern.charAt(pati))
					stri++;
			  	pati += 2;
			} else if (stri < strLen && pati < patLen
					&& text.charAt(stri) == pattern.charAt(pati)) {
				stri++;
				pati++;
			} else return false;
		}
		return true;
	}





/*

Basic Regex Parser
The solution for this kind of pattern matching is usually done by recursion. Review first the algorithm below and then read the explanation that follows.

Pseudocode:

function isMatch(text, pattern):
    return isMatchHelper(text, pattern, 0, 0)


#  Input:
#    text - the text to check,
#    pattern - the regular expression to be checked,
#    textIndex - the index the text is checked from
#    patIndex -  the index the pattern is checked from
#  Output:
#   true if the text from the index textIndex matches
#   the regular expression pattern from the pattern Index.
#   E.g. isMatchHelper(“aaabb”,”cab*”,2, 1) since the text
#   from index 2 (“abb”) matches the pattern from index 1 (“ab*”)

function isMatchHelper(text, pattern, textIndex, patIndex):
    # base cases - one of the indexes reached the end of text or pattern
    if (textIndex >= text.length):
        if (patIndex >= pattern.length):
            return true
        else:
            if (patIndex+1 < pattern.length) AND  (pattern[patIndex+1] == '*'):
                return isMatchHelper(text, pattern, textIndex, patIndex + 2)
            else:
                return false

    else if (patIndex >= pattern.length) AND (textIndex < text.length):
        return false

    # string matching for character followed by '*'
    else if (patIndex+1 < pattern.length) AND (pattern[patIndex+1] == '*'):
        if (pattern[patIndex] == '.') OR (text[textIndex] == pattern[patIndex]):
            return (isMatchHelper(text, pattern, textIndex, patIndex + 2) OR
                    isMatchHelper(text, pattern, textIndex + 1, patIndex))
        else:
            return isMatchHelper(text, pattern, textIndex, patIndex + 2)

    # string matching for '.' or ordinary char.
    else if (pattern[patIndex] == '.') OR
            (pattern[patIndex] == text[textIndex]):
        return  isMatchHelper(text, pattern, textIndex + 1, patIndex + 1)
    else:
        return false

Note: in the code, a text of length N begins in position 0 and ends in position N-1.

As we can see, this is a recursive function that has many cases to cover: First the base cases - if textIndex points to the end of the text:

If the pattern also points to the end of the text, then both are the empty string and both match.
If the pattern has some character followed by '*', then the only possibility that the text matches is if the character before the '*' is matched exactly 0 times, thus incrementing the pattern index forward by two (after the '*' symbol).
Otherwise, the text has ended but the pattern has not, thus the strings don’t match. Another similar base case is if the pattern has ended but the text hasn’t, which also means that the two don’t match.
Next we skip to the last four lines in the code, to the cases where pattern[patIndex + 1] is not '*', i.e. the current character is not followed by '*':

If the pattern[patIndex] is '.', or the (pattern[patIndex] == text[textIndex]) we proceed to check the next indexes, as the current indexes match.
Otherwise, the text and pattern don’t match.
Finally the case where the current character in the pattern is followed by the '*' sign:

If the current characters match or the pattern in the current index is '.' then:

The 'x*' in the pattern (where x is the current character in the pattern) is matched as a sequence of zero characters - in which case we simply increment patIndex by 2.
The 'x*' is matched to the current character along with the next character - in which case we increment the textIndex only.
Time Complexity: in the worst case, the solution above runs in time exponential in the size of the pattern. Patterns that take the most time, are the ones with multiple '*' symbols, that may provoke an exponential number of recursion calls: For example, for the text “bbbbbbbb” and the pattern “.*.*.*.*a”, this function will open a new recursive call to itself for every single way to divide the text in four (the number of “.*”).

Space Complexity: the space required is also exponential because of the number of recursion calls filling up the stack. There are, in fact, algorithms that solve the matching problem in polynomial time and space. They are based on Nondeterministic Finite State Machines, which we didn’t provide here due to the fact that it requires more knowledge in theoretical computer science.
*/
