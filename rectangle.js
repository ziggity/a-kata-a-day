/*
A rectangle with sides equal to even integers a and b is drawn on the Cartesian plane. Its center (the intersection point of its diagonals) coincides with the point (0, 0), but the sides of the rectangle are not parallel to the axes; instead, they are forming 45 degree angles with the axes.

How many points with integer coordinates are located inside the given rectangle (including on its sides)?

Example

For a = 6 and b = 4, the output should be
rectangleRotation(a, b) = 23.

The following picture illustrates the example, and the 23 points are marked green.



Input/Output

[execution time limit] 4 seconds (js)

*/

function rect(a,b){
  const root2 = Math.sqrt(2);
  const evenDots = dim => 2 * Math.floor((root * dim +2)/4);
  const oddDots = dim => 2 * Math.floor(root2 *dim/4)+1;
  return oddDots(a) * oddDots(b) + evenDots(a) *evenDots(b);
}
