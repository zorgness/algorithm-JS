// You are given an integer array height of length n.
//There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container, such that the container contains the most water.
// Return the maximum amount of water a container can store.
// Notice that you may not slant the container.

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7].
// In this case, the max area of water (blue section) the container can contain is 49.

// Input: array = [3, 1, 2, 4, 5]
// Output: 12
// Explanation :
// 5 and 3 are distance 4 apart.
// So the size of the base = 4.
// Height of container = min(5, 3) = 3.
// So total area = 4 * 3 = 12

const height = [3, 1, 2, 4, 5];
const output = 12;

function containerWithMaxWater(arr) {
  let area = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      // find the max area by comparing last area with the size of the base
      let base = Math.min(arr[j], arr[i]);
      console.log(base);
      area = Math.max(area, base * (j - i));
    }
  }
  return area;
}

console.log(containerWithMaxWater(height) === output);
