/*
Some people run along a straight line in the same direction. They start simultaneously at pairwise distinct positions and run with constant speed (which may differ from person to person).

If two or more people are at the same point at some moment we call that a meeting. The number of people gathered at the same point is called meeting cardinality.

For the given starting positions and speeds of runners find the maximum meeting cardinality assuming that people run infinitely long. If there will be no meetings, return -1 instead.

Example

For startPosition = [1, 4, 2] and speed = [27, 18, 24], the output should be
runnersMeetings(startPosition, speed) = 3.

In 20 seconds after the runners start running, they end up at the same point. Check out the gif below for better understanding:



Input/Output

[execution time limit] 4 seconds (py)

[input] array.integer startPosition

A non-empty array of integers representing starting positions of runners (in meters).

Guaranteed constraints:
2 ≤ startPosition.length ≤ 10,
-1000 ≤ startPosition[i] ≤ 1000.

[input] array.integer speed

Array of positive integers of the same length as startPosition representing speeds of the runners (in meters per minute).

Guaranteed constraints:
speed.length = startPosition.length,
1 ≤ speed[i] ≤ 30.

[output] integer

The maximum meeting cardinality or -1 if there will be no meetings.
*/
function mtime(c1, c2, speed1, speed2) {
    
    if (speed1 === speed2) {
        return -1; // c1 !== c2, so they will never meet
    }
    
    return (c1 - c2) / (speed2 - speed1);
}

function runnersMeetings(startPosition, speed) {
    var times = { };
    var bestTime = -1;
    var bestCard = 0;
    
    for (var i = 0; i < startPosition.length; i++) {
        for (var j = i + 1; j < startPosition.length; j++) {
            const time = mtime(startPosition[i], startPosition[j],
                              speed[i], speed[j]);
            var f;
            
            if (time < 0) { // They will never meet
                continue;
            }
            
            f = times[time];
            if (f === undefined) {
                f = 0;
            } 
            times[time] = ++f;
            
            if (f > bestCard) {
                bestCard = f;
                bestTime = time;
            }
        }
    }
    
    if (bestTime === -1) {
        return -1;
    }
    
    return Math.round(1 + Math.sqrt(1 + 8 * bestCard)) >> 1;
}
