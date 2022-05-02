/* 
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
*/

var moveZeroes = function (nums) {
  if (nums.length == 0 || nums.length == 1) {
    return nums;
  }
  let length = nums.length;
  let right = 0;
  let left = 0;
  let temp = "";

  while (right < length) {
    if (nums[right] === 0) {
      ++right;
    } else {
      temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
      right++;
      left++;
    }
  }
};

var moveZeroes = function (nums) {
  if (nums == null || nums.length == 0) return;

  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[j++] = nums[i];
    }
  }

  while (j < nums.length) nums[j++] = 0;
};

/* 
Real time calculations

[0,1,0,3,12]

i =0, j=0;

i =1, j=0;
nums[0] = 1;
j = 1 //[1,1,0,3,12]

i = 2, j = 1 //[1,1,0,3,12]

i = 3, j = 1
j=2
nums[1]=3 //[1,3,0,3,12]

i=4, j=2
nums[2] = 12
j=3 // [1,3,12,3,12]
*/
