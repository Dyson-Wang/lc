function maxArrayValue(nums: number[]): number {
    let sum: number = nums[nums.length - 1];
    for (let i: number = nums.length - 2; i >= 0; i--) {
        if (nums[i] <= sum) {
            sum += nums[i];
        } else {
            sum = nums[i]
        }
    }
    return sum;
};