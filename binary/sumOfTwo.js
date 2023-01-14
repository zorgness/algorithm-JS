// Given two integers a and b,
//  return the sum of the two integers
// without using the operators + and -.

let a = 1;
let b = 2;
let output = 3;

const getSum = (a, b) => (b ? getSum(a ^ b, (a & b) << 1) : a);

function sumOfTwo(a, b) {
  if (b == 0) {
    return a;
  } else {
    return getSum(a ^ b, (a & b) << 1);
  }
}
