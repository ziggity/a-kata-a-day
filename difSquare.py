"""Given a rectangular matrix containing only digits, calculate the number of different 2 × 2 squares in it.

Example

For

matrix = [[1, 2, 1],
          [2, 2, 2],
          [2, 2, 2],
          [1, 2, 3],
          [2, 2, 1]]
the output should be
differentSquares(matrix) = 6.

Here are all 6 different 2 × 2 squares:

1 2
2 2
2 1
2 2
2 2
2 2
2 2
1 2
2 2
2 3
2 3
2 1
Input/Output

[execution time limit] 4 seconds (py)

[input] array.array.integer matrix

Guaranteed constraints:
1 ≤ matrix.length ≤ 100,
1 ≤ matrix[i].length ≤ 100,
0 ≤ matrix[i][j] ≤ 9.
"""
def differentSquares(matrix):
	squares = []
	count = 0
	for i in range(len(matrix)-1):
		for j in range(len(matrix[0])-1):
			square=[matrix[i][j], matrix[i][j+1], matrix[i+1][j], matrix[i+1][j+1]]
			if square not in squares:
				squares.append(square)
				count+=1
	return count
