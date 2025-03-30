/**
 * 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。
 * 子序列 是由数组派生而来的序列，
 * 删除（或不删除）数组中的元素而不改变其余元素的顺序。
 * 例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。
 * @param nums
 * @returns
 */
function lengthOfLIS(nums: number[]): number {
    let len = nums.length;
    if (len == 0) return 0;
    let dp = new Array(len).fill(1); //默认就自己
    let maxAnswer = 1;

    for (let i = 1; i < len; i++) {
        for (let j = 0; j < i; j++) {
            //如果前面有比nums[i]小的数,在dp[j]的基础上+1
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        maxAnswer = Math.max(maxAnswer, dp[i]);
    }
    return maxAnswer;
}
