/*
In the Land Of Chess, bishops don't really like each other. In fact, when two bishops happen to stand on the same diagonal, they immediately rush towards the opposite ends of that same diagonal.

Given the initial positions (in chess notation) of two bishops, bishop1 and bishop2, calculate their future positions. Keep in mind that bishops won't move unless they see each other along the same diagonal.

Example

For bishop1 = "d7" and bishop2 = "f5", the output should be
bishopDiagonal(bishop1, bishop2) = ["c8", "h3"].



For bishop1 = "d8" and bishop2 = "b5", the output should be
bishopDiagonal(bishop1, bishop2) = ["b5", "d8"].

The bishops don't belong to the same diagonal, so they don't move
*/
function bishopDiagonal(bishop1, bishop2) {
    let x1 = bishop1[0].charCodeAt(0)-'a'.charCodeAt(0),
        y1 = bishop1[1].charCodeAt(0)-'1'.charCodeAt(0),
        x2 = bishop2[0].charCodeAt(0)-'a'.charCodeAt(0),
        y2 = bishop2[1].charCodeAt(0)-'1'.charCodeAt(0);
    let s1 = bishop1, s2 = bishop2;
    const intToChar = ((x1, y1)=>{
     return String.fromCharCode(x1+'a'.charCodeAt(0))
         +  String.fromCharCode(y1+'1'.charCodeAt(0));
  
    })
    if (Math.abs(x1-y1)==Math.abs(x2-y2)){
        s1 = "";
        s2 = "";
        while (x1>0&&y1>0){
            x1--; 
            y1--;
        }
        while (x2<7&&y2<7){
            x2++;
            y2++;
        }
        s1 = intToChar(x1, y1);
        s2 = intToChar(x2, y2);
    }
    else if (x1+y1==x2+y2){
        s1 = "";
        s2 = "";
        while (x1>0&&y1<7){
            x1--;
            y1++;
        }
        while (x2<7&&y2>0){
            x2++;
            y2--;
        }
        s1 = intToChar(x1, y1);
        s2 = intToChar(x2, y2);
    }
    if (s1<s2)
        return [s1, s2];
    return [s2, s1];
}
