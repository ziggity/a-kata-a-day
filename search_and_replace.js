Search and Replace
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.prototype.splice()
String.prototype.replace()
Array.prototype.join()

------------------------------

function myReplace(str, before, after) {
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");


Solution:

function myReplace(sentence, before, after) {

	if(before.charCodeAt(0) < 91) {
		let ch = after.charAt(0);
		after = after.replace(ch, ch.toUpperCase());
	} return sentence.replace(before, after);

}
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
