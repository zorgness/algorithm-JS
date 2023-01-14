// Not implemented yet

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
// such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

const nums = [-1, 0, 1, 2, -1, -4];

function threeSum(arr) {
  // sort the array
  arr.sort((a, b) => a - b);
  // initalize the variable to keep the triplets
  const triplets = [];
  let right = 0;
  let left = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      break;
    }

    if (i > 0 && arr[i] == arr[i - 1]) {
      continue;
    }
    left = i + 1;
    right = arr.length - 1;

    while (left < right) {
      if (arr[i] + arr[left] + arr[right] === 0) {
        triplets.push([arr[i], arr[left], arr[right]]);
      }
      left++;
    }
  }

  return triplets;
}

console.log(threeSum(nums));
