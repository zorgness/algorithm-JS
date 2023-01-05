// find if array contain duplicate
const nums1 = [1, 2, 3, 1];
const result1 = true;

const nums2 = [1, 2, 3, 4];
const result2 = false;

const nums3 = [1, 2, 3, 4, 7, 1, 8];
const result3 = true;

function containDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return true;
      }
    }
  }
  return false;
}

console.log(containDuplicate(nums3));
