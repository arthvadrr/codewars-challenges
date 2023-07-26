/*
https://www.codewars.com/kata/588f3e0dfa74475a2600002a/train/javascript

You are given a string containing 0's, 1's and one or more '?', where ? is a wildcard that can be 0 or 1.

Return an array containing all the possibilities you can reach substituing the ? for a value.
Examples

'101?' -> ['1010', '1011']

'1?1?' -> ['1010', '1110', '1011', '1111']

Notes:

    Don't worry about sorting the output.
    Your string will never be empty.

Have fun!
*/

const possibilities = (str) => {
  const result = [];
  const indices = [];
  let index = str.indexOf('?');
  
  while (index !== -1) {
    indices.push(index);
    index = str.indexOf('?', index + 1);
  }

  const getPos = len => {
    const arr = [];
    for (let i = 0; i < Math.pow(2, len); i++) arr.push(i.toString(2).padStart(len, '0'))
    return arr;
  }

  const combos = getPos(indices.length);

  combos.forEach(combo => {
    let s = str.split('');
    let c = combo.split('');

    for (let i = 0; i < c.length; i++) s[indices[i]] = c[i];
    result.push(s.join(''));
  });
  console.log(result);
  return result;
}

  possibilities('101?'); // 3
  possibilities('1?1?'); // 00 01 10 11
  possibilities('0?0?0?1?'); // 000 100 010 001 110 101 001 010 111