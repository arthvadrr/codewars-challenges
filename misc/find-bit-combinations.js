const allBitCombinations = size => {
  //edge cases
  if (size === 0) return;
  if (size === 1) return ['0', '1'];

  const arr = [];  
  const bit = Array.from({length: size}).fill(0)
  const flip = (arr, b) => arr[b] = arr[b] === 0 ? 1 : 0;
  const amount = Math.pow(2, size);
  let lastIndex = size - 1;

  const multMod = (i) => {
    let a = 1;
    for (let m = 2; m < amount; m = m*2) {
      if (i % m === 0) flip(bit, lastIndex - a)
      a++;
    }
  }

  for (let i = 0; i < amount; i++) {
    // flip the last two every other time
    if (i % 2 === 0) flip(bit, lastIndex);
    else flip(bit, lastIndex - 1)
    multMod(i);
    let r = bit.join('');
    arr.push(r);
  }

  console.table(arr);
  return arr;
}

//careful what you pass here
//allBitCombinations(2);


// Shorter solution...toString can use radix on a number!
const getBits = len => {
  const arr = [];
  for (let i = 0; i < Math.pow(2, len); i++) arr.push(i.toString(2).padStart(len, '0'))
  return arr;
}

console.log('bitlen');
console.log(getBits(6));