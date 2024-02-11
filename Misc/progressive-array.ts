/**
* This function takes a length and sum and returns an array that adds up to the sum with the given length.
*
* eg: length: 6 | sum: 150
* output: [0, 10, 20, 30, 40, 50]
*
* Array items should increase linearly. The first array item in the result is always 0.
* Note that a length of 1 should always return 0 regardless of if it equals the sum.
*/
function getProgressiveArray (length: number, sum: number): number[]
{
    const result: number[] = [];
    const delta: number = sum / (length - 1);
    let current: number = 0;

    for (let i = 0; i < length; i++) {
        result.push((current / length) * 2);
        current += delta;
    }

    return result;
};

/**
* Test function
*/
function log_example(length: number, sum: number, result: number[]): void
{
    const { log: l, table: t } = console;
    l( 'Test\n\n' );
    l( `Length: ${length} | Sum: ${sum}\n\n` );
    l( 'Result:' );
    t( result );
    l( 'The sum of the array items reduced should equal the sum:\n' );
    l( `Array items reduced: ${result.reduce((a, b) => a + b, 0)}` )
    l( `________________Sum: ${sum}\n\n` );
    l( '----------------------------------------------------------------' );
}

/**
* Tests
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
