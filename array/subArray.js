// Given an integer array nums, find the subarray
// with the largest sum, and return its sum.

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const nums2 = [5, 4, -1, 7, 8];
const target = 6;

const result = [4, -1, 2, 1];

function maxSubArray(arr) {
  let maxSum = 0;

  for (let i = 0; i < arr.length; i++) {
    let sumFixedStart = 0;

    for (let j = i; j < arr.length; j++) {
      sumFixedStart += arr[j];
      // wrong sub

      maxSum = Math.max(maxSum, sumFixedStart);
    }
  }

  return maxSum;
}

// find the target
console.log(maxSubArray(nums));
console.log(maxSubArray(nums2));

// find the the subarray ?
