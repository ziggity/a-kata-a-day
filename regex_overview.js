Some rules to follow

Single Characters:
\s -> white space / line break \S not a space 
\d -> 0-9 \D not a digit
\w -> A-Za-z \W not a letter
. -> wild card 

Quantifiers:
* -> 0 or more
+ -> 1 or more
? -> 0 or 1
{} -> min max see example below{3} returns things with 3 items such as \d{3} = 206

Position:
^ -> begining
$ -> end
\b -> word boundry

Meta -Characters: 
[abc] [-.]
"alternation"
\. = '.'

Examples:
\w+ = one or more word charactesr in a row
\w\d+ = one ore more word digits in a row
colou?rs? = u is optional (quantifier)so is the s

\d{4} = (digits 4 in a row)

^\w = finding something any sequence start and end with

l[yi]nk = lynk and link matches found. 

\(?d{3}[-.)]\d{3}[-.]\d{4} = 206.294.4444 or 206-294-4444 or (206)...
[^abc]{3} = anything not abc (a or b or c)
[a-z] = all lower case alphabet
\b[A-Za-z] match all letters of english alphabet (word boundry) 

How to match emails: .net / .com / .edu etc

[\w]+@\w+\.(net|com|edu) = joey@gmail.com joey@gmail.net etc etc


How to change phone # with RegEx from 206-222-2222 into 206-XXX-XXXX

Atom Search box input enter: \(?(\d{3})[-.)]\d{3}[-.]\d{4}
in the replace input box type on Atom / VS code: $1-XXX-XXXX
                                 
Javascript use case with Regex with match() and test();

                                 var s = "unicorns and cupcakes";
                                 var r = /[a-z]+/g;
                                 s.match(r); <- ["unicorns", "and", "cupcakes"]
                                 s.test(r); <- true;

Regex split() examples:

var s = "unicorns and cupcakes";
s.split(/\s/); -> ["unicorns", "and", "cupcakes"]

                               
                            
                            
