/*

Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.

Example

For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

*/

//Thoughts: We'll need to keep track of the trees, so we'll push those to an array. We need to sort the non trees, and push that to an array. We'll join things together and return the new array.

function sortByHeight(a) {
    var arr = [];
    var newArr = [];
   for (var i = 0; i < a.length; i++) {
       if (a[i] === -1) {
           arr.push(i);
       } else {
           newArr.push(a[i]);
       }
   }
   var sorted = newArr.sort((prev, current) => prev - current);
   for (var j = 0; j < arr.length; j++) {
       sorted.splice(arr[j],0,-1);
   }
   return sorted;
}

