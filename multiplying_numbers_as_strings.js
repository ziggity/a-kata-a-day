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

Here's the clever solution on codewars: They use stack to solve it, and regex to clean it up.

function multiply(a, b) {
  var aa = a.split('').reverse();
  var bb = b.split('').reverse();

  var stack = [];

  for (var i = 0; i < aa.length; i++) {
    for (var j = 0; j < bb.length; j++) {
      var m = aa[i] * bb[j];
      stack[i + j] = (stack[i + j]) ? stack[i + j] + m : m;
    }
  }

  for (var i = 0; i < stack.length; i++) {
    var num = stack[i] % 10;
    var move = Math.floor(stack[i] / 10);
    stack[i] = num;

    if (stack[i + 1])
      stack[i + 1] += move;
    else if (move != 0)
      stack[i + 1] = move;
  }


  return stack.reverse().join('').replace(/^(0(?!$))+/, "");
}

Another take on it: 

/**
 * Multiply two very big numbers passed as string.
 * @param {string} rawA
 * @param {string} rawB
 * @return {string}
 */
function multiply(rawA, rawB) {
  const a = prepareTerm(rawA);
  const b = prepareTerm(rawB);
  
  return formatResult(carryValues(computeSubProducts(a, b)));
}

/**
 * Convert a string to an array of digits, then reverse its order
 * so the least significant digit comes first (to simplify looping).
 * e.g. '13' => [3, 1]
 * @param {string} num
 * @param {array<number>}
 */
function prepareTerm(num) {
  return num.split('').map(digit => parseInt(digit, 10)).reverse();
}

/**
 * Compute the sums of the subproducts of the two terms.
 * e.g. [3, 2] * [5, 4] => [(3 * 5), (3 * 4) + (2 * 5), (2 * 4)] => [15, 22, 8]
 * @param {array<number>} a
 * @param {array<number>} b
 * @return {array<number>}
 */
function computeSubProducts(a, b) {
  const products = [];
  
  for (let i = 0; i < a.length; i++) {
    let da = a[i];
  
    for (let j = 0; j < b.length; j++) {
      let db = b[j];
    
      let k = i + j;
      if (k >= products.length) products.push(0);
      
      products[k] += da * db;
    }
  }
  
  return products;
}

/**
 * Turn the array of sub-products into an array of digits, carrying the values over.
 * Note that the last item in the returned array may be a number rather than a single digit.
 * e.g. [15, 22, 8] => [5, (22 + 1), 8] => [5, 3, (8 + 2)] => [5, 3, 0, 1]
 * @param {array<number>} products
 * return {array<number>}
 */
function carryValues(products) {
  return products.reduce((digits, prod, i) => {
    // Push the current digit
    digits.push(prod % 10);
    
    // Carry the value
    const val = Math.floor(prod / 10);
    if (i + 1 < products.length) {
      products[i + 1] += val;
    } else {
      digits.push(val);
    }
    
    return digits;
  }, []);
}

/**
 * Turn the digits array into the expected result string
 * making sure to strip any leading zeros.
 * e.g. [5, 3, 0, 1] => '1035'
 * @param {array<number>} digits
 * @return {string}
 */
function formatResult(digits) {
  // Reverse digits array and turn it into a string
  const result = digits.reverse().map(d => d.toString()).join('');
  
  // Remove leading zeros
  return result.replace(/^0*(\d+)$/, '$1');
}

Shortest one: 

function multiply(a, b) {
  return a.split('').reduceRight((p, a, i) => 
      b.split('').reduceRight((p, b, j) => {
        const mul = (a - '0') * (b - '0');
        const p1 = i + j;
        const p2 = p1 + 1;
        const sum = mul + valOrZero(p[p2]);
                
        p[p1] = valOrZero(p[p1]) + Math.floor(sum / 10);
        p[p2] = sum % 10;
                
        return p;
      }, p)
    , []).join('').replace(/^0+(?=\d)/, '');
  }

function valOrZero(v) {
  return v || 0;
}
