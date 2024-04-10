/*
 * LEETCODE => 560. Subarray sum equals k
 * Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.
 */

export const subarrySumK = (array: number[], k: number) => {
    const countMap = new Map();
    let output = 0;
    let sum = 0;
    countMap.set(0, 1);
    for (const item of array) {
        sum += item;
        output += countMap.get(sum - k) ?? 0;
        countMap.set(sum, (countMap.get(sum) ?? 0) + 1);
    }
    return output;
};
