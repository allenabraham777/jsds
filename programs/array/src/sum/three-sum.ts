/*
 * LEETCODE => 15. Three Sum
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 * Notice that the solution set must not contain duplicate triplets.
 */

export const threeSum = (nums: number[]) => {
    nums = nums.sort();
    const n = nums.length;
    const output: number[][] = [];
    nums.forEach((num, i) => {
        if (i == n - 2) return;
        if (i < 1 || nums[i] !== nums[i - 1]) {
            let l = i + 1;
            let r = n - 1;
            while (l < r) {
                const sum = nums[i] + nums[l] + nums[r];
                if (sum === 0) {
                    output.push([num, nums[l], nums[r]]);
                    l += 1;
                    while (nums[l] === nums[l - 1] && l < r) {
                        l++;
                    }
                } else if (sum < 0) {
                    l++;
                } else {
                    r--;
                }
            }
        }
    });
    return output;
};
