// Given two integers a and b,
//  return the sum of the two integers
// without using the operators + and -.

// &	AND	Sets each bit to 1 if both bits are 1
// |	OR	Sets each bit to 1 if one of two bits is 1
// ^	XOR	Sets each bit to 1 if only one of two bits is 1
// ~	NOT	Inverts all the bits
// <<	Zero fill left shift	Shifts left by pushing zeros in from the right and let the leftmost bits fall off
// >>	Signed right shift	Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off
// >>>	Zero fill right shift	Shifts right by pushing zeros in from the left, and let the rightmost bits fall off

const a = 1;
const b = 2;
const output = 3;

const getSum = (a, b) => (b ? getSum(a ^ b, (a & b) << 1) : a);

// const getSum = (a, b) => {
//   const firstArr = new Array(a).fill(true);
//   const secondArr = new Array(b).fill(true);
//   return firstArr.concat(secondArr).length
// }

function sumOfTwo(a, b) {
  if (b == 0) {
    return a;
  } else {
    return getSum(a ^ b, (a & b) << 1);
  }
}

console.log(sumOfTwo(a, b));
