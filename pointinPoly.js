The problem

In this kata, you're going write a function called pointInPoly to test if a point is inside a polygon.

Points will be represented as [x,y] arrays.

The polygon will be an array of points which are the polygon's vertices. The last point in the array connects back to the first point.

You can assume:

The polygon will be a valid simple polygon. That is, it will have at least three points, none of its edges will cross each other, and exactly two edges will meet at each vertex.
In the tests, the point will never fall exactly on an edge of the polygon.
Testing

To help you visualize your test cases, the showAndTest(poly,point,inside) function is preloaded. It draws the polygon and point and then calls Test.expect automatically.

So if you call:

showAndTest([[-5, -5], [5, -5], [0, 5]], [0,0], true)
then you'll see:

The drawing window is 14x14 units wide and centered at the origin.

------------------------------------------------------------------------------------------
Solution:

//Return true if point is inside poly, and false if it is not

function pnpoly(nvert, vertx, verty, testx, testy)
{
  let i, j, c = false;
  for (i = 0, j = nvert-1; i < nvert; j = i++)
  {
    if ( ((verty[i]>=testy) != (verty[j]>=testy)) && (testx <= (vertx[j]-vertx[i]) * (testy-verty[i]) / (verty[j]-verty[i]) + vertx[i]) )
       c = !c;
  }
  return c;
}

function pointInPoly(poly, point) {
  let x = [], y = [];
  for (let i = 0; i < poly.length; i++)
  {
    x.push(poly[i][0]);
    y.push(poly[i][1]);
  }
  let res = pnpoly(poly.length, x, y, point[0], point[1]);
  return res;
}

pnpoly()

clever solution:

//Return true if point is inside poly, and false if it is not
function pointInPoly(poly, point) {
  var x = point[0];
  var y = point[1];
    
  var isInside = false;
  for (var i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    var xi = poly[i][0];
    var yi = poly[i][1];

    var xj = poly[j][0];
    var yj = poly[j][1];

    var shouldCheck = (yi > y) !== (yj > y);
    if (shouldCheck) {
      var slope = (xj - xi) / (yj - yi);

      if (x < slope * (y - yi) + xi) {
        isInside = !isInside;
      }
    }
  }

  return isInside;
}

Thoughts:

1. interesting challenge, wish there was a way to visualize what is happening with the polygon creation. 
