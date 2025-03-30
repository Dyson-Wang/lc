/**
 * 给定一个大小为 n 的数组 nums ，返回其中的多数元素。
 * 多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。

你可以假设数组是非空的，并且给定的数组总是存在多数元素。

示例 1：
输入：nums = [3,2,3]
输出：3
示例 2：

输入：nums = [2,2,1,1,1,2,2]
输出：2
 
提示：
n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
 
进阶：尝试设计时间复杂度为 O(n)、空间复杂度为 O(1) 的算法解决此问题。
 */

// hash
function majorityElement(nums: number[]): number {
    let half = nums.length / 2;
    let map = new Map();
    let tmp = 0;
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if (map.has(element)) {
            tmp = map.get(element);
            map.set(element, ++tmp);
        } else {
            map.set(element, 1);
        }

        if (map.get(element) > half) return element;
    }
    return 0;
}

// sort
function majorityElement(nums: number[]): number {
    nums.sort((a, b) => a - b);
    return nums[Math.floor(nums.length / 2)];
}

// Boyer-Moore
function majorityElement(nums: number[]): number {
    let count = 1;
    let candidate = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (count == 0) {
            candidate = nums[i];
        }
        if (nums[i] == candidate) {
            count++;
        } else {
            count--;
        }
    }
    return candidate;
}
