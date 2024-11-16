function singleNonDuplicate(nums: number[]): number {
    let low: number = 0, high: number = nums.length - 1;
    for (let mid: number = high / 2; low < high; mid = low + (high - low) / 2) {
        if (mid % 2 != 0) {// 奇数
            if (nums[mid] == nums[mid - 1]) {// 单的在右半边
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        } else { // 偶数
            if (nums[mid] == nums[mid + 1]) {// 单的在右半边
                low = mid;
            } else {
                high = mid;
            }
        }
    }
    return nums[low];
};

// 由于数组是有序的，因此数组中相同的元素一定相邻。
// 对于下标 x 左边的下标 y，如果 nums[y]=nums[y+1]，则 y 一定是偶数；
// 对于下标 x 右边的下标 z，如果 nums[z]=nums[z+1]，则 z 一定是奇数。
// 由于下标 x 是相同元素的开始下标的奇偶性的分界，因此可以使用二分查找的方法寻找下标 x。