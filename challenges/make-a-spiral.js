/*
https://www.codewars.com/kata/534e01fbbb17187c7e0000c6/train/javascript

Your task, is to create a NxN spiral with a given size.

For example, spiral with size 5 should look like this:

00000
....0
000.0
0...0
00000

and with the size 10:

0000000000
.........0
00000000.0
0......0.0
0.0000.0.0
0.0..0.0.0
0.0....0.0
0.000000.0
0........0
0000000000

Return value should contain array of arrays, of 0 and 1, with the first row being composed of 1s. For example for given size 5 result should be:

[[1,1,1,1,1],[0,0,0,0,1],[1,1,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]

Because of the edge-cases for tiny spirals, the size will be at least 5.

General rule-of-a-thumb is, that the snake made with '1' cannot touch to itself.
*/

const spiralize = n => {
  const board = Array.from({ length: n }, () => Array(n).fill(0));
  let position = [0, 0];
  let range = n - 1;
  let start = 0;
  let lines = 0; // The amount of straight lines to make a spiral will always equal n
  // .map(str => parseInt(str));
  const move = func => (position = func(position));
  const right = ([x, y]) => [x + 1, y];
  const left = ([x, y]) => [x - 1, y];
  const up = ([x, y]) => [x, y - 1];
  const down = ([x, y]) => [x, y + 1];
  const flip = ([x, y]) => (board[y][x] = '*');

  const drawLine = dir => {
    move(dir);
    flip(position);
  };

  //draw lines
  while (lines < n) {
    flip(position); //flip the starting position

    while (position[0] < range) {
      drawLine(right);
    }
    lines++;
    if (lines === n) break;

    //go down
    while (position[1] < range) {
      drawLine(down);
    }
    lines++;
    if (lines === n) break;

    //go left
    while (position[0] > start) {
      drawLine(left);
    }
    lines++;
    if (lines === n) break;

    start += 2;
    range -= 2;

    // go back up
    while (position[1] > start) {
      drawLine(up);
    }
    lines++;
  }

  return board;
};
