function drawRectangle(canvas, rectangle) {
        let x1 = rectangle[0], y1 = rectangle[1];
        let x2 = rectangle[2], y2 = rectangle[3];

        canvas[y1][x1] = '*' // top left corner [1,1]
        canvas[y1][x2] = '*' // right top corner [1,4]
        canvas[y2][x2] = '*' // right bottom corner [3,4]
        canvas[y2][x1] = '*' // left bot corner [3, 1]
   
      for(let i = x1+1; i<x2; i++){
          canvas[y1][i] = '-'
          canvas[y2][i] = '-'
      }
        for(let i = y1+1; i<y2; i++){
          canvas[i][x1] = '|'
          canvas[i][x2] = '|'
      }

      return canvas;
        
}
