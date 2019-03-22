function game2048(grid, path) {
    const rows = grid.length,
          columns = grid[0].length
    //Shift from left to right 
    function execute(s) {
        //get initial length of the array
        const len = s.length 
        //ignore spaces(0)
        s = s.filter(v => v)
        let i = s.length - 1
        //Go from right to left 
        //Check current value equals next value 
        //If true set next value to 0 and multiple current value by 2
        //Since this while we move we will ignore 0 cells(has already been merged)
        while(i >= 0) {
            if(s[i] && s[i] === s[i - 1]) {
                s[i] *= 2
                s[i - 1] = 0
            }
            i--
        }
        //Remove empty cells
        s = s.filter(v => v)
        //Recreate valid array will empty cells at the beginning
        return new Array(len - s.length).fill(0).concat(s)
    }
    function set(data, x, y, dx, dy) {
        //With a transformed array set a row or column of the grid to this array
        //base on x, y, dx, dy
        data = execute(data)
        data.forEach(v => grid[x += dx][y += dy] = v)
    }
    
    function LR(dir) {
        for(let i = 0;i < rows;i++) {
            let part = []
            for(let j = 0;j < columns;j++) part.push(grid[i][j])
            //We shift or right so row will not change => dx = 0
            //If we shift right: we set from left to right so dy += 1
            //Shift left
            //'cuz shift left is just a mirror of shift right
            //so we just reverse part and use execute() to handle like shift right
            //So when we go to set, data[left...right] = grid[right...left]
            dir === 'R' ? set(part, i, -1, 0, 1) : set(part.reverse(), i, columns, 0, -1)
        }
    }
    function UD(dir) {
        for(let j = 0;j < columns;j++) {
            let part = []
            //Here is the same as LR
            for(let i = 0;i < rows;i++) part.push(grid[i][j])
            dir === 'D' ? set(part, -1, j, 1, 0) : set(part.reverse(), rows, j, -1, 0)
        }
    }
    for(let command of path) 'LR'.includes(command) ? LR(command) : UD(command)
    
    return grid
}


//Other method:
var grid;

step = { L: [ 0, -1],
	 R: [ 0,  1],
	 U: [-1,  0],
	 D: [ 1,  0] };

// Works on individual cell
addStepCell = (r, c, dr, dc) => {
    var vR = (grid[r+dr]||[])[c+dc];
    if (vR && vR == grid[r][c]) {
	console.log({r: r, c: c, vr: vR, nr: r+dr, nc: c+dc});
	grid[r+dr][c+dc] += vR;
	grid[r][c] = 0;
    }
};

moveCell = (r, c, dr, dc) => {
    var vR = (grid[r+dr]||[])[c+dc];
    if (!grid[r][c] || vR===undefined || vR)
	return;
    grid[r+dr][c+dc] = grid[r][c];
    grid[r][c] = 0;
};


function cycleThruCells(move, f, invert) {
    invert = 1; // invert ? -1 : 1;
    var walk = step[move].map(m => m ? m*invert : invert);
    for (var r = 0; r < 4; r++)
	for (var c = 0; c < 4; c++)
	    f(walk[0]+1 ? 3-r : r, walk[1]+1 ? 3-c : c);
}

//var O = ""; cycleThruCells("L", (r,c) => ( O += [r,c] + "|", O.length-16 || console.log(O, O="")));

game2048 = (g, path) => {
    grid = g.map(r => r.map(c => c));

    for (var move of path) {
	cycleThruCells(move, (r,c) => moveCell(r,c,...step[move]));
	cycleThruCells(move, (r,c) => moveCell(r,c,...step[move]));
	cycleThruCells(move, (r,c) => moveCell(r,c,...step[move]));
	cycleThruCells(move, (r,c) => addStepCell(r,c,...step[move]));
	cycleThruCells(move, (r,c) => moveCell(r,c,...step[move]));
	cycleThruCells(move, (r,c) => moveCell(r,c,...step[move]));
	cycleThruCells(move, (r,c) => moveCell(r,c,...step[move]));
    }

    return grid;
}
