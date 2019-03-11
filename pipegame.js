/*
Carlos always loved playing video games, especially the well-known computer game "Pipes". Today he finally decided to write his own version of the legendary game from scratch.

In this game the player has to place the pipes on a rectangular field to make water pour from each source to a respective sink. He has already come up with the entire program, but one question still bugs him: how can he best check that the arrangement of pipes is correct?

It's your job to help him figure out exactly that.

Carlos has 7 types of pipes in his game, with numbers corresponding to each type:

1 - vertical pipe
2 - horizontal pipe
3-6 - corner pipes
7 - two pipes crossed in the same cell (note that these pipes are not connected)
Here they are, pipes 1 to 7, respectively:



Water pours from each source in each direction that has a pipe connected to it (thus it can even pour in all four directions). The puzzle is solved correctly only if all water poured from each source eventually reaches a corresponding sink.

Help Carlos check whether the arrangement of pipes is correct. If it is correct, return the number of cells with pipes that will be full of water at the end of the game. If not, return -X, where X is the number of cells with water before the first leakage point is reached, or if the first drop of water reaches an incorrect destination (whichever comes first). Assume that water moves from one cell to another at the same speed.

Example

For

state = ["a224C22300000",
         "0001643722B00",
         "0b27275100000",
         "00c7256500000",
         "0006A45000000"]
the output should be pipesGame(state) = 19.

Here is how the game will end:



Input/Output
*/
var dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]]

var dirChange = {// 1 = switch i and j, -1 = reverse dir and switch i and j
    '3' : -1,
    '4' : 1,
    '5' : -1,
    '6' : 1
}

function pipesGame(state) {
    var starts = []
    for (let i = 0; i < state.length; i ++) {
        for (let j = 0; j < state[i].length; j ++) {
            if (state[i][j].charCodeAt(0) >= 97 && state[i][j].charCodeAt(0) <= 122) starts.push([i, j, state[i][j].charCodeAt(0) - 32])
        }
    }
    function getLength(i, j, iDir, jDir, length) {
        if (length < smallestLeak) {
            var iDirNew = iDir
            var jDirNew = jDir
            var changeCode = dirChange[state[i][j]]
            if (changeCode === 1) { iDirNew = jDir; jDirNew = iDir }
            if (changeCode === -1) { iDirNew = -jDir; jDirNew = -iDir }
            var nextSquareOk = validDir(i, j, iDirNew, jDirNew)
            if (nextSquareOk) {
                set.add('' + (i + iDirNew) + ', ' + (j + jDirNew))
                getLength(i + iDirNew, j + jDirNew, iDirNew, jDirNew, length + 1)
            } else {
                if (state[i + iDirNew] && state[i + iDirNew][j + jDirNew] === String.fromCharCode(end)) leaks[pipe] = 0
                lengths.push(length)
            }
        }
    }
    function validDir(i, j, iDir, jDir) {
        var currentSquare = state[i][j]
        var nextSquare = state[i + iDir] ? state[i + iDir][j + jDir] : undefined
        if (iDir === 1) {
            switch (nextSquare) {
                case '1': return true
                case '5': return true
                case '6': return true
                case '7': return true
            }
        }
        else if (iDir === -1) {
            switch (nextSquare) {
                case '1': return true
                case '3': return true
                case '4': return true
                case '7': return true
            }
        }
        else if (jDir === 1) {
            switch (nextSquare) {
                case '2': return true
                case '4': return true
                case '5': return true
                case '7': return true
            }
        }
        else if (jDir === -1) {
            switch (nextSquare) {
                case '2': return true
                case '3': return true
                case '6': return true
                case '7': return true
            }
        }
    }
    var lengths, pipe, leaks, set, end
    var smallestLeak = Infinity
    function run() {
        lengths = []
        pipe = -1
        leaks = []
        set = new Set()
        for (let i = 0; i < starts.length; i ++) {
            var iCoord = starts[i][0]
            var jCoord = starts[i][1]
            end = starts[i][2]
            for (let j = 0; j < dirs.length; j ++) {
                var iDir = dirs[j][0]
                var jDir = dirs[j][1]
                if (validDir(iCoord, jCoord, iDir, jDir)) {
                    pipe ++
                    leaks.push(1)
                    getLength(iCoord, jCoord, iDir, jDir, 0)
                }
            }
        }
    }
    run()
    var totLeaks = leaks.length ? leaks.reduce((a, v) => a + v) : 0
    if (!totLeaks) return set.size
    leaks.map((leak, i) => { if (leak && lengths[i] < smallestLeak) smallestLeak = lengths[i] })
    run()
    return -set.size
}
