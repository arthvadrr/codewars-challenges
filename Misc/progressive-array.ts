/**
* This function takes a length and sum and returns an array that adds up to the sum with the given length.
* Array items should increase linearly. The first array item in the result is always 0.
*
* Note that a length of 1 should always return 0 regardless of if it equals the sum.
*
* @param length {number}
* @param sum {number}
*/
const getProgressiveArray = (
    length: number,
    sum: number
): number[] => {
    const result: number[] = [];
    const  delta: number = sum / (length - 1);
    let  current: number = 0;

    for (let i = 0; i < length; i++) {
        result.push((current / length) * 2);
        current += delta;
    }

    return result;
};

/**
* Test function
*
* @param length {number}
* @param sum {number}
* @param result {number[]}
*/
const log_example = (
    length: number,
    sum: number,
    result: number[]
): void => {
    console.log(`Test\n\nLength: ${length} | Sum: ${sum}\n\nResult:`);
    console.table(result);
    console.log('The sum of the array items reduced should equal the sum:\n');
    console.log(`Array items reduced: ${result.reduce((a, b) => a + b, 0)}`)
    console.log(`________________Sum: ${sum}\n\n`);
    console.log('----------------------------------------------------------------');
}

/**
* Tests
*
* examples[*][0] = Length
* examples[*][1] = sum
*/
interface Example {
    length: number;
    sum: number;
}

const examples: Example[] = [
    { length: 10, sum: 1000 },
    { length: 1, sum: 0 },
    { length: 8, sum: 2200 },
    { length: 10, sum: 10 },
    { length: 10, sum: 1 },
    ];

for (const { length, sum } of examples) {
    log_example(length, sum, getProgressiveArray(length, sum));
}
