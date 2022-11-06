/*
https://www.codewars.com/kata/57d2c32626427662e30004a6/train/javascript

Only One-liner's solution can pass this kata. Your code should like this:

const xxxxxxxx=(arr)=>codecodecodecode...

This one is not a One-line solution:

function xxxxxx(arr){var a=0,b=0,c;for(.......) codecode...;return a}

This is just using some semicolon to combine multi line together.

In this kata, we will try to make a multiplication table by using one line code, Can you do that? Two arguments will be given, it's a range of multiplication table. For example, the arguments are 1 and 9, the result should be:

1 * 1 = 1
1 * 2 = 2  2 * 2 = 4
1 * 3 = 3  2 * 3 = 6  3 * 3 = 9
1 * 4 = 4  2 * 4 = 8  3 * 4 = 12  4 * 4 = 16
..............................................
..............................................
........SOMETHING..OMITTED....................
..............................................
....................................9 * 9 = 81

Task

Complete function multiplicationTable that accepts two argument m and n, return the result in accordance with the rules above.

Note: You can assume that both m and n are positive integers. If m equals to n, the result should be 1 line; If m is more than n, you should output the results in accordance with the descending sequence(a small challenge).
Examples

multiplicationTable(1,2) should return
`1 * 1 = 1
1 * 2 = 2  2 * 2 = 4`

multiplicationTable(3,4) should return
`1 * 3 = 3  2 * 3 = 6  3 * 3 = 9
1 * 4 = 4  2 * 4 = 8  3 * 4 = 12  4 * 4 = 16`

multiplicationTable(3,3) should return
`1 * 3 = 3  2 * 3 = 6  3 * 3 = 9`

multiplicationTable(3,1) should return
`1 * 3 = 3  2 * 3 = 6  3 * 3 = 9
1 * 2 = 2  2 * 2 = 4
1 * 1 = 1`
*/

const multiplicationTable1 = (size, mod = 1, res = []) => {
  const createRow = () => Array.from({length: size}).fill(1).map((a, i) => (i + 1) * mod);
  for (let i = 0; i < size; i++) {
    res.push(createRow());
    mod++;
  }
  return res; 
}

const multiplicationTable2 = (q, p) => {
  let m, n;
  if (q > p) {
    m = p;
    n = q;
  } else {
    n = p;
    m = q;
  }
  return Array.from({length: Math.abs(m - n) + 1}, a => Array.from({length: m++}, (a, i) => `${i + 1} * ${m - 1} = ${(i + 1) * (m - 1)}${i === m ? '' : '  '}`).join('')).sort((x, y) => q > p ? y.length - x.length : x.length - y.length).join('\n');
}

console.time('t');
const multiplicationTable=(n,t,l=(n>t?t:n),e=(n>t?n:t))=>Array.from({length:Math.abs(l-e)+1},n=>Array.from({length:l++},(n,t)=>`${t+1} * ${l-1} = ${(t+1)*(l-1)}`).join("  ")).sort((l,e)=>n>t?e.length-l.length:l.length-e.length).join("\n")
console.timeEnd('t');
console.log(multiplicationTable(1, 9));
console.log(multiplicationTable(2, 5))