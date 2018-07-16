/*
Given an array of integers, sort its elements by the difference of their largest and smallest digits. In the case of a tie, that with the larger index in the array should come first.

Example

For a = [152, 23, 7, 887, 243], the output should be
digitDifferenceSort(a) = [7, 887, 23, 243, 152].

Here are the differences of all the numbers:

152: difference = 5 - 1 = 4;
23: difference = 3 - 2 = 1;
7: difference = 7 - 7 = 0;
887: difference = 8 - 7 = 1;
243: difference = 4 - 2 = 2.
23 and 887 have the same difference, but 887 goes after 23 in a, so in the sorted array it comes first.

Input/Output

[execution time limit] 3 seconds (cs)

[input] array.integer a

An array of integers.

Guaranteed constraints:
0 ≤ sequence.length ≤ 104,
1 ≤ sequence[i] ≤ 105.


*/
function digitDifferenceSort(a) {
    var arr = new Array(10);
    for (var i = 0; i < 10; ++i)
    {
        arr[i] = [];
    }
    
    var len = a.length;
    for (var i = 0; i < len; ++i)
    {
        var df = countDiff(a[i]);
        arr[df].push(a[i]);
    }
    
    var res = [];
    for (var i = 0; i < 10; ++i)
    {
        var aLen = arr[i].length;
        for (var j = aLen - 1; j >= 0; --j)
        {
            res.push(arr[i][j]);
        }
    }
    
    return res;
}

function countDiff(n)
{
    var mx = -1;
    var mn = Infinity;
    while (n > 0)
    {
        var dig = n % 10;
        if (dig > mx)
        {
            mx = dig;
        }
        if (dig < mn)
        {
            mn = dig;
        }
        n = Math.floor(n / 10);
    }
    return mx - mn;
}
