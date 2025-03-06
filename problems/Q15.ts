function threeSum(nums: number[]): number[][] {
    let len: number = nums.length;
    nums.sort((a, b)=>a-b);
    let target: number, third: number;
    let arr: Array<Array<number>> = [];
    for (let first: number = 0; first < len; first++) {
        if (first > 0 && nums[first] == nums[first - 1]) continue;//与上一个不同
        third = len - 1;//从尾部开始
        target = -nums[first];//目标和

        for (let second = first + 1; second < len; second++) {
            if (second > first + 1 && nums[second] == nums[second - 1]) continue;
            while (second < third && nums[second] + nums[third] > target) third--;
            if (second == third) break;

            if (nums[second] + nums[third] == target) {
                arr.push([nums[first], nums[second], nums[third]]);
            }
        }
    }
    return arr;
};