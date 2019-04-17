function snakeGame(gameBoard, commands) {
    //0__________ y
    //|
    //|
    //|
    //|
    //v 
    //x
    const dy = [-1, 0, 1, 0],
          dx = [0, -1, 0, 1],
          row = gameBoard.length,
          col = gameBoard[0].length,
          control = '<^>v'
    //Use a stack to store the position of the snake's parts
    //Each time the snake move:
    //+ Remove tail
    //+ Add new head
    let dir, 
        snake = [], 
        //Store position of the snake's head
        head,
        //Keep track position of snake's parts
        //When we start retrieving snake's parts we also use this(dfs)
        visited = Array.from({length : row }, v => new Array(col).fill(false)),
        finalState = gameBoard.map(v => v.map(o => '.'))
    
    //DFS
    function getSnake(X, Y) {
        const positions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
        for(let d of positions) {
            const [dx, dy] = d
            let x = X + dx,
                y = Y + dy
            //Avoid outside the board of visited
            if(-1 < x && x < row && -1 < y && y < col && !visited[x][y]) {
                if(gameBoard[x][y] === '*') {
                    visited[x][y] = true
                    //push the position of the snake's part and continue searching
                    snake.push([x, y])
                    getSnake(x, y)
                    return 
                }
            }
        }
    }
    
    const mod = n => (n + 4) % 4
    //Get the head of the snake
    for(let i in gameBoard) {
        for(let j in gameBoard[i]) {
            if(control.includes(gameBoard[i][j])) {
                dir = control.indexOf(gameBoard[i][j])
                i = +i
                j = +j
                snake.push([i, j])
                visited[i][j] = true
                head = [i, j]
                break;
            }
        }
    }
    //Start constructing the snake, starting from it's head
    getSnake(...head)
    
    for(let command of commands) {
        //Change direction?
        if('LR'.includes(command)) {
            command === 'L' ? dir = mod(dir - 1) : dir = mod(dir + 1)
            continue
        }
        //Get position of the snake's head the next time
        const x = snake[0][0] + dx[dir],
              y = snake[0][1] + dy[dir]
        //Did it die?
        if(x < 0 || x >= row || y < 0 || y >= col || visited[x][y]) {
             snake.forEach(v => finalState[v[0]][v[1]] = 'X')
             return finalState
        }
        //Remove the tail(also remove the position of the tail)
        const [tailX, tailY] = snake.pop()
        visited[tailX][tailY] = false
        //Add new position of it's head
        snake.unshift([x, y])
    }
    //Final part: Display the snake......
    snake.forEach(v => finalState[v[0]][v[1]] = '*')
    //Set it's head correctly according to the current direction
    finalState[snake[0][0]][snake[0][1]] = control[dir]
    return finalState
   
}
