function digitsProduct(product) {
    if(product ===0) return 10;
    if(product ===1) return 1;
    
    let factors = [];
    
    for(let factor =9; factor>1; factor--){
        while(product % factor ===0 ){
            factors.unshift(factor)
            product /= factor;
        }
    }
    return product > 1 ? -1 :parseInt(factors.join(''));
}

// Given an integer product, find the smallest positive (i.e. greater than 0) integer the product of whose digits is equal to product. If there is no such integer, return -1 instead.

// Example

// For product = 12, the output should be
// digitsProduct(product) = 26;
// For product = 19, the output should be
// digitsProduct(product) = -1.a
