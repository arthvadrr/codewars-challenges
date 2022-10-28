
const allBitCombinations = size => {

  //edge cases
  if (size === 0) return;
  if (size === 1) return ['0', '1'];

  const arr = [];  
  const bit = Array.from({length: size}).fill(0)
  const flip = (arr, b) => arr[b] = arr[b] === 0 ? 1 : 0;
  const amount = Math.pow(2, size);
  let p = size - 1;

  const multMod = (i) => {
    let a = 1;
    for (let m = 2; m < amount; m = m*2) {
      if (i % m === 0) flip(bit, p - a)
      a++;
    }
  }

  for (let i = 0; i < amount; i++) {
    if (i % 2 === 0) flip(bit, p);
    else flip(bit, p - 1)

    multMod(i);
    let r = bit.join('');
    arr.push(r);
  }

  console.log(arr);
  return arr;
}

allBitCombinations(3);

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

//
last, 1 before last, last, 1 before last, 2 

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