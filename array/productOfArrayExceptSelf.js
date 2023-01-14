//Given an integer array nums, return an array answer such that answer[i]
// is equal to the product of all the elements of nums except nums[i].

const nums = [1, 2, 3, 4];
const answer = [24, 12, 8, 6];

function productOfArrayExceptSelf(arr) {
  const tmp = [];
  for (let i = 0; i < arr.length; i++) {
    let product = arr.filter((el) => el !== arr[i]).reduce((a, b) => a * b);
    tmp.push(product);
  }
  return tmp;
}

console.log(answer.toString() === productOfArrayExceptSelf(nums).toString());
