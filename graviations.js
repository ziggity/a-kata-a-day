/*
You are given a vertical box divided into equal columns. Someone dropped several stones from its top through the columns. Stones are falling straight down at a constant speed (equal for all stones) while possible (i.e. while they haven't reached the ground or they are not blocked by another motionless stone). Given the state of the box at some moment in time, find out which columns become motionless first.

Example

For

rows = ["#..##",
        ".##.#",
        ".#.##",
        "....."]
the output should be gravitation(rows) = [1, 4].

Check out the image below for better understanding:



Input/Output

[execution time limit] 4 seconds (py)

[input] array.string rows

A non-empty array of strings of equal length consisting only of #-s and .-s describing the box at a specific moment in time. Sharps represent stones, and dots represent empty cells. row[0] corresponds to the upper row. Last element of rows corresponds to the ground level.

Guaranteed constraints:
2 ≤ rows.length ≤ 10,
2 ≤ rows[i].length ≤ 10.
*/
function gravitation(rows) {
    minTimer = rows.length;
    answer = [];
    for (i = 0; i < rows[0].length; i++) {
      finish = rows.length - 1;
      timer = 0
      for (j = rows.length - 1; j >= 0; j--) {
        if (rows[j].charAt(i) === "#") {
          timer = finish - j;
          finish--;
        }
      }

      if(timer === minTimer) answer.push(i)
      if(timer < minTimer){
        minTimer = timer
        answer = []
        answer.push(i)
      }
    }
    return answer
}
