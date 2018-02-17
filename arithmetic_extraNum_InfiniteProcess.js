/*
You're given three integers, a, b and c. It is guaranteed that two of these integers are equal to each other. What is the value of the third integer?

Example

For a = 2, b = 7 and c = 2, the output should be
extraNumber(a, b, c) = 7.

The two equal numbers are a and c. The third number (b) equals 7, which is the answer.
*/

extraNumber =(a, b, c) => a==b? c: a==c? b:a


/*

Given integers a and b, determine whether the following pseudocode results in an infinite loop

while a is not equal to b do
  increase a by 1
  decrease b by 1
Assume that the program is executed on a virtual machine which can store arbitrary long numbers and execute forever.

Example

For a = 2 and b = 6, the output should be
isInfiniteProcess(a, b) = false;
For a = 2 and b = 3, the output should be
isInfiniteProcess(a, b) = true.
*/

function isInfiniteProcess(a, b) {
    return a > b || a % 2 != b % 2;
}

/*
Consider an arithmetic expression of the form a#b=c. Check whether it is possible to replace # with one of the four signs: +, -, * or / to obtain a correct expression.

Example

For a = 2, b = 3 and c = 5, the output should be
arithmeticExpression(a, b, c) = true.

We can replace # with a + to obtain 2 + 3 = 5, so the answer is true.

For a = 8, b = 2 and c = 4, the output should be
arithmeticExpression(a, b, c) = true.

We can replace # with a / to obtain 8 / 2 = 4, so the answer is true.

For a = 8, b = 3 and c = 2, the output should be
arithmeticExpression(a, b, c) = false.

8 + 3 = 11 ≠ 2;
8 - 3 = 5 ≠ 2;
8 * 3 = 24 ≠ 2;
8 / 3 = 2.(6) ≠ 2.
So the answer is false.
*/

function arithmeticExpression(A, B, C) {
    return [...'+-*/'].some(op => eval(`${A}${op}${B}`) === C)
}

// OR
function arithmeticExpression(A, B, C) {
    return A+B==C || A-B==C || A*B==C || A/B==C
}

/*
In tennis, a set is finished when one of the players wins 6 games and the other one wins less than 5, or, if both players win at least 5 games, until one of the players wins 7 games.

Determine if it is possible for a tennis set to be finished with the score score1 : score2.

Example

For score1 = 3 and score2 = 6, the output should be
tennisSet(score1, score2) = true.

For score1 = 8 and score2 = 5, the output should be
tennisSet(score1, score2) = false.

Since both players won at least 5 games, the set would've ended once one of them won the 7th one.

For score1 = 6 and score2 = 5, the output should be
tennisSet(score1, score2) = false.
*/

function tennisSet(score1, score2) {
    if(score1 == 7 && score2 <5) return false
    if(score1 <5 && score2 ==7) return false
    if(score1 == 7 && score2 <=6 ) return true
    if(score1 <=6 && score2 ==7 ) return true
    if(score1 ==6 && score2 <5) return true
    if(score1 <5 && score2 ==6) return true
    
    return false
}



