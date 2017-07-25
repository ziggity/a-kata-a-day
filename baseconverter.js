In this kata you have to implement a base converter, which converts between arbitrary bases / alphabets. Here are some pre-defined alphabets:

var Alphabet = {
  BINARY:        '01',
  OCTAL:         '01234567',
  DECIMAL:       '0123456789',
  HEXA_DECIMAL:  '0123456789abcdef',
  ALPHA_LOWER:   'abcdefghijklmnopqrstuvwxyz',
  ALPHA_UPPER:   'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA:         'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
};
The function convert() should take an input (string), the source alphabet (string) and the target alphabet (string). You can assume that the input value always consists of characters from the source alphabet. You don't need to validate it.

Examples:

// convert between numeral systems
convert("15", Alphabet.DECIMAL, Alphabet.BINARY); // should return "1111"
convert("15", Alphabet.DECIMAL, Alphabet.OCTAL); // should return "17"
convert("1010", Alphabet.BINARY, Alphabet.DECIMAL); // should return "10"
convert("1010", Alphabet.BINARY, Alphabet.HEXA_DECIMAL); // should return "a"

// other bases
convert("0", Alphabet.DECIMAL, Alphabet.ALPHA); // should return "a"
convert("27", Alphabet.DECIMAL, Alphabet.ALPHA_LOWER); // should return "bb"
convert("hello", Alphabet.ALPHA_LOWER, Alphabet.HEXA_DECIMAL); // should return "320048"
convert("SAME", Alphabet.ALPHA_UPPER, Alphabet.ALPHA_UPPER); // should return "SAME"
Additional Notes:

The maximum input value can always be encoded in a number without loss of precision in JavaScript. In Haskell, intermediate results will probably be to large for Int.
The function must work for any arbitrary alphabets, not only the pre-defined ones
You don't have to consider negative numbers
________________________________________

clever solution: 

function convert(input, source, target) {
  var inBase = source.length, len = input.length;
  var value = input.split('')
    .reduce(function(p,v,i){return p+source.indexOf(v)*Math.pow(inBase,len-i-1)},0);
  return toBase(value,target);
}

function toBase(value, target){
  var base = target.length;
  if(value<base) return ''+target.charAt(value);
  return toBase(Math.floor(value/base),target) + target.charAt(value%base);
}

_____________________________________

function convert(input, sourceAlph, targetAlph) {

  var inputInDecimal = convertToDecimal(input, sourceAlph);

  return convertToTarget(inputInDecimal, targetAlph);

}

function convertToDecimal(input, sourceAlph) {

  var
    sourcePositionMap = getPositionMap(sourceAlph),
    sourceBase = sourceAlph.length;

  return input.split('').reverse().reduce(function(accum, item, index) {
    return accum + (Math.pow(sourceBase, index) * sourcePositionMap[item]);
  }, 0);

}

function convertToTarget(inputInDecimal, targetAlph) {

  var
    targetSymbolMap = getSymbolMap(targetAlph),
    targetBase = targetAlph.length,
    remainderPositions = [],
    dividend;

  dividend = inputInDecimal;
  do {
    remainderPositions.push(dividend % targetBase);
    dividend = Math.floor(dividend / targetBase);
  } while (dividend > 0);
  return remainderPositions.reverse().map(function(position) {
    return targetSymbolMap[position];
  }).join('');

}

function getPositionMap(alph) {
  return mapper(alph, function(accum, item, index) {
    accum[item] = index;
    return accum;
  });
}
function getSymbolMap(alph) {
  return mapper(alph, function(accum, item, index) {
    accum[index] = item;
    return accum;
  });
}
function mapper(alph, reduceFn) {
  return alph.split('').reduce(reduceFn, {});
}
