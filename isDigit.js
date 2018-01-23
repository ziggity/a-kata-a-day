function isDigit(symbol) {
   let digitArr = ['1','2','3','4','5','6','7','8','9','0'];
    if(digitArr.includes(symbol)){
        return true
    }
    return false;
}


isDigit('+')
// Determine if the given character is a digit or not.

// Example

// For symbol = '0', the output should be
// isDigit(symbol) = true;
// For symbol = '-', the output should be
// isDigit(symbol) = false.
