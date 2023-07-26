/*
Your task in order to complete this Kata is to write a function which calculates the area covered by a union of rectangles.
Rectangles can have non-empty intersection, in this way simple solution: Sall = S1 + S2 + ... + Sn-1 + Sn (where n - the quantity of rectangles) will not work.
Preconditions

    each rectangle is represented as: [x0, y0, x1, y1]
    (x0, y0) - coordinates of the bottom left corner
    (x1, y1) - coordinates of the top right corner
    xi, yi - positive integers or zeroes (0, 1, 2, 3, 4..)
    sides of rectangles are parallel to coordinate axes
    your input data is array of rectangles

Requirements

    Number of rectangles in one test (not including simple tests) range from 3000 to 15000. There are 10 tests with such range. So, your algorithm should be optimal.
    Sizes of the rectangles can reach values like 1e6.

*/

const calculate = recs => {
    let result = 0;
    const seen = new Set();

    for (const rec of recs) {
        const [bx, by, tx, ty] = rec;

        for (let x = bx; x < tx; x++) {
            for (let y = by; y < ty; y++) {
                const token = `${x}-${y}`;
                if (!seen.has(token)) {
                    result++;
                    seen.add(token);
                }
            }
        }
    }

    return result;
}

console.log(calculate([ [ 0, 0, 1, 1 ] ]), '...Expected 1');
console.log(calculate([ [ 0, 4, 11, 6 ] ]), '...Expected 22');
console.log(calculate([ [ 0, 0, 1, 1 ], [ 1, 1, 2, 2 ] ]), '...Expected 2');
console.log(calculate([ [ 0, 0, 1, 1 ], [ 0, 0, 2, 2 ] ]), '...Expected 4');
console.log(calculate([ [ 3, 3, 8, 5 ], [ 6, 3, 8, 9 ], [ 11, 6, 14, 12 ] ]), '...Expected 36');
console.log(calculate([ [ 1, 7, 3, 10 ], [ 1, 8, 3, 9 ] ]), '...Expected 6');
console.log(calculate([[6, 7, 9, 10], [7, 8, 8, 9]]), '...Expected 22');