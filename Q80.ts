function removeDuplicates(nums: number[]): number {
    let n: number = nums.length;
    if (n <= 2) return n;
    let slowP: number = 2;
    let fastP: number = 2;
    for (; fastP < n; fastP++) {
        if (nums[slowP - 2] != nums[fastP]) {
            nums[slowP] = nums[fastP];
            slowP++;
        }
    }

    return slowP;
};