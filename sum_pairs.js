Sum of Pairs

Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

sum_pairs([11, 3, 7, 5],         10)
#              ^--^      3 + 7 = 10
== [3, 7]

sum_pairs([4, 3, 2, 3, 4],         6)
#          ^-----^         4 + 2 = 6, indices: 0, 2 *
#             ^-----^      3 + 3 = 6, indices: 1, 3
#                ^-----^   2 + 4 = 6, indices: 2, 4
#  * entire pair is earlier, and therefore is the correct answer
== [4, 2]

sum_pairs([0, 0, -2, 3], 2)
#  there are no pairs of values that can be added to produce 2.
== None/nil/undefined (Based on the language)

sum_pairs([10, 5, 2, 3, 7, 5],         10)
#              ^-----------^   5 + 5 = 10, indices: 1, 5
#                    ^--^      3 + 7 = 10, indices: 3, 4 *
#  * entire pair is earlier, and therefore is the correct answer
== [3, 7]
Negative numbers and duplicate numbers can and will appear.

NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.


------------------------------------------------------------------------------------------------------------------------

Thoughts:

1. Given a list of ints [1,2,3 ..] sum= 10 return the first two values 
2. Add the first two index 0 and 1 of the array 
3. 

var ints = [1, 4, 8, 7, 3, 15];
var s = 8;

var sum_pairs = function(ints, s) {
    var map = {},
        pair, pairMaxIndex = ints.length - 1;

    for (var i = 0; i <= pairMaxIndex; i++) {
        var a = ints[i];
        var b = s - a;
        var j = map[b];
        console.log(map);
        if (j !== undefined && i <= pairMaxIndex && j <= pairMaxIndex) {
            pairMaxIndex = i > j ? i : j;
            pair = i < j ? [a, b] : [b, a];
        }
        var tmp = map[a];
        if (tmp === undefined || i < tmp) {
            map[a] = i;
        }
    }
    return pair;
};

sum_pairs(ints, s);
