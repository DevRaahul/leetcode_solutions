/*Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].*/
const Log = (data) => console.log(data);

/* Two sum : Approch 0 - by brute force */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};
/* Two sum : Approch 0 : Ends */

/* Two sum : Approch 1 - by brute force */
var twoSum = function (nums, target) {
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    // * first for loop to itrate through list
    ans[0] = i;
    let reminder = target - nums[i]; // * find difference to check

    for (let j = i + 1; j < nums.length; j++) {
      //* second for loop to check difference in list
      if (reminder === nums[j]) {
        ans[1] = j;
        return ans;
      }
    }
  }
};
/* Two sum : Approch 1 : Ends */

/**
 * Approach 2 - Hash Map method
 */
var twoSum = function (nums, target) {
  const twoSumMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    let reminder = target - nums[i];

    if (twoSumMap.has(reminder)) {
      return [i, twoSumMap.get(reminder)];
    } else {
      twoSumMap.set(nums[i], i);
    }
  }
};
/**
 * Approach 2 - Hash Map method Ends
 */
