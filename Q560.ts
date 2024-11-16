function subarraySum(nums: number[], k: number): number {
    const mp: Map<number, number> = new Map();
    mp.set(0, 1);
    let count: number = 0, pre: number = 0;
    for (const x of nums) {
        pre += x;
        if (mp.has(pre - k)) {
            count += mp.get(pre - k);
        }
        if (mp.has(pre)) {
            mp.set(pre, mp.get(pre) + 1);
        } else {
            mp.set(pre, 1);
        }
    }
    return count;
};