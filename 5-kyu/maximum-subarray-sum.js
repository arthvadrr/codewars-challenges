/*


The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]

Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

*/
const $start = document.querySelector('.start');

const $span_length = document.querySelector('.length');
const $span_sum = document.querySelector('.sum');
const $span_range = document.querySelector('.span-range');
const $span_loopsize = document.querySelector('.loopsize');
const $span_subsum = document.querySelector('.subsum');
const $span_speed = document.querySelector('.speed-text');

const $div_array = document.querySelector('.array')
const $span_arrayContent = document.querySelector('.array-content');
let sleepLength = 1000;

const $range_speed = document.querySelector(".speed-range")
$range_speed.addEventListener("input", (e) => {
  sleepLength = e.target.value;
  $span_speed.textContent = e.target.value;
});

const sleep = (time) => {
  return new Promise(resolve => setTimeout(resolve, time))
}

const maxSequence = arr => {
  let sum = 0;
  const len = arr.length;

  let arrayContentStr = '';

  //create array on page

  $span_arrayContent.textContent = arrayContentStr;

  if (len > 0) {
    let range = 1;

    const findRange = async () => {
      for (let i = 0; i < 100; i++) {
        while (range < len + 1) {
          let loopSize = len + 1 - range;

          for (let i = 0; i < loopSize; i++) {
            let subSum = 0
            let j = i;
            
            while (j < i + range) {
              await sleep(sleepLength);
              subSum += arr[j]
              j++

              $span_arrayContent.innerHTML = '';

              for (let x = 0; x < arr.length; x++) {
                  const ele = document.createElement("span");
                  if (x !== len - 1) ele.textContent = `${arr[x]}, `
                  else ele.textContent = arr[x];

                  if (x >= i  && x < j) {
                    ele.classList.add('highlighted');
                  }

                  $span_arrayContent.appendChild(ele);
              }

              
              $span_subsum.textContent = subSum;
              $span_length.textContent = len;
              $span_range.textContent = range;
              $span_loopsize.textContent = loopSize;
            }

            sum = subSum > sum ? subSum : sum;

            $span_sum.textContent = sum;
            if (subSum === sum) {
              $span_sum.classList.add('new');
              await sleep(300);
              $span_sum.classList.remove('new');
            }
          }
          range++;
        }
      }
    }
    findRange();
  }

  return sum;
}

$start.addEventListener('click', (e) => {
  e.target.classList.add('dnone')
  maxSequence([
    7,   4, 11, -11,  39, 36,
  10,  -6, 37
  ])
})