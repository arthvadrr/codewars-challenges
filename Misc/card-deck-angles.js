/**
 * A function for getting angles of given amount
 *
 * Angle offset is the amount of degrees to offset by
 */

function getTheAngles(amount, angleOffset = 2) {
  const result = [];
  let currentAngle = 2;
  let index = 0;

  if (amount % 2 !== 0) result.push(index++);

  for (let i = index; i < amount; i += 2) {
    result.push(currentAngle, currentAngle * -1);
    currentAngle += angleOffset + i;
  }

  return result.sort((a, b) => a - b);
}

/**
 * Example using elements
 */
const eles = Array.from({ length: 9 }, () => ({
  element: 'div',
  className: 'card',
  style: {
    transform: '',
  },
}));

const cardAngles = getTheAngles(eles.length, 2);

eles.forEach((ele, i) => {
  ele.style.transform = `rotate(${cardAngles[i]}deg)`;
});

console.log(eles);
