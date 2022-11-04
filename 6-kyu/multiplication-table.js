/*
https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/train/javascript

Multiplication table
3877692% of 1,9777,367 of 20,947Bugari5 Issues Reported

Instructions
Output

Your task, is to create NxN multiplication table, of size provided in parameter.

for example, when given size is 3:

1 2 3
2 4 6
3 6 9

for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]
*/

const multiplicationTable = (size, mod = 1, res = []) => {
  const createRow = () => Array.from({length: size}).fill(1).map((a, i) => (i + 1) * mod);
  for (let i = 0; i < size; i++) {
    res.push(createRow());
    mod++;
  }
  return res; 
}


console.table(multiplicationTable(3));