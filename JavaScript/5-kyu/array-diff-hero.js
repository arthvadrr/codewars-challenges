/*
https://www.codewars.com/kata/581fc49b55c3d2d83c0000f8/train/javascript

You know about simple Array.diff task. Now try to solve enhanced version!

Your goal in this kata is to implement a difference function, which subtracts one list from another.

It should remove all values from list a, which are present in list b. Each element x in both arrays is integer and 0 ≤ x ≤ 25. And lengths of arrays can reach 5 000 000 elements.

arrayDiffVeryFast([1,2],[1]) == [2]

If a value is present in b, all of its occurrences must be removed from another:

arrayDiffVeryFast([1,2,2,2,3],[2]) == [1,3]
*/

//shift version
//GO REAL FAST VROOM VROOM
// const arrayDiffVeryFast = (a, b) => {
//   let deleteCount = 0;
//   let aLen = a.length - 1;

//   const shift = i => {
//     while (i < aLen) a[i] = a[++i];
//   }

//   for (let c = 0; c < a.length - deleteCount; c++) {
//     for (let d = 0; d < b.length; d++) {
//       if (a[c] === b[d]) {
//         shift(c);
//         deleteCount++;
//         c--;
//       }
      
//     }
//   }

//   while(deleteCount > 0) {
//     a.pop();
//     deleteCount--;
//   }
//   return a;
// }

//replace version

//GO REAL FAST VROOM VROOM
// const arrayDiffVeryFast = (a, b) => {
//     let deleteCount = 0;
//     let aLen = a.length - 1;

//     for (let c = 0; c < a.length - deleteCount; c++) {
//       for (let d = 0; d < b.length; d++) {
//         if (a[c] === b[d]) {
//           console.log(`move ${a[c]}`)
//           console.log(a);
//           let e = a[c];
//           let f = a[aLen - deleteCount];
//           a[c] = f;
//           a[aLen - deleteCount] = e;
//           deleteCount++;
//           c--;
//         }
        
//       }
//     }

//     while(deleteCount > 0) {
//       a.pop();
//       deleteCount--;
//     }
//     return a.sort();
// }


// /*https://www.codewars.com/kata/581fc49b55c3d2d83c0000f8/train/javascript*/
// const arrayDiffVeryFast = (a, b) => {
//   let deleteCount = 0;
//   let len = a.length;

//   for (let i = 0; i < a.length; i++) {
//     let z = a[i];
//     a[i - deleteCount] = z;
//     if (z > 25 || z < 0) {
//       deleteCount++
//       continue;
//     }
//     for (let j = 0; j < b.length; j++) {
//       if (z === b[j]) {
//         deleteCount++;
//         break;
//       }
//     }
//   }

//   a.length = len - deleteCount

//   return a;
// }

const arrayDiffVeryFast = (a, b) => {
  let del = 0;
  b = [...new Set(b)];

  for (let i = 0; i < a.length; i++) {
    let z = a[i];
    a[i - del] = z;
    for (let j = 0; j < b.length; j++) {
      if (z === b[j]) {
        del++;
        break;
      }
    }
  }

   a.length = a.length - del

   return a;
}

console.log(arrayDiffVeryFast([1,2], [1])," [2], a was [1,2], b was [1]");
console.log(arrayDiffVeryFast([1,2,2], [1])," [2,2], a was [1,2,2], b was [1]");
console.log(arrayDiffVeryFast([1,2,2], [2]), "[1], a was [1,2,2], b was [2]");
console.log(arrayDiffVeryFast([1,2,2], []), "[1,2,2], a was [1,2,2], b was []");
console.log(arrayDiffVeryFast([], [1,2])," [], a was [], b was [1,2]");
console.log(arrayDiffVeryFast([1,2,3], [1,2])," [3], a was [1,2,3], b was [1,2]")
console.log(arrayDiffVeryFast([1,2,2,2,3,5,5,1,2,4,5,1], [2,1,5]), "3, 4");
