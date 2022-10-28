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
}

 possibilities('101?'); // 3
 possibilities('1?1?'); // 00 01 10 11
// possibilities('0?0?0?1?'); // 000 100 010 001 110 101 001 010 111











const findStuff (size) => {
  const Possibilities = Math.pow(size, size);
  
}

/*
Size of 3


Size of 4
[?, ?, ?, ?]
[[0,1],[[0,1],[[0,1],[[0,1]];
2 * 2 * 2 * 2
2   4   8   16

//4
3,2,3,2
1,2,3,2
0,2,3,2
1,2,3,2

//3
2, 1, 2, 1, 
0, 2, 1, 2

//2
1, 0, 1, 0

// 4
3. 0001
2. 0011
1. 0010
4. 0000
5. 0100
6. 0110
7. 0111
8. 0101
9. 1101
10. 1111
11. 1110
12. 1100
13. 1000
14. 1010
15. 1011
16. 1001

// 3 ... 2 ^ 3 = 8
1. 001
2. 011
3. 010
4. 000
5. 100
6. 101
7. 111
8. 110

//3 ... 2 ^ 2 = 4

1. 01
2. 11
3. 10
4. 00









*/