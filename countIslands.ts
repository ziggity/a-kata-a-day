/*
Island Count
Given a 2D array binaryMatrix of 0s and 1s, implement a function getNumberOfIslands that returns the number of islands of 1s in binaryMatrix.

An island is defined as a group of adjacent values that are all 1s. A cell in binaryMatrix is considered adjacent to another cell if they are next to each either on the same row or column. Note that two values of 1 are not part of the same island if they’re sharing only a mutual “corner” (i.e. they are diagonally neighbors).

Explain and code the most efficient solution possible and analyze its time and space complexities.

Example:

input:  binaryMatrix = [ [0,    1,    0,    1,    0],
                         [0,    0,    1,    1,    1],
                         [1,    0,    0,    1,    0],
                         [0,    1,    1,    0,    0],
                         [1,    0,    1,    0,    1] ]

*/

namespace countIslandsOmega {
    export class Islands {
        static ROW : number = 5;

        static COL : number = 5;

        isSafe(M : number[][], row : number, col : number, visited : boolean[][]) : boolean {
            return (row >= 0) && (row < Islands.ROW) && (col >= 0) && (col < Islands.COL) && (M[row][col] === 1 && !visited[row][col]);
        }

        DFS(M : number[][], row : number, col : number, visited : boolean[][]) {
            let rowNbr : number[] = [-1, -1, -1, 0, 0, 1, 1, 1];
            let colNbr : number[] = [-1, 0, 1, -1, 1, -1, 0, 1];
            visited[row][col] = true;
            for(let k : number = 0; k < 8; ++k) if(this.isSafe(M, row + rowNbr[k], col + colNbr[k], visited)) this.DFS(M, row + rowNbr[k], col + colNbr[k], visited);;
        }

        countIslands(M : number[][]) : number {
            let visited : boolean[][] = <any> (function(dims) { let allocate = function(dims) { if(dims.length==0) { return undefined; } else { let array = []; for(let i = 0; i < dims[0]; i++) { array.push(allocate(dims.slice(1))); } return array; }}; return allocate(dims);})([Islands.ROW, Islands.COL]);
            let count : number = 0;
            for(let i : number = 0; i < Islands.ROW; ++i) for(let j : number = 0; j < Islands.COL; ++j) if(M[i][j] === 1 && !visited[i][j]) {
                this.DFS(M, i, j, visited);
                ++count;
            };;
            return count;
        }

        public static main(args : string[]) {
            let M : number[][] = [[1, 1, 0, 0, 0], [0, 1, 0, 0, 1], [1, 0, 0, 1, 1], [0, 0, 0, 0, 0], [1, 0, 1, 0, 1]];
            let I : Islands = new Islands();
            console.info("Number of islands is: " + I.countIslands(M));
        }
    }
    Islands["__class"] = "countIslandsOmega.Islands";

}


countIslandsOmega.Islands.main(null);
