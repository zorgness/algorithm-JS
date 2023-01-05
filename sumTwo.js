// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.
const numbers = [4, 6, 7, 8, 9, 10];
const target = 17;

function sumTwo(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [arr[i], arr[j]];
      }
    }
  }
}

console.log(sumTwo(numbers, target));

function sumTwoRefactor(arr, target) {
  let numObj = {};

  for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];
    if (numObj[complement] !== undefined) {
      console.log(arr[numObj[complement]]);
      console.log(arr[i]);
      return [arr[numObj[complement]], arr[i]];
    }
    numObj[arr[i]] = i;
  }
}

console.log(sumTwoRefactor(numbers, target));
