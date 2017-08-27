4 kyu
Multiplying numbers as strings

Instructions
Output
This is the first part. You can solve the second part here when you are done with this. Multiply two numbers! Simple!

The arguments are passed as strings.
The numbers may be way very large
Answer should be returned as a string
The returned "number" should not start with zeros e.g. 0123 is invalid
Note: 100 randomly generated tests!

Some of the methods we'll use to solve this are:

The Array.from() method creates a new Array instance from an array-like or iterable object.

const bar = ["a", "b", "c"];
var y = Array.from(bar);
// ["a", "b", "c"]

var xy = Array.from('foo');
// ["f", "o", "o"]

So Array.from() is sorta similar to split(' ') in the sense of var x = 'test';
x.split('') // --> ['s','p','l','i','t']

Although this split method doesn't mutate x, as Array.from will mutate xy. 

Let's take a crack at it: 

Should we use const, let or var? http://wesbos.com/let-vs-const/

In essence, let and const are block scope, which is anything between {}, and var is function scope. Also const can't be modified, but let can be updated, and var should only be declared once per function


function multiply(a, b) {
    const aRev = Array.from(a.toString()).reverse() //take the string input of a, make it an array (mutate), reverse it
        , bRev = Array.from(b.toString()).reverse() // do the same for b input
        , res = [] // make a blank  / empty array
        , reversedMultiply = (k, currM, currA) => // let's do some math
        res[k] = currM + currA // the index of res with input of k is now equal to two imnputs we pass in
        if (res[k] > 9) { // if index at [k] of res is greater than 9 do this
            const prevD = Math.floor(res[k] / 10) // we're going to round down
                , prevA = k + 1 >= res.length ? 0 : res[k + 1] //
            res[k + 1] = prevD + prevA
            res[k] -= prevD * 10
        }
    }
        , prepareLoop = (currA, aI) => {
        bRev.map((currB, bI) => { // let's use map method -> The map() method creates a new array with the results of calling a provided function on every element in the calling array.
            const keyI = aI + bI
                , multiplyCurrent = currA * currB
                , additionCurrent = keyI >= res.length ? 0 : res[keyI]
            reversedMultiply(keyI, multiplyCurrent, additionCurrent)
        })
    }
    aRev.map(prepareLoop)
    return res.reverse().join('').replace(/^0+/, '') || '0' // regex checking beggining of the array if it's a 0 replace with blank space and join back to a string to get our final return value
}


// some tricky things going on here.
