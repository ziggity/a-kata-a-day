/*
H-Tree Construction
An H-tree is a geometric shape that consists of a repeating pattern resembles the letter “H”.

It can be constructed by starting with a line segment of arbitrary length, drawing two segments of the same length at right angles to the first through its endpoints, and continuing in the same vein, reducing (dividing) the length of the line segments drawn at each stage by √2.

Here are some examples of H-trees at different levels of depth:

alt depth = 1

alt depth = 2

alt depth = 3

Write a function drawHTree that constructs an H-tree, given its center (x and y coordinates), a starting length, and depth. Assume that the starting line is parallel to the X-axis.

Use the function drawLine provided to implement your algorithm. In a production code, a drawLine function would render a real line between two points. However, this is not a real production environment, so to make things easier, implement drawLine such that it simply prints its arguments (the print format is left to your discretion).

Analyze the time and space complexity of your algorithm. In your analysis, assume that drawLine's time and space complexities are constant, i.e. O(1).
*/

function drawHTree(x,y, length, depth){
  
  if(depth == 0){
    return 0; // stopping point
  }
  let endpoint1 = x
  let middle = length /2;
  let endpoint2 = y
  
  // x0 x1
  // y0 y1
  // upper left
  // upper right
  // lower left
  // lower right
  
  let x0 = x - length / 2; // left site
  let x1 = x + length / 2; // right side
  let y0 = y-length /2; // lower side
  let y1 = y+length/2; // upper side
  
  // draw single H letter

  console.log(depth);
  
  drawHTree(x0,y0,length / 2,depth-1); // upperright
  drawHTree(x1,y0,length / 2,depth-1); // lowerright
  drawHTree(x0,y1,length / 2,depth-1); //
  drawHTree(x1,y1,length / 2,depth-1);
}

function drawLine(upperleft, upperright, lowerright){
 
}

drawHTree(1, 1, 10, 5);
