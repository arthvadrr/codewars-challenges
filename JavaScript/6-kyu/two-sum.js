/*
Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

Based on: http://oj.leetcode.com/problems/two-sum/

*/

const twoSum = (numbers, target) => {
    let result = [];
    let index = -1;

    while (numbers.length) {
        index++;
        const num1 = numbers.shift();
        let index2 = index + 1;

        numbers.forEach(num2 => {
            if (num1 + num2 === target) result = [index, index2];
            index2++;
        })
    }

    return result;
}
const testCases = [
    [[1,2,3],          4,     [0,2]],
    [[1234,5678,9012], 14690, [1,2]],
    [[2,2,3],          4,     [0,1]],
    [[2,3,1],          4,     [1,2]]
];

testCases.forEach(arr => {
    console.log(arr);
    console.log(`input ${arr[0]}`);
    console.log(`target ${arr[1]}`);
    console.log('result: ',
        twoSum(arr[0], arr[1])
    );

    console.log(`expected: ${arr[2]}`);
});