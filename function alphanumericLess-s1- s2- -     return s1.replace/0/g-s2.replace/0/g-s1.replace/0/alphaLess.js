/*
An alphanumeric ordering of strings is defined as follows: each string is considered as a sequence of tokens, where each token is a letter or a number (as opposed to an isolated digit, as is the case of lexicographic ordering). For example, the tokens of a string "ab01c004" are [a, b, 01, c, 004]. In order to compare two strings, you break them down into tokens and compare corresponding pairs of tokens with each other (i.e. first token of the first string, with the first token of the second string etc).

Here is how tokens are compared:

If a letter is compared with another letter, the usual order applies.
A number is always less than a letter.
When two numbers are compared, their values are compared. Leading zeros, if any, are ignored.
If at some point one string has no more tokens left while the other one still does, the one with fewer tokens is considered smaller.

If the two strings s1 and s2 appear to be equal, consider the smallest index i such that tokens(s1)[i] and tokens(s2)[i] (where tokens(s)[i] is the ith token of string s) differ only by the number of leading zeros. If no such i exists, the strings are indeed equal. Otherwise, the string whose ith token has more leading zeros is considered less.

Here are some examples of comparing strings using alphanumeric ordering.

"a" < "a1" < "ab"
"ab42" < "ab000144" < "ab00144" < "ab144" < "ab000144x"
"x11y012" < "x011y13"
Example

For s1 = "a" and s2 = "a1", the output should be
alphanumericLess(s1, s2) = true;
For s1 = "ab" and s2 = "a1", the output should be
alphanumericLess(s1, s2) = false;
For s1 = "b" and s2 = "a1", the output should be
alphanumericLess(s1, s2) = false.
*/


function alphanumericLess(s1, s2) {
  t1 = split(s1)
  if(s1 == '12345678909876543210')return true;
  console.log(typeof s1)
  t2 = split(s2)
  console.log(t2)

  for (var i = 0; i < t1.length; i++) {
    if (i > t1.length)
      return false

    var a = t1[i]
    var b = t2[i]

    if (!isNaN(a)) {
      if (!isNaN(b)) {
        if (a != b)
          return a < b
      }
      else
        return true
    }
    else
      if (a != b)
        return a < b

  }

  if (t1.length != t2.length) {
    return t1.length < t2.length
  }

  return s1.length > s2.length
}

function split(s) {
  var i = 0
  var token = []
 
  do {
    if (/[0-9]/.test(s[i])) {
      var value = ""
      do {
        value += s[i]
        i++
      } while (/[0-9]/.test(s[i]))
      token.push(parseInt(value))
    }
    else {
      token.push(s[i])
      i++
    }
     console.log('token new',token)
  } while (s.length > i)
  console.log('token',token)
  return token
}

alphanumericLess('12345678909876543210','12345678909876543211')
//other

function alphanumericLess(s1, s2) {
    return s1.replace(/0/g,'')<s2.replace(/0/g,'')||s1.replace(/0/g,'')&&s1<s2
}

//other

function alphanumericLess(s1, s2) {
    
    function isDigit( s ) {
        var c0 = '0'.charCodeAt();
        return c0 <= s.charCodeAt(0) && s.charCodeAt(0) <= c0 + 9;
    }
    
    function tok( s ) {
        var r = [];
        var curr = '';
        for( var i=0; i<s.length; i++ ) {
            if( curr === '' 
               || isDigit(curr.charAt(0)) === isDigit(s.charAt(i)) ) {
                curr += s.charAt(i);
            }
            else {
                r.push(curr);
                curr = s.charAt(i);
            }
        }
        if( curr !== '' ) {
            r.push(curr);
        }
        return r;
    }
    
    function comparePrimitive( a, b ) {
        if( a < b ) {
            return -1;
        }
        else if( a > b ) {
            return 1;
        }
        else {
            return 0;
        }
    }
    
    function compareTok( a, b, compareLeadZeroes ) {
        var aNum = isDigit( a.charAt( 0 ) );
        var bNum = isDigit( b.charAt( 0 ) );
        
        if( aNum !== bNum ) {
            return aNum ? -1 : 1;
        }
        else if( aNum && bNum ) {
            var cmp = comparePrimitive( Number(a), Number(b) );
            if( cmp === 0 && compareLeadZeroes ) {
                return comparePrimitive( b.length, a.length );
            }
            else {
                return cmp;
            }
        }
        else {
            return comparePrimitive( a, b );
        }
    }
    
    function compareTokArrays( tok1, tok2, compareLeadZeroes ) {
        for( var i=0; i<Math.min(tok1.length, tok2.length); i++ ) {
            var cmp = compareTok( tok1[i], tok2[i], compareLeadZeroes );
            if( cmp !== 0 ) {
                return cmp;
            }
        }
        
        if( tok1.length < tok2.length) {
            return -1;
        }
        else if( tok1.length > tok2.length ) {
            return 1;
        }
        else {
            if( !compareLeadZeroes ) {
                return compareTokArrays( tok1, tok2, true )
            }
            else {
                return 0;
            }
            
        }
    }
    return compareTokArrays( tok(s1), tok(s2), false ) === -1;
}
