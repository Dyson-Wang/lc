function jump(nums: number[]): number {
    let len: number = nums.length,
        end: number = 0,
        maxPosition: number = 0,
        step: number = 0;

    for (let i: number = 0; i < len - 1; i++) {
        maxPosition = Math.max(maxPosition, i+nums[i]);
        if(i==end){
            end = maxPosition;
            step++;
        }
    }
    return step;
};
