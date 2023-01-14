// Given an integer array nums, find a subarray
// that has the largest product, and return the product.
const nums = [2, 3, -2, 4];
const result = 6;

// Explanation: [2,3] has the largest product 6.

function maxProductSubArray(arr) {
  // initalize the max value with the first element of the array
  let result = arr[0];
  for (let i = 0; i < arr.length; i++) {
    let mul = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      result = Math.max(result, mul);
      mul *= arr[j];
    }
    result = Math.max(result, mul);
  }
  return result;
}

console.log(maxProductSubArray(nums));

function maxProduct(nums) {
  // initalize the max value with the first element of the array
  let globalMaxProduct = nums[0];

  for (let i = 0; i < nums.length; i++) {
    // On every iteration of i, we reset the localMaxProduct to 1.
    // The reason we do this is because we have to multiply every combination of nums[j].
    let localMaxProduct = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      localMaxProduct *= nums[j];

      if (localMaxProduct > globalMaxProduct) {
        globalMaxProduct = localMaxProduct;
      }
    }
  }

  return globalMaxProduct;
}

console.log(maxProduct(nums));
