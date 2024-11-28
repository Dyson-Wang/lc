function lengthOfLIS(nums: number[]): number {
    let len = nums.length;
    if (len == 0) return 0;
    let dp = new Array(len).fill(1);//默认就自己
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
};