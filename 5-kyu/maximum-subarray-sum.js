/*


The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]

Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

*/

console.time('time1');
const maxSequence = arr => {
  let sum = 0;
  const len = arr.length;

  if (len > 0) {
    let range = 1;

    while (range < len + 1) {
      let loopSize = len + 1 - range;

      for (let i = 0; i < loopSize; i++) {
        let subSum = 0
        let j = i;
        
        while (j < i + range) {
          subSum += arr[j]
          j++
        }

        sum = subSum > sum ? subSum : sum;
      }
      range++;
    }
  }

  return sum;
}

console.timeEnd('time1');


// console.log(maxSequence([]), '0');
// console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), '6');

console.log(maxSequence([
  -43,-27,-9,25,32,15,-34,19,-5,9,26,16,20,-32,23,-5,-28,-20,-45,-18,-6,-33,43,47,23,-19,27,-26,-2,0,13,-45,40,-29,-20,38,23,-34,-19,1,34,-49,-25,0,-15,-34,14,22,21,28,35,19,21,-7,10,-1,9,-12,18,-33,46,0,27
]), 'expected 217');