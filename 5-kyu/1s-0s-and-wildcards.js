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
  const arr = [];
  const str2 = str.replace(/\?/g, 0).split('');
  const indices = [];
  let index = str.indexOf('?');
  
  while (index !== -1) {
    indices.push(index);
    index = str.indexOf('?', index + 1);
  }

  arr.push(str2);
  console.log(arr);
  let r = 0;
  let i = 0
  let l = indices.length;
  for (let s = 0; s < l * l - 1; s++) {
      r = r  === 0 ? 1 : 0;
      i = i === indices.length - 1 ? 0 : i += 1; 
      const arrr = str.replace(/\?/g, r).split('');
      arrr[indices[i]] = r
      arr.push(arrr);
      i++;
  }

  //this is a change
  
  console.log(arr.map(i => i.join('')))
  return arr.map(i => i.join(''));

}

 possibilities('101?'); // 3
 possibilities('1?1?'); // 00 01 10 11
// possibilities('0?0?0?1?'); // 000 100 010 001 110 101 001 010 111