/*
 * LEETCODE => 1. Two Sum
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 */

export const twoSum = (nums: number[], target: number) => {
    const itemMap = new Map<number, number>();
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        if (itemMap.has(target - nums[i])) {
            return [itemMap.get(target - nums[i]), i];
        }
        itemMap.set(nums[i], i);
    }
    return [];
};
