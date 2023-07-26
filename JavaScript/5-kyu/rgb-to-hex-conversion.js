/*
https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript

The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3
*/

const rgb = (r, g, b) => {
  let hex = [r, g, b];
  const key = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

  const validate = c => {
    if (c >= 255) return 255;
    if (c <= 0) return 0;
    return c; 
  }

  const getHexVal = c => {
    const hexArr = (c / 16)
    .toFixed(2)
    .toString()
    .padStart(2, '0')
    .split('.');
    return key[hexArr[0]] + key[Math.round(hexArr[1] * .16)];
  };

  hex = hex.map(c => getHexVal(validate(c)));
  return hex.join('');
}

rgb(0, 0, 0), '000000'
rgb(0, 0, -20), '000000'
rgb(300,255,255), 'FFFFFF'
rgb(173,255,47), 'ADFF2F'