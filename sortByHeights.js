/*
Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.

Example

For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer a

If a[i] = -1, then the ith position is occupied by a tree. Otherwise a[i] is the height of a person standing in the ith position.

Guaranteed constraints:
5 ≤ a.length ≤ 15,
-1 ≤ a[i] ≤ 200.

[output] array.integer

Sorted array a with all the trees untouched.
*/

function sortByHeight(a) {
let array2 = a;
array2 = array2.filter((element) => {
  if(element != -1){
    return element;
  }
}).sort(function(a,b){
  return a - b;
});
var indexValue = 0;
for(let i=0; i<a.length; i++){
 if( a[i] != -1){
   a[i] = array2[indexValue];
   indexValue++;
 }
}
return a;
}

// or another method:

function sortByHeight(a) {
    const temp = a.filter(value => { return value !== -1}).sort((a,b) => a - b)
    
    let index = 0;
    for(let i = 0; i < a.length; i++){
        if(a[i] !== -1){
            a[i] = temp[index]
            index++
        }
    }
    
    return a
}
