/*
You've been invited to a job interview at a famous company that tests programming challenges. To evaluate your coding skills, they have asked you to parse a given problem's input given as an inputString string, and count the number of primitive type elements within it.

The inputString can be either a primitive type variable or an array (possibly multidimensional) that contains elements of the primitive types.
A primitive type variable can be:

an integer number;
a string, which is surrounded by " characters (note that it may contain any character except ");
a boolean, which is either true or false.
Return the total number of primitive type elements inside inputString.

Example

For inputString = "[[0, 20], [33, 99]]", the output should be
countElements(inputString) = 4;
For inputString = "[ "one", 2, "three" ]", the output should be
countElements(inputString) = 3;
For inputString = "true", the output should be
countElements(inputString) = 1;
For inputString = "[[1, 2, [3]], 4]", the output should be
countElements(inputString) = 4.
*/

function countElements(inputString) 
{
    inputString = inputString.split('')
    var quote = false;
    
    for(var i=0; i<inputString.length; i++)
    {
        if(inputString[i] === '\"') 
        {
            quote = !quote;
        }
        if(inputString[i] === ',' || inputString[i] === ']' || inputString[i] === '[')
        {
            if(quote) inputString[i] = ' ';
        }
    }
    
    var a = inputString.join('').split(",")
    var count = 0;
    
    for(var i of a)
    {
        var s = i.substr(i.lastIndexOf('[')+1).trim()
        var num = parseInt(s);                
        
        if(Number(num).toString() !== 'NaN')
        {
            count++;
        }
        else
        {
            if(s.indexOf(']') !== -1) s = s.substr(0, s.indexOf(']'));
            s = s.trim();            
            
            if(s[0] === '\"' && s[s.length-1] === '\"') count++;
            else if(s === "true" || s === "false") count++;            
        }
    }
    console.log(a)
    return count;
}
