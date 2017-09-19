tions are Hoisted
In JavaScript, a variable can be declared after it has been used.

In other words; a variable can be used before it has been declared.

Example 1 gives the same result as Example 2:

Example 1
x = 5; // Assign 5 to x

elem = document.getElementById("demo"); // Find an element 
elem.innerHTML = x;                     // Display x in the element

var x; // Declare x

bad hoisting example:

function hoist(track){
    var action;
    if (track === 'down with') {
    action = 'dance';
    }
    else {
    var action = 'skip';
    }
  return action
}

function hoist(track){


}
