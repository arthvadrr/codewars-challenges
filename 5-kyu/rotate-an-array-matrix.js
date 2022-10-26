/*
https://www.codewars.com/kata/525a566985a9a47bc8000670/train/javascript

Write a rotate function that rotates a two-dimensional array (a matrix) either clockwise or anti-clockwise by 90 degrees, and returns the rotated array.

The function accepts two parameters: an array, and a string specifying the direction or rotation. The direction will be either "clockwise" or "counter-clockwise".

Here is an example of how your function will be used:

var matrix = [[1, 2, 3],
              [4, 5, 6],
              [7, 8, 9]];

rotate(matrix, "clockwise"); // Would return  [[7, 4, 1], [8, 5, 2],  [9, 6, 3]]

To help you visualize the rotated matrix, here it is formatted as a grid:

 [[7, 4, 1],
  [8, 5, 2],
  [9, 6, 3]]

Rotated counter-clockwise it would looks like this:

 [[3, 6, 9],
  [2, 5, 8],
  [1, 4, 7]]
*/

const rotate = (matrix, direction) => {
  const rowLength = matrix[0].length;
  const colLength = matrix.length;
  const size = colLength - 1;
  let rotated = Array.from(Array(rowLength), ()=>Array.from(colLength));
  
  for (let r = 0; r < colLength; r++) {
    for (let c = 0; c < rowLength; c++) {
      rotated[c][size - r] = matrix[r][c];
    }
  }
  
  if (direction === 'counter-clockwise') {
    rotated = rotated.reverse().map(arr => arr.reverse());
  }
  
  return rotated;
}
// 

// 00 => 02
// 10 => 01
// 20 => 00

// 01 => 12
// 11 => 11
// 21 => 10

// 02 => 22
// 12 => 21
// 22 => 20