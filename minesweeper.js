/*

In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells. Starting off with some arrangement of mines we want to create a Minesweeper game setup.

Example

For

matrix = [[true, false, false],
          [false, true, false],
          [false, false, false]]
the output should be

minesweeper(matrix) = [[1, 2, 1],
                       [2, 1, 1],
                       [1, 1, 1]]       
                       
                       */
                       
   function minesweeper(matrix) {
    var getVal = function(y,x) {
        if(y < 0 || y >= matrix.length ||
          x < 0 || x >= matrix[0].length) {
            return false;
        } else{
            return matrix[y][x];
        }
    }
    var sumVals = function(y, x) {
        var sum = 0;
        for (var dx = -1; dx <= 1; dx++ ){
            for(var dy = -1; dy <= 1; dy++) {
                if (dx == 0 && dy == 0) continue;
                if(getVal(y + dy, x + dx)) sum++; 
            }
        }
        return sum; 
    }
    var res = [];
    for (var i = 0; i < matrix.length; i++) {
        var line = [];
        for (var j = 0 ; j < matrix[i].length; j++){
            line.push(sumVals(i, j));
        }
        res.push(line);
    }
    return res;
}﻿
