/*
https://www.codewars.com/kata/520446778469526ec0000001/train/javascript

Complete the function/method (depending on the language) to return true/True when its argument is an array that has the same nesting structures and same corresponding length of nested arrays as the first array.

For example:

 // should return true
[ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] );          
[ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] );  

 // should return false 
[ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] );  
[ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] );  

// should return true
[ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] ); 

// should return false
[ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] );     

For your convenience, there is already a function 'isArray(o)' declared and defined that returns true if its argument is an array, false otherwise.
*/

Array.prototype.sameStructureAs = function (other) {
  if (!Array.isArray(other)) return false;

  let key = 0;

  const mapStructure = arr => {
    let res = arr.map(i => {
      if (Array.isArray(i)) {key++; return mapStructure(i)}
      return key;
    });
    
    key = 0;
    return res;
  }

  return mapStructure(this).join() === mapStructure(other).join();
};

  console.log([1,1,1].sameStructureAs([2,2,2]), "[1,1,1] same as [2,2,2]");
  // console.log([1,[1,1]].sameStructureAs([2,[2,2]]), "[1,[1,1]] same as [2,[2,2]]");
  // console.log([1,[1,1]].sameStructureAs([[2,2],2]), "[1,[1,1]] not same as [[2,2],2]");
  // console.log([1,[1,1]].sameStructureAs([2,[2]]), "[1,[1,1]] not same as [2,[2]]");
  // console.log([[[],[]]].sameStructureAs([[[],[]]]), "[[[],[]]] same as [[[],[]]]");
  // console.log([[[],[]]].sameStructureAs([[1,1]]), "[[[],[]]] not same as [[1,1]]");
  // console.log([1,[[[1]]]].sameStructureAs([2,[[[2]]]]), "[1,[[[1]]]] same as [2,[[[2]]]]");
  // console.log([].sameStructureAs(1), "[] not same as 1");
  // console.log([].sameStructureAs({}), "[] not same as {}");
  // console.log([1,'[',']'].sameStructureAs(['[',']',1]), "[1,'[',']'] same as ['[',']',1]");