/**
 * A function for getting an evenly curved angle set of given amount. Supports even and odd amounts
 *
 * Angle offset is the amount of degrees to offset by
 *
 * e.g.  I have 10 elements that need to be rotated evenly, starting at 5 degrees and increasing by 5 degrees for each element.
 *       getAngles(amount = 10, angleOffset = 5, start = 5)
 *       // returns [-25, -20, -15, -10, -5, 5,  10,  15,  20, 25]
 */
interface RotationOptions {
  amount: number;
  angleOffset?: number;
  start?: number;
}

function getAngles({ amount, angleOffset = 2, start = 2 }: RotationOptions): number[] {
  const result: number[] = [];
  let currentAngle = start;
  let index = 0;

  if (amount % 2 !== 0) result.push(index++);

  for (let i = index; i < amount; i += 2) {
    result.push(currentAngle, currentAngle * -1);
    currentAngle += angleOffset;
  }

  return result.sort((a, b) => a - b);
}

/**
 * Example using elements
 */
interface FakeElementStyle {
  transform: string;
}

interface FakeElements {
  element: string;
  className: string;
  style: FakeElementStyle;
}

// Create our sample elements
const elements: FakeElements[] = Array.from({ length: 10 }, () => ({
  element: 'div',
  className: 'card',
  style: {
    transform: '',
  },
}));
const elementAngles = getAngles({ amount: elements.length, angleOffset: 5, start: 5 });

// Apply the transform
elementAngles.forEach((_, i) => {
  elements[i].style.transform = `rotate(${elementAngles[i]}deg)`;
});

// Log the test
console.log(elementAngles);