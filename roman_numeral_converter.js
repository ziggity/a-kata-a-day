/*
Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

Example:

solution(1000); // should return 'M'
Help:

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
Remember that there can't be more than 3 identical symbols in a row.

More about roman numerals - http://en.wikipedia.org/wiki/Roman_numerals

Thoughts:
1. Have a function to reverse the process, i.e take in VI return 6
2. Build a key / dictionary to pull Characters from

Solution:

*/


function solution (number) {
	if (!+number)
		return false;
	var	digits = String(+number).split(""),
		key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
		       "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
		       "","I","II","III","IV","V","VI","VII","VIII","IX"],
		roman = "",
		i = 3;
	while (i--)
		roman = (key[+digits.pop() + (i * 10)] || "") + roman;
	return Array(+digits.join("") + 1).join("M") + roman;
}

function deromanize (str) {
	var	str = str.toUpperCase(),
		validator = /^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/,
		token = /[MDLV]|C[MD]?|X[CL]?|I[XV]?/g,
		key = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},
		number = 0, m;
	if (!(str && validator.test(str)))
		return false;
	while (m = token.exec(str))
		number += key[m[0]];
	return number;
}

//Let's take a look at console logs: 



function solution (number) {
	if (!+number)
		return false;
	var	digits = String(+number).split(""), // split up the input 'number' into array so we can work with each digit -> The split() method splits a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split.
	
		key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
		       "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
		       "","I","II","III","IV","V","VI","VII","VIII","IX"],
		roman = "",
		i = 3;
		console.log('digits', digits); // [ '1', '9', '8', '4' ] 
	while (i--)
		roman = (key[+digits.pop() + (i * 10)] || "") + roman;
		console.log('roman', roman) // ''
		console.log('digits', digits); ['2', '0', '1']
	return Array(+digits.join("") + 1).join("M") + roman; 
}

function deromanize (str) { // takes in XXIV and returns actual number 
	var	str = str.toUpperCase(), // lowercases the input (str)
		validator = /^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/, // regex checking for values 
		token = /[MDLV]|C[MD]?|X[CL]?|I[XV]?/g, // global 
		key = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},
		number = 0, m;
			console.log('validator', validator) 
	if (!(str && validator.test(str)))
	console.log('str',str) // triggers if a digit exists
		return false;
	while (m = token.exec(str)) // doesn't hit this while loop
		number += key[m[0]];
	return number;
}
solution(2017) + deromanize('XVII');

