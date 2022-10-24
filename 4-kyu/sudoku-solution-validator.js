/*
https://www.codewars.com/kata/529bf0e9bdf7657179000008/train/javascript

Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array representing a Sudoku board, and returns true if it is a valid solution, or false otherwise. The cells of the sudoku board may also contain 0's, which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.

The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.
Examples

validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
]); // => true

validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2], 
  [6, 7, 2, 1, 9, 0, 3, 4, 8],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9]
]); // => false

*/

const validSolution = board => {
  const arrayOfArrays = [];
  
  const arrHasNums = arr => {
    for (let i = 1; i < 10; i++) {
      if(!arr.includes(i)) {
        return false;
      }
    }
    return true;
  }
  
  const checkAllArrays = arr => {
    for (let i = 0; i < arr.length; i++) {
      if (!arrHasNums(arr[i])) {
        return false;
      }
    }
    return true;
  }
  
  //add rows
  board.forEach(arr => arrayOfArrays.push(arr));
  
  //add cols
  let colArr = [];
  for (let r = 0; r < board.length; r++) {
    let col = [];
    
    for (let c = 0; c < board[r].length; c++) {
      col.push(board[c][r]); //magic
    }
    
    arrayOfArrays.push(col);
  }
  
  //add quadrants
  const addQuadArr = (x, y) => {
    let quadArr = [];
    for (let r = x; r < 3 + x; r++) {
      for (let c = y; c < 3 + y; c++) {
        quadArr.push(board[r][c]);
      }
    }
    return quadArr;
  }
  
  //loop through each quadrant
  for (let a = 0; a < 6; a += 3) {
    for (let b = 0; b < 6; b += 3) {
      arrayOfArrays.push(addQuadArr(a, b))
    }
  }
  
  return checkAllArrays(arrayOfArrays);
}