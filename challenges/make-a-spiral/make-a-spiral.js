const spiralize = n => {
  const board = [];
  let range = n - 1;
  let start = 0;
  let position = [0, 0];
  let count = 0;

  const createRow = () =>
    '0'
      .repeat(n)
      .split('')
      .map(str => parseInt(str));
  const move = func => (position = func(position));
  const right = ([y, x]) => [y + 1, x];
  const left = ([y, x]) => [y - 1, x];
  const up = ([y, x]) => [y, x - 1];
  const down = ([y, x]) => [y, x + 1];
  const flip = ([y, x]) => (board[x][y] = 1);

  //Add rows to the board
  Array.from({ length: n }, () => board.push(createRow()));

  while (count < n) {
    flip(position);

    while (position[0] < range) {
      move(right);
      flip(position);
    }
    count++;
    if (count === n) break;

    //go down
    while (position[1] < range) {
      move(down);
      flip(position);
    }

    count++;
    if (count === n) break;

    //go left
    while (position[0] > start) {
      move(left);
      flip(position);
    }
    count++;
    if (count === n) break;

    start += 2;
    range -= 2;

    // go back up
    while (position[1] > start) {
      move(up);
      flip(position);
    }
    count++;
    if (count === n) break;
  }

  return board;
};
