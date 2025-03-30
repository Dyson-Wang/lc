/**
 * 给你一个整数数组 nums 和一个整数 k ，
 * 请你统计并返回 该数组中和为 k 的子数组的个数 。
 * 子数组是数组中元素的连续非空序列。
 * @param nums
 * @param k
 * @returns
 */
function subarraySum(nums: number[], k: number): number {
    const mp: Map<number, number> = new Map();
    mp.set(0, 1);
    let count: number = 0,
        pre: number = 0;
    for (const x of nums) {
        pre += x;
        if (mp.has(pre - k)) {
            count += mp.get(pre - k);
        }
        if (mp.has(pre)) {
            mp.set(pre, mp.get(pre) + 1);
        } else {
            mp.set(pre, 1);
        }
    }
    return count;
}
