You are writing an encoder/decoder to convert between javascript strings and a binary representation of Morse code.

Each Morse code character is represented by a series of "dots" and "dashes". In binary, a dot is a single bit (1) and a dash is three bits (111). Between each dot or dash within a single character, we place a single zero bit. (I.e. "dot dash" would become 10111.) Separate characters are separated by three zero bits (000). Words are spearated by a single space, which is represented by 7 zero bits (0000000).



Formal Syntax

Binary Morse code has the following syntax: (Where '1' and '0' are literal bits.)
    message    ::= word
                 | word 0000000 message

    word       ::= character
                 | character 000 word

    character  ::= mark
                 | mark 0 character

    mark       ::= dot
                 | dash

    dot (·)    ::= 1

    dash (–)   ::= 111


Morse Code

Chracters in Morse code are traditionally represented by a series of dots and dashes. Below is the full list of characters supported by our Binary Morse code:
A    ·–
B    –···
C    –·–·
D    –··
E    ·
F    ··–·
G    ––·
H    ····
I    ··
J    ·–––
K    –·–
L    ·–··
M    ––
N    –·
O    –––
P    ·––·
Q    ––·–
R    ·–·
S    ···
T    –
U    ··–
V    ···–
W    ·––
X    –··–
Y    –·––
Z    ––··
0    –––––
1    ·––––
2    ··–––
3    ···––
4    ····–
5    ·····
6    –····
7    ––···
8    –––··
9    ––––·
.    ·–·–·–
,    ––··––
?    ··––··
'    ·––––·
!    –·–·––
/    –··–·
(    –·––·
)    –·––·–
&    ·–···
:    –––···
;    –·–·–·
=    –···–
+    ·–·–·
-    –····–
_    ··––·–
"    ·–··–·
$    ···–··–
@    ·––·–·

Note that space itself is not a character but is interpreted as the separater between words. 


The first method Morse.encode will take a String representing the message and will return an array of signed 32-bit integers in big-endian order and in two's complement format. (Note: This is the standard format for numbers returned by JavaScript bitwise operators.) Since it is possible that the Morse encoded message will not align perfectly with the binary 32-bit numbers, all unused bits are to be padded with 0's. 


The second method Morse.decode will take an array of numbers and return the String representation of the message.

Example

Text content  H           E     L             L             O           [space] W             O               R           L             D       
Morse Code    ····        ·     ·−··          ·−··          −−−                 ·−−           −−−             ·−·         ·−··          −··     
Bit pattern   1010101 000 1 000 101110101 000 101110101 000 11101110111 0000000 101110111 000 11101110111 000 1011101 000 10111010 1000 1110101 00000000000000000
32-bit Value  -1,440,552,402                       | -1,547,992,901                    | -1,896,993,141                      | -1,461,059,584
Hex Value     AA22 EA2E                            | A3BB 80BB                         | 8EEE 2E8B                           | A8EA 0000
              ^        ^          ^        ^        ^         ^       ^         ^       ^         ^        ^        ^         ^         ^        ^       ^
              |        |          |        |        |         |       |         |       |         |        |        |         |         |        |       |
              0        8          16       24       0         8       16        24      0         8        16       24        0         8        16      24
ALGORITHMSBITSBINARYSTRINGSNUMBERSINTEGERSPARSING

function b2d(s)
{
  let res = 0;
  let neg = false;
  if (s[0] == '1')
  {
    neg = true;
    s = s.split('');
    for (let i = 0; i < s.length; i++)
      s[i] = s[i] == '0' ? '1' : '0';
    s = s.join('');
  }
  return neg ? -(parseInt(s, 2) + 1) : parseInt(s, 2);
}

function d2b(dec,length){
  var out = "";
  while(length--)
    out += (dec >> length ) & 1;    
  return out;  
}

var Morse = {};

Morse.encode = function(message){
  // ·–·–·– ·–·–·– ·–·–·–
  let temp = "";
  for (let i = 0; i < message.length; i++)
  {
    if (message[i] == ' ')
      temp += "0000000";
    else
    {
      if (i > 0 && message[i-1] != ' ')
        temp += "000";
      temp += Morse.alpha[message[i]];
    }
  }
  while (temp.length % 32 != 0)
    temp += '0';
  var res = [];
  for (let i = 0; i < temp.length; i += 32)
    res.push(b2d(temp.substr(i, 32)));
  return res;
};

Morse.decode = function(integerArray){
  // ·–·–·– ·–·–·– ·–·–·–
  let s = "";
  for (let i = 0; i < integerArray.length; i++)
  {
    if (integerArray[i] >= 0)
      s += d2b(integerArray[i], 32);
    else
    {
      let temp = d2b(-integerArray[i]-1, 32);
      temp = temp.split('');
      for (let i = 0; i < temp.length; i++)
        temp[i] = temp[i] == '0' ? '1' : '0';
      temp = temp.join('');
      s += temp;
    }
  }
  let i = s.length - 1;
  for (; i >= 0 && s[i] == '0'; i--);
  s = s.substring(0, i+1);
  s = s.split('0000000')
  for (let i = 0; i < s.length; i++)
    s[i] = s[i].split('000');
  var dec = {};
  for (let k in Morse.alpha)
    dec[Morse.alpha[k]] = k;
  for (let i = 0; i < s.length; i++)
  {
    for (let j = 0; j < s[i].length; j++)
      s[i][j] = dec[s[i][j]];
    s[i] = s[i].join('');
  }
  return s.join(' ');
};

Morse.alpha = {
  'A': '10111',
  'B': '111010101',
  'C': '11101011101',
  'D': '1110101',
  'E': '1',
  'F': '101011101',
  'G': '111011101',
  'H': '1010101',
  'I': '101',
  'J': '1011101110111',
  'K': '111010111',
  'L': '101110101',
  'M': '1110111',
  'N': '11101',
  'O': '11101110111',
  'P': '10111011101',
  'Q': '1110111010111',
  'R': '1011101',
  'S': '10101',
  'T': '111',
  'U': '1010111',
  'V': '101010111',
  'W': '101110111',
  'X': '11101010111',
  'Y': '1110101110111',
  'Z': '11101110101',
  '0': '1110111011101110111',
  '1': '10111011101110111',
  '2': '101011101110111',
  '3': '1010101110111',
  '4': '10101010111',
  '5': '101010101',
  '6': '11101010101',
  '7': '1110111010101',
  '8': '111011101110101',
  '9': '11101110111011101',
  '.': '10111010111010111',
  ',': '1110111010101110111',
  '?': '101011101110101',
  "'": '1011101110111011101',
  '!': '1110101110101110111',
  '/': '1110101011101',
  '(': '111010111011101',
  ')': '1110101110111010111',
  '&': '10111010101',
  ':': '11101110111010101',
  ';': '11101011101011101',
  '=': '1110101010111',
  '+': '1011101011101',
  '-': '111010101010111',
  '_': '10101110111010111',
  '"': '101110101011101',
  '$': '10101011101010111',
  '@': '10111011101011101',
  ' ': '0000000' // Technically is 7 0-bits, but we assume that a space will always be between two other characters
};


Bitwise operator | coerces operands to 32-bit signed two's complement values.

