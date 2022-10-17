const spiralize = n => {
  const board = [];
  let xStart = 0;
  let xEnd = n - 2;
  let yStart = 0;
  let yEnd = n - 2;
  let pathfinding = true;
  let position = [0, 0];
  let count = 0;
  let iteration = 0;

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

  Array.from({ length: n }, () => board.push(createRow()));

  while (pathfinding) {
    //go right
    while (position[0] <= xEnd - iteration) {
      flip(position);
      move(right);
    }
    count++;

    if (count === n) {
      pathfinding = false;
      break;
    }

    //go down
    while (position[1] <= yEnd - iteration * 2) {
      flip(position);
      move(down);
    }
    count++;

    if (count === n) {
      pathfinding = false;
      break;
    }

    //go left
    while (position[0] !== xStart + iteration * 2) {
      flip(position);
      move(left);
    }
    count++;

    if (count === n) {
      pathfinding = false;
      break;
    }

    //go back up
    console.log(position);
    while (Math.round(position[1] / 2) - 1 !== yStart + iteration) {
      flip(position);
      move(up);
    }
    count++;

    if (count === n) {
      pathfinding = false;
      break;
    }
    iteration++;
  }
  console.log(count);
  console.log(board);

  return board;
};
