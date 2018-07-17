/*
Let's call product(x) the product of x's digits. Given an array of integers a, calculate product(x) for each x in a, and return the number of distinct results you get.

Example

For a = [2, 8, 121, 42, 222, 23], the output should be
uniqueDigitProducts(a) = 3.

Here are the products of the array's elements:

2: product(2) = 2;
8: product(8) = 8;
121: product(121) = 1 * 2 * 1 = 2;
42: product(42) = 4 * 2 = 8;
222: product(222) = 2 * 2 * 2 = 8;
23: product(23) = 2 * 3 = 6.
As you can see, there are only 3 different products: 2, 6 and 8.
*/

function uniqueDigitProducts(a) {
    const product = ((a)=>a<10 ? a : product(Math.floor(a/10))*(a%10));
    let mySet = new Set();
    for (let i of a)
        mySet.add(product(i));
    return mySet.size;
}


// or this method

function product(n) {
    const digits = [...('' + n)];
    
    return digits.reduce((a, v) => a * v, 1);
}

function uniqueDigitProducts(a) {
    const ans = [];
    
    for (var i = 0; i < a.length; i++) {
        const p = product(a[i]);

        if (!ans.includes(p)) {
            ans.push(p);
        }
    }
    
    return ans.length;
}

// or this method

function uniqueDigitProducts(a) {
    var set = new Set()
    for (let i = 0; i < a.length; i ++) {
        var arr = ('' + a[i]).split('')
        var prod = 1
        for (let j = 0; j < arr.length; j ++) {
            prod *= +arr[j]
        }
        set.add(prod)
    }
    return set.size
}

// one liner

uniqueDigitProducts=(a)=>[...new Set(a.map(x=>`${x}`.split('').map(Number).reduce((a,b)=>a*b,1)))].length;


