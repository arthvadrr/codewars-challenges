/*
https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript

Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]

For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]

NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].
*/

const snail = array => {
  const path     = [];
  let   position = [0, 0];
  let   start    = 0;
  let   size     = array.length * array.length - 1;
  
  const left       = ([x, y]) => [x - 1, y];
  const right      = ([x, y]) => [x + 1, y];
  const up         = ([x, y]) => [x, y - 1];
  const down       = ([x, y]) => [x, y + 1];
  const move       = func => position = func(position);
  const push       = ([x, y]) => path.push(array[y][x]);
  const dirs       = [right, down, left, up];
  let   currentDir = 0;
  const changeDir  = () => currentDir === 3 ? currentDir = 0 : currentDir += 1;
  
  const moveAndPush = () => {
      move(dirs[currentDir]);
      push(position);
      size--;
      switch (currentDir) {
          case 0: if (position[0] === array.length - (start + 1)) {changeDir()}; break;
          case 1: if (position[1] === array.length - (start + 1)) {changeDir()}; break;
          case 2: if (position[0] === 0 + start) {changeDir()}; break;
          case 3:
            if (position[1] === 1 + start) {
              changeDir();
              start++;
            };
          break;
      }
  }
  
  if (array[0][0]) {
    push(position);
  }
  
  while (size) {
    moveAndPush();
  }
  
  return path;
}