/**
 * 给定一个三角形 triangle ，找出自顶向下的最小路径和。
 * 每一步只能移动到下一行中相邻的结点上。
 * 相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。
 * 也就是说，如果正位于当前行的下标 i ，那么下一步可以移动到下一行的下标 i 或 i + 1 。
 * @param triangle
 * @returns
 */
function minimumTotal(triangle: number[][]): number {
    let len: number = triangle.length,
        floor: Array<number> = new Array(len);
    floor[0] = triangle[0][0];

    for (let i: number = 1; i < len; i++) {
        floor[i] = floor[i - 1] + triangle[i][i];
        for (let j: number = i - 1; j > 0; j--) {
            floor[j] = Math.min(floor[j - 1], floor[j]) + triangle[i][j];
        }
        floor[0] += triangle[i][0];
    }
    return Math.min.apply(Math, floor);
}
