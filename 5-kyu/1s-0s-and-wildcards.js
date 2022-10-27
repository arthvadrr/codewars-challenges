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
  const qs = str.match(/\?/g);
  const zeros = qs.map(n => 0);
  let iterationCount = zeros.length;
  let count = 0;

  for (let i = 0; i < iterationCount; i++) {
   count += i; 
  }

  console.log(count);
}

possibilities('101?'); //2
possibilities('1?1?'); //4
possibilities('1???'); //6 1111 1011 1001 1010 1101 1100
possibilities('????'); //1111 0111 1011 1101 1110 0000 1000 0100 0010 0001 
