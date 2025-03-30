/**
 * 在一条环路上有 n 个加油站，其中第 i 个加油站有汽油 gas[i] 升。
你有一辆油箱容量无限的的汽车，从第 i 个加油站开往第 i+1 个加油站需要消耗汽油 cost[i] 升。
你从其中的一个加油站出发，开始时油箱为空。
给定两个整数数组 gas 和 cost ，如果你可以按顺序绕环路行驶一周，
则返回出发时加油站的编号，否则返回 -1 。如果存在解，则 保证 它是 唯一 的。
 */

function canCompleteCircuit(gas: number[], cost: number[]): number {
    let i = 0;
    while (i < gas.length) {
        let sumOfGas = 0,
            sumOfCost = 0;
        let count = 0;
        while (count < gas.length) {
            const next = (i + count) % gas.length; // 环
            sumOfCost += cost[next];
            sumOfGas += gas[next];
            if (sumOfCost > sumOfGas) break;
            count++;
        }
        if (count == gas.length) {
            return i;
        } else {
            // 开不到count+1,直接到count+1的加油站
            i = i + count + 1;
        }
    }
    return -1;
}
