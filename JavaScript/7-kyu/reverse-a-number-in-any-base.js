/*
 * Task

Write a function which when given a non-negative integer n and an arbitrary base b, returns the number reversed in that base.
Examples

    n=12 and b=2 return 3, because 12 in binary is "1100", which reverses to "0011", equivalent to 3 in decimal.
    n=10 and b=5 return 2, because 10 in base-5 is "20", which reverses to "02", equivalent to 2 in decimal.
    n=45 and b=30 return 451, because 45 in base-30 is "1F", which reverses to "F1", equivalent to 451 in decimal.
    n=3 and b=4 return 3, because 3 in base-4 is "3", which reverses to "3", equivalent to 3 in decimal.
    n=5 and b=1 return 5, because 5 in unary is "|||||", which reverses to "|||||", equivalent to 5 in decimal.

Note

    The function should return an integer.
    The base b will be greater or equal to 1.
    Edge case: Base-1 is also used in this kata to represent the unary numeral system. Think of it as a system of tally marks. For example:
        3 (decimal) -> ||| (unary)
        5 (decimal) -> ||||| (unary)
*/

const binString = (n, b) => {
	let result = [];

	while(n) {
		let byte = 0;

		for (let i = 0; i < b - 1; i++) {
			if (i > 9) {
			byte = String.fromCharCode(i + 96);
			} else {
					byte++;
			}
		}

		result.push(byte);
		n--;
	}

	return result.join('');
}


const reverseNumber = (a, b) => {
	return binString(a, b);
}


console.log(reverseNumber(5, 1), '...expected 5');
console.log('hi');
