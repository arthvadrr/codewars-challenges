/*
https://www.codewars.com/kata/59cc72741a68b79dde00000d/train/javascript

Task

You are given a 2D integer array matrix. Your task is to find the max sum value of the contiguous-submatrix in it.
Example

For matrix =

[
[1,2,3],
[4,5,6],
[7,8,9]
]

The output should be 45(the whole 3x3 array)

For matrix =

[
[-1, -2, -3],
[ 4,  5,  6],
[-7, -8, -9]
]

The output should be 15(1x3 sub matrix).

[
[-1, -2, -3],
+-------------+
|[ 4,  5,  6],|
+-------------+
[-7, -8, -9]
]

For matrix =

[
[-1,  -2, -3],
[-4,   5, -6],
[-7,  -8, -9]
]

The output should be 5(1x1 sub matrix).

[
[-1,  -2, -3],
     +---+
[-4, | 5 |, -6],
     +---+
[-7,  -8, -9]
]

Note

    3 <= matrix.length <= 20

    -127 <= matrix[i][j] <= 127

    If you have the courage to face the challenge, please try the challenge version.

    Happy Coding ^_^
*/

const maxSumOf = m => sorted = m
.flat(100)
.sort((a, b) => a - b)
.reverse()
.reduce((a, b) =>  a + (b > 0 ? b : 0), 0);

//Really don't feel like more pathfinding! shelving it

console.log(maxSumOf([
  [1,2,3],
  [4,5,6],
  [7,8,9]
]))//45

maxSumOf([
  [-1, -2, -3],
  [ 4,  5,  6],
  [-7, -8, -9]
])//15

maxSumOf([
  [-1,  -2, -3],
  [-4,   5, -6],
  [-7,  -8, -9]
])//5

maxSumOf([
  [0,-2,-7,0],
  [9,2,-6,2],
  [-4,1,-4,1],
  [-1,8,0,-2]
])//15


