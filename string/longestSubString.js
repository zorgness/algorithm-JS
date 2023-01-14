// Given a string s, find the length of the longest
// substring
//  without repeating characters.

const s = "pwwkew";
let output = 3;

// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring,
// "pwke" is a subsequence and not a substring.

function findLongestSubstring(string) {
  let result = [];

  let arr = string.split("");

  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    } else {
      result = [];
    }
  }

  return result.length;
}

console.log(findLongestSubstring(s));
