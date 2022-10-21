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
