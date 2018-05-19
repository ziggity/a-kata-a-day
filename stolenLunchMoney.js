/*
When you recently visited your little nephew, he told you a sad story: there's a bully at school who steals his lunch every day, and locks it away in his locker. He also leaves a note with a strange, coded message. Your nephew gave you one of the notes in hope that you can decipher it for him. And you did: it looks like all the digits in it are replaced with letters and vice versa. Digit 0 is replaced with 'a', 1 is replaced with 'b' and so on, with digit 9 replaced by 'j'.

The note is different every day, so you decide to write a function that will decipher it for your nephew on an ongoing basis.

Example

For note = "you'll n4v4r 6u4ss 8t: cdja", the output should be
stolenLunch(note) = "you'll never guess it: 2390".
*/
function convertToNum (char) {
  return char.charCodeAt(0) - 97
  
}

function convertToChar (num) {
  return String.fromCharCode(num + 97)
}

function stolenLunch (note) {
  let convertedHolder = ''

  for (let char of note) {
    const toNum = convertToNum(char)
    const isNumber = `${ Number(char) }` === char

    const isConvertableChar = toNum < 10 && toNum > -1

    const converted = isNumber ?
      convertToChar(Number(char)) :
      isConvertableChar ?
        toNum :
        char
      

    convertedHolder += converted
      console.log(convertedHolder)
  }

  return convertedHolder
}

       note = "you'll n4v4r 6u4ss 8t: cdja";

       stolenLunch(note)
       
       // best method
       
       function stolenLunch(note) {
    return note.replace(/[0-9a-j]/g, (c)=>'0123456789abcdefghij'['abcdefghij0123456789'.indexOf(c)])
}
// other method

function stolenLunch(note) {

    var r = '';
    for( var i=0; i<note.length; i++ ) {
        var c = note.charCodeAt( i );
        var c0 = '0'.charCodeAt();
        var ca = 'a'.charCodeAt();
        
        if( c0 <= c && c <= c0 + 9 ) {
            r += String.fromCharCode( ca + c - c0 );
        }
        else if( ca <= c && c <= ca + 9 ) {
            r += String.fromCharCode( c0 + c - ca );
        }
        else {
            r += note.charAt( i );
        }
    }
    
    return r;
}


