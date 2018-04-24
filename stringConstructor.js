/*
How many strings equal to A can be constructed using letters from the string B? Each letter can be used only once and in one string only.
Example
For A = "abc" and B = "abccba", the output should be
stringsConstruction(A, B) = 2.
We can construct 2 strings A with letters from B.
https://codefights.com/arcade/code-arcade/mirror-lake
*/
function stringsConstruction(A, B) {
    var i=0;   
    var n=0;
    B=B.split("");
     
    while(B.indexOf(A[i])!=-1){
       // console.log(B)
        B.splice(B.indexOf(A[i]),1);
       //console.log('splice',B)
        i++;
        if(i==A.length){
            n++;
            i=0;
        }
    }
    return n;
}

// python;

def stringsConstruction(a, b):

    occurences = []
    for i in set(a):
        occurences += [b.count(i) / a.count(i)]
    return min(occurences)
