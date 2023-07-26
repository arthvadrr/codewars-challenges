def validate_sudoku(board):
    array_of_arrays = []

    def arr_has_nums(arr):
        for i in range(1, 10):
            if not i in arr: return False
        return True

    def check_all_arrays(arr):
        for row in arr:
            if not arr_has_nums(row): return False
            return True

    for row in board: array_of_arrays.append(row)
        
    for r in range(len(board)): 
        col = []
        for c in range(len(board[r])):
            col.append(board[c][r])
        array_of_arrays.append(col)

    def add_quad_arr(x, y):
        quad_arr = []
        quad_length_x = x + 3
        quad_length_y = y + 3

        for r in range(x, quad_length_x):
            for c in range(y, quad_length_y):
                quad_arr.append(board[r][c])
        return quad_arr
        
    for a in range(7):
        if a % 3 != 0: continue
        for b in range(7):
            if a % 3 != 0: continue
            array_of_arrays.append(add_quad_arr(a, b))

    return check_all_arrays(array_of_arrays)


print(validate_sudoku([[5,3,4,6,7,8,9,1,2],
				  [6,7,2,1,9,5,3,4,8],
				  [1,9,8,3,4,2,5,6,7],
				  [8,5,9,7,6,1,4,2,3],
				  [4,2,6,8,5,3,7,9,1],
				  [7,1,3,9,2,4,8,5,6],
				  [9,6,1,5,3,7,2,8,4],
				  [2,8,7,4,1,9,6,3,5],
				  [3,4,5,2,8,6,1,7,9]]))

print(validate_sudoku([[1,2,3,4,5,6,7,8,9],
				  [1,2,3,4,5,6,7,8,9],
				  [1,2,3,4,5,6,7,8,9],
				  [1,2,3,4,5,6,7,8,9],
				  [1,2,3,4,5,6,7,8,9],
				  [1,2,3,4,5,6,7,8,9],
				  [1,2,3,4,5,6,7,8,9],
				  [1,2,3,4,5,6,7,8,9],
				  [1,2,3,4,5,6,7,8,9]]))

valid_solution=lambda b,f=lambda e:{*e}=={*range(1,10)}:all(map(f,b))and all(map(f,zip(*b)))and 9==len({*b[0][0:3],*b[1][0:3],*b[2][0:3]})
