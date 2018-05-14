/*
Given a character, check if it represents an odd digit, an even digit or not a digit at all.

Example

For symbol = '5', the output should be
characterParity(symbol) = "odd";
For symbol = '8', the output should be
characterParity(symbol) = "even";
For symbol = 'q', the output should be
characterParity(symbol) = "not a digit".
*/

function characterParity(symbol) {
   if(isNaN(symbol)) return 'not a digit'
    symbol = parseInt(symbol)
    if(typeof symbol !== 'number' || typeof symbol == NaN) return 'not a digit';
    return (symbol %2 == 0) ? 'even': 'odd';
}

// other method
function characterParity(symbol) {
    if (symbol >= '0' && symbol <= '9') {
        return symbol % 2 == 0 ? 'even' : 'odd';
    }
    return 'not a digit';
}

// other method
function characterParity(symbol) {
    var result = "not a digit";
    var num = symbol.charCodeAt();
    if (num > 47 && num < 58) {
        if (num %2  == 0) result = "even";
        else result = "odd";
    }
    return result;
}
