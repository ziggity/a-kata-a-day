function spiralNumbers(n) {
    var total = (n * n);
    var square = [];
    for (var r = 0; r < n; r += 1) {
        square[r] = [];
    }
     var i = 0, x = 0, y = 0, size = n, todo = n, turns = 0, xinc = 1, yinc = 0;
        for (i; i < total; i += 1) {
            square[y][x] = i + 1;
            todo -= 1;
            if (todo === 0) {
                turns += 1;
                if (turns % 2 === 1) { 
                    xinc = 0;
                    if (turns % 4 === 3) { 
                        yinc = -1;
                    } else {
                        yinc = 1;
                    }
                    size -= 1;
                } else { 
                    yinc = 0;
                    if (turns % 4 === 0) {
                        xinc = 1;
                    } else {
                        xinc = -1;
                    }
                }
                todo = size;
            }
            x += xinc;
            y += yinc;
        }
        return square;
    }


spiralNumbers(4)

// Construct a square matrix with a size N × N containing integers from 1 to N * N in a spiral order, starting from top-left and in clockwise direction.

// Example

// For n = 3, the output should be

// spiralNumbers(n) = [[1, 2, 3],
//                     [8, 9, 4],
//                     [7, 6, 5]]
