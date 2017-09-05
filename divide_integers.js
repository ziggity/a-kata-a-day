Given positive integers a and b as strings, evaluate a/b, and return the quotient and the remainder as strings in the form [quotient, remainder].

a and b can be very large
As usual, your results should not have leading 0s
require is disabled. Do it yourself ;-)

Thoughts:

1. stringify (toString()) the parameters
2.divide them 


Solution:

function divideStrings(a,b) {
  return [Math.floor(+a / +b).toString(), (+a % +b).toString()];  // This doesn't work on big numbers!
}

Issue is this doesn't handle huge #'s. 

How can we solve for huge #s you ask?

function divideStrings(a,b) {
  if(!strvalcmp(a, b)) return ['0',a];
  var quo = '', len = a.length-b.length, rem = a.slice(0,b.length);
  a = a.slice(b.length);
  for(let i=0; i<=len; i++) {
    var dgt = 0;
    for(;strvalcmp(rem,b);dgt++) rem = subtractStrings(rem,b);
    quo=(quo==='0'?'':quo)+dgt;
    rem=(rem==='0'?'':rem)+(a[0]||'');
    a=a&&a.slice(1);
  }
  return [quo+a,rem||'0'];
}
var strvalcmp=(a,b)=>a.length>b.length || (a.length===b.length && a>=b);
function subtractStrings(a, b) {
  if(a===b)return '0';
  var res = '', c = 0;
  a = a.split(''); b = b.split('');
  while (a.length || b.length || c) {
    c += ~~a.pop() - ~~b.pop();
    res = (c+10) % 10 + res;
    c = -(c < 0);
  }
  return res.replace(/^0+/, '');
}

We can dig through each step with console.logs here:

function divideStrings(a,b) {
  console.log('1', a, b) // 1 3 3 
  if(!strvalcmp(a, b)) return ['0',a];
  var quo = '', len = a.length-b.length, rem = a.slice(0,b.length);
  console.log('2', quo, len, rem) //2 0 3
  a = a.slice(b.length);
  console.log('3', a, b) // 3 3 
  for(let i=0; i<=len; i++) {
    var dgt = 0;
    console.log('4', a, b, dgt) // 4 3 0 
    for(;strvalcmp(rem,b);dgt++) rem = subtractStrings(rem,b);
    console.log('5', a, b, rem) // 5 3 0 
    quo=(quo==='0'?'':quo)+dgt;
    console.log('6', quo, a, b) // 6 1  3 
    rem=(rem==='0'?'':rem)+(a[0]||'');
    console.log('7', a, b, rem) // 7 3 
    a=a&&a.slice(1);
    console.log('8', a, b) // 8 3 
  }
  return [quo+a,rem||'0'];
}
var strvalcmp=(a,b)=>a.length>b.length || (a.length===b.length && a>=b);
function subtractStrings(a, b) {
  console.log('9', strvalcmp, a, b) // 3 3 
  if(a===b)return '0';
  console.log('10', a, b) // doesn't hit this if statement 
  var res = '', c = 0;
  a = a.split(''); b = b.split('');
  while (a.length || b.length || c) { // a.length OR b.length OR c
    c += ~~a.pop() - ~~b.pop(); 
    console.log('11', c, a, b) // doesn't hit this while loop condition not met
    res = (c+10) % 10 + res;
    c = -(c < 0);
  }
  return res.replace(/^0+/, '');
}
divideStrings('3', '3')

