#Define an alphabet reflection as follows: a turns into z, b turns into y, c turns into x, ..., n turns into m, m turns into n, ..., z turns into a.

#Define a string reflection as the result of applying the alphabet reflection to each of its characters.

#Reflect the given string.

#Example
#For inputString = "name", the output should be
#reflectString(inputString) = "mznv".

#Input/Output
#[time limit] 4000ms (py)

#[input] string inputString
#A string of lowercase characters.
#Constraints:
#3 ≤ inputString.length ≤ 10.

#[output] string

def reflectString(inputString):
    outputString = []
    for i in range(0,len(inputString)):
        outputString.append(chr(ord('z')+ord('a')-ord(inputString[i])))
    return ''.join(outputString)
    
    
    // JS method
    
    function reflectString(inputString) {
    var ans = "";
    for(var i=0; i<inputString.length; ++i) {
        ans = ans + String.fromCharCode("a".charCodeAt(0) - inputString.charCodeAt(i) + "z".charCodeAt(0));
    }
    return ans;
}

// other

function reflectString(inputString) {
    
    function ref(ch) {
        var c = ch.charCodeAt() - 'a'.charCodeAt();
        c = 25-c;
        return String.fromCharCode('a'.charCodeAt()+c);
    }
    
    return inputString.split('').map(ref).join('');
}
