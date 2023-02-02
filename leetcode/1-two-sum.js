/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const prevNums = new Map();

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];

    if (prevNums.has(diff)) {
      return [prevNums.get(diff), i];
    }

    prevNums.set(nums[i], i);
  }
};
