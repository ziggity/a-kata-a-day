/*
Call two arms equally strong if the heaviest weights they each are able to lift are equal.

Call two people equally strong if their strongest arms are equally strong (the strongest arm can be both the right and the left), and so are their weakest arms.

Given your and your friend's arms' lifting capabilities find out if you two are equally strong.

Example

For yourLeft = 10, yourRight = 15, friendsLeft = 15 and friendsRight = 10, the output should be
areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) = true;
*/

function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  
  var yourWeakest = (yourLeft <= yourRight) ? yourLeft : yourRight;
 
  var yourStrongest = (yourLeft >= yourRight) ? yourLeft : yourRight;
  
  var friendsStrongest = (friendsLeft >= friendsRight) ? friendsLeft : friendsRight;
  
  var friendsWeakest = (friendsLeft <= friendsRight) ? friendsLeft : friendsRight;
  
  
return (yourStrongest === friendsStrongest && yourWeakest === friendsWeakest) ? true : false;
}
