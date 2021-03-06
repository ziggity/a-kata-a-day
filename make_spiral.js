var spiralize = function(size) {

  var array = [];
  for (var i = 0; i < size; i++) {
    array[i] = [];
    for (var j = 0; j < size; j++) 
      array[i][j] = 0;
  }


  var direction = 'right';
  var x = -1;
  var y = 0;
  var k = 0;

  for (var i = -1; i < size * size + 1; i++) {
    if (direction === 'right') 
      if (x + k < size - 1 && array[y][x + 1 + k] !== 1) {
        x++; 
        array[y][x] = 1;
      }
        else direction = 'down';
    if (direction === 'down') 
      if (y + k < size - 1 && array[y + 1 + k][x] !== 1) {
        y++; 
        array[y][x] = 1;
      }
        else direction = 'left';
    if (direction === 'left') 
      if (x - k > 0 && array[y][x - 1 - k] !== 1 && array[y - 1][x - 1 - k] !== 1) {
        x--; 
        array[y][x] = 1;
      }
        else {
          direction = 'up';
          if (!k) k = 1;
        }
    if (direction === 'up') 
      if (y - k> 0 && array[y - 1 - k][x] !== 1) {
        y--; 
        array[y][x] = 1;
      }
        else direction = 'right';
    
  }
  return array;
}

console.log(spiralize(10));
