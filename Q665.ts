function checkPossibility(nums: number[]): boolean {
    const len = nums.length;
    let count = 0;
    let left:number, right:number;
    for (let i = 0; i < len - 1; i++) {
        left = nums[i], right = nums[i+1];
        if(left>right){
            count++;
            if(count>1){
                return false;
            }
            if(i>0&&right<nums[i-1]){
                nums[i+1]=left;
            }
        }
    }
    return true;
};