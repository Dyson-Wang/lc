/**
 * 给定一个不含重复数字的数组 nums ，
 * 返回其 所有可能的全排列 。
 * 你可以 按任意顺序 返回答案。
 * 示例 1：
输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

示例 2：
输入：nums = [0,1]
输出：[[0,1],[1,0]]

示例 3：
输入：nums = [1]
输出：[[1]]
 * @param nums
 * @returns
 */

function permute(nums: number[]): number[][] {
    let res: number[][] = [];
    let output = Array.from(nums);
    let len = nums.length;

    backtrack(len, output, res, 0);
    return res;
}

function backtrack(
    len: number,
    output: number[],
    res: number[][],
    first: number,
) {
    if (first === len) {
        res.push(Array.from(output));
        return;
    }
    for (let i = first; i < len; i++) {
        [output[first], output[i]] = [output[i], output[first]];
        backtrack(len, output, res, first + 1)[(output[first], output[i])] = [
            output[i],
            output[first],
        ];
    }
}
