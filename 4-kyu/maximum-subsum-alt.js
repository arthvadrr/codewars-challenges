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