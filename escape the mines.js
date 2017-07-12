A poor miner is trapped in a mine and you have to help him to get out !

Only, the mine is all dark so you have to tell him where to go.

In this kata, you will have to implement a method solve(map, miner, exit) that has to return the path the miner must take to reach the exit as an array of moves, such as : ['up', 'down', 'right', 'left']. There are 4 possible moves, up, down, left and right, no diagonal.

map is a 2-dimensional array of boolean values, representing squares. false for walls, true for open squares (where the miner can walk). It will never be larger than 5 x 5. It is laid out as an array of columns. All columns will always be the same size, though not necessarily the same size as rows (in other words, maps can be rectangular). The map will never contain any loop, so there will always be only one possible path. The map may contain dead-ends though.

miner is the position of the miner at the start, as an object made of two zero-based integer properties, x and y. For example {x:0, y:0} would be the top-left corner.

exit is the position of the exit, in the same format as miner.

Note that the miner can't go outside the map, as it is a tunnel.

Let's take a pretty basic example :

var map = [[true, false],
    [true, true]];

solve(map, {x:0,y:0}, {x:1,y:1});
// Should return ['right', 'down']


--------------------------------------------------------------

class Brian {
  constructor (map, exit) {
    this.map = map;
    this.exit = exit;
    this.found = false;

    this.visited = [];

    for (let i = 0; i<map.length; i++) {
      this.visited.push(new Array(map[0].length));
    }

    this.path = [];

  }

  outOfBoundaries (x,y) {
    return (x < 0 || y < 0 || x >= this.map.length || y >= this.map[0].length);
  }

  walk (x, y) {
    if(x === this.exit.x && y === this.exit.y) {
      this.found = true;
      return true;
    }

    if(this.found || this.outOfBoundaries(x,y) || !this.map[x][y] || this.visited[x][y]) {
      return false;
    }

    this.visited[x][y] = true;
    
    let moveLeft = this.walk(x-1,y, 'left');
    let moveUp = this.walk(x,y-1, 'up');
    let moveRight = this.walk(x+1,y, 'right');
    let moveDown = this.walk(x,y+1, 'down');

    let currentMovement = moveLeft ? 'left' : moveUp ? 'up' : moveRight ? 'right': moveDown ? 'down' : false;

    if(currentMovement) {
      this.path.push(currentMovement);
    }

    return !!currentMovement;
  }

  keepWalking (x ,y) {
    this.walk(x, y);

    return this.path.reverse();
  }

}

function solve(map, miner, exit) {
  var brian = new Brian(map, exit);
  return brian.keepWalking(miner.x, miner.y);
}


clever solution:

function solve(map, miner, exit) {
  var walked = {};

  var findExit = function (curX, curY, path) {

    if ((curX == exit.x) && (curY == exit.y)) {
      return path;
    }
    
    if (!map[curX] || !map[curX][curY] || walked[curX+'x'+curY]) {
      return;
    }
    
    walked[curX+'x'+curY] = true;

    return findExit(curX + 1, curY, path.concat('right'))
      || findExit(curX, curY + 1, path.concat('down'))
      || findExit(curX - 1, curY, path.concat('left'))
      || findExit(curX, curY - 1, path.concat('up'))
    ;  
  };

  return findExit(miner.x, miner.y, []);
}
