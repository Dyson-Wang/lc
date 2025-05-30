/**
 * 给你一个长度为 n 的整数数组 nums ，
 * 请你判断在 最多 改变 1 个元素的情况下，
 * 该数组能否变成一个非递减数列。
 *
 * 我们是这样定义一个非递减数列的：
 * 对于数组中任意的 i (0 <= i <= n-2)，
 * 总满足 nums[i] <= nums[i + 1]。
 * @param nums
 * @returns
 */
function checkPossibility(nums: number[]): boolean {
    const len = nums.length;
    let count = 0;
    let left: number, right: number;
    for (let i = 0; i < len - 1; i++) {
        (left = nums[i]), (right = nums[i + 1]);
        if (left > right) {
            count++;
            if (count > 1) {
                return false;
            }
            if (i > 0 && right < nums[i - 1]) {
                nums[i + 1] = left;
            }
        }
    }
    return true;
}
