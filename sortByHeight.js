/*

Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.

Example

For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

*/

Thoughts: We'll need to keep track of the trees, so we'll push those to an array. We need to sort the non trees, and push that to an array. We'll join things together and return the new array.

function sortByHeight(a){
  var treePos = [];
  var heights = [];
  for(var i=0;)
}
function sortByHeight(a) {
    var treePos = [];
    var heights = [];
    for(var i = 0; i < a.length; i++) {
      if(a[i] === -1) {
          treePos.push(i);
      } else {
          heights.push(a[i]);
          console.log(heights)
      }
    }
    var sortedHeights = heights.sort(function(aa, bb) {
        return aa - bb;
    });
    for(var j = 0; j < a.length; j++) {
      if(treePos.indexOf(j) !== - 1) {
        sortedHeights.splice(j, 0, -1);
        console.log(sortedHeights)
      }
    }
    return sortedHeights;
}

sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]);
