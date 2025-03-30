/**
 * 给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。
 */

function reverse(nums: number[], start: number, end: number): void {
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start += 1;
        end -= 1;
    }
}

function rotate(nums: number[], k: number): void {
    let tmp = k % nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, tmp - 1);
    reverse(nums, tmp, nums.length - 1);
}
