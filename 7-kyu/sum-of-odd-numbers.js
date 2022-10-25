/*
https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/train/javascript

Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...

Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8
*/

//A non-exponential solution
const rowSumOddNumbers = n => {
  const triangle = [[1]];
  let num = 1;
  let row = 1;
  
  while (row < n) {
    let thisRow = [];
    row++;
    
    for (let i = 0; i < row; i++) {
      num += 2;
      thisRow.push(num);
    }
    
    triangle.push(thisRow);
  }

  return triangle[n - 1].reduce((a, b) => a + b)
}

//Exponential
const rowSumOddNumbersExp=n=>n**3