/*
t's say that number a feels comfortable with number b if a ≠ b and b lies in the segment [a - s(a), a + s(a)], where s(x) is the sum of x's digits.

How many pairs (a, b) are there, such that a < b, both a and b lie on the segment [l, r], and each number feels comfortable with the other?

Example

For l = 10 and r = 12, the output should be
comfortableNumbers(l, r) = 2.

Here are all values of s(x) to consider:

s(10) = 1, so 10 is comfortable with 9 and 11;
s(11) = 2, so 11 is comfortable with 9, 10, 12 and 13;
s(12) = 3, so 12 is comfortable with 9, 10, 11, 13, 14 and 15.
Thus, there are 2 pairs of numbers comfortable with each other within the segment [10; 12]: (10, 11) and (11, 12).
*/

function comfortableNumbers(l, r) {
    function addDigits(num){
        return [...num.toString()].map(x => +x).reduce((a,b) => a + b);
        }
        function comfortable(a,b){
           const sum = addDigits(a);
            return a - sum <= b && b <= a + sum;
    }
    
    let chillers = 0;
    
    for(let a = l; a <r; a++){
        for(let b = a + 1; b <= r; b++){
            if(comfortable(a,b) && comfortable(b,a)) chillers++;
        }
        
    }
    return chillers;
}

    
