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


Examples:
\w+ = one or more word charactesr in a row
\w\d+ = one ore more word digits in a row
colou?rs? = u is optional (quantifier)so is the s

\d{4} = (digits 4 in a row)

^\w = finding something any sequence start and end with
