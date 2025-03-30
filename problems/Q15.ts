/**
 * 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]]
 * 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。
 * 请你返回所有和为 0 且不重复的三元组。
 * 注意：答案中不可以包含重复的三元组。
 * @param nums
 * @returns
 */

function threeSum(nums: number[]): number[][] {
    let len: number = nums.length;
    nums.sort((a, b) => a - b);
    let target: number, third: number;
    let arr: Array<Array<number>> = [];
    for (let first: number = 0; first < len; first++) {
        if (first > 0 && nums[first] == nums[first - 1]) continue; //与上一个不同
        third = len - 1; //从尾部开始
        target = -nums[first]; //目标和

        for (let second = first + 1; second < len; second++) {
            if (second > first + 1 && nums[second] == nums[second - 1])
                continue;
            while (second < third && nums[second] + nums[third] > target)
                third--;
            if (second == third) break;

            if (nums[second] + nums[third] == target) {
                arr.push([nums[first], nums[second], nums[third]]);
            }
        }
    }
    return arr;
}
