function twoSum(nums: number[], target: number): number[] {
    let hashTable: Map<number, number> = new Map();

    for (let i = 0; i < nums.length; i++) {
        let deserved = target - nums[i];
        if (hashTable.has(deserved)) {
            return [hashTable.get(deserved), i];
        }
        hashTable.set(nums[i], i);
    }
    
    return [-1, -1];
}