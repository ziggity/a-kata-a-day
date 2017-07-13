In order to stop too much communication from happening, your overlords declare that you are no longer allowed to use certain functionality in your code!

Disallowed functionality:

Strings
Numbers
Regular Expressions
Functions named "Hello", "World", "HelloWorld" or anything similar.
Object keys named "Hello", "World", "HelloWorld" or anything similar.
Without using the above, output the string "Hello World!" to prove that there is always a way.


const helloWorld = () => {
  const zero  = p => x => x;
  const one   = p => x => p(zero(p)(x));
  const two   = p => x => p(one(p)(x));
  const three = p => x => p(two(p)(x));
  const four  = p => x => p(three(p)(x));
  const five  = p => x => p(four(p)(x));
  const six   = p => x => p(five(p)(x));
  const seven = p => x => p(six(p)(x));
  const eight = p => x => p(seven(p)(x));
  const nine  = p => x => p(eight(p)(x));
  
  const zeroLiteral = +[];
  const oneLiteral = !+[];
  
  const toInteger = number => number(x => x + oneLiteral)(zeroLiteral);
  
  const charCodes = [
      [seven, two],
      [one, zero, one],
      [one, zero, eight],
      [one, zero, eight],
      [one, one, one],
      [three, two],
      [eight, seven],
      [one, one, one],
      [one, one, four],
      [one, zero, eight],
      [one, zero, zero],
      [three, three]
  ];
  
  return charCodes.map(codes => codes.map(fn => toInteger(fn).toString()).join(String()))
    .map(number => String.fromCharCode(number))
    .join(String())
}

// -----------------------

console.log(helloWorld()); // => "Hello World!"


----------------------------------------------
clever answer: 

var helloWorld = function () {
  var one = +true
  var two = one + one
  var four = two + two
  var eight = four + four
  var sixteen = eight + eight
  var thirtytwo = sixteen + sixteen
  var sixtyfour = thirtytwo + thirtytwo
  var sp = thirtytwo
  var excl = thirtytwo + one
  var H = sixtyfour + eight
  var e = sixtyfour + thirtytwo + four + one
  var l = sixtyfour + thirtytwo + eight + four
  var o = sixtyfour + thirtytwo + sixteen - one
  var W = sixtyfour + sixteen + eight - one
  var r = sixtyfour + thirtytwo + sixteen + two
  var d = sixtyfour + thirtytwo + four
  return [H, e, l, l, o, sp, W, o, r, l, d, excl].map(function (c) { return String.fromCharCode(c) }).join([])
}
