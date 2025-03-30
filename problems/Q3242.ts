/**
 * 给你一个 n x n 的二维数组 grid，它包含范围 [0, n2 - 1] 内的不重复元素。
 * 实现 neighborSum 类：
 * neighborSum(int [][]grid) 初始化对象。
 * int adjacentSum(int value) 返回在 grid 中与 value 相邻的元素之和，
 * 相邻指的是与 value 在上、左、右或下的元素。
 * int diagonalSum(int value) 返回在 grid 中与 value 对角线相邻的元素之和，
 * 对角线相邻指的是与 value 在左上、右上、左下或右下的元素。
 */
class NeighborSum {
    private grid: number[][];
    private pos: { [key: number]: [number, number] };
    private dirs: [number, number][][];
    constructor(grid: number[][]) {
        this.grid = grid;
        this.pos = {};
        this.dirs = [
            [
                [1, 0],
                [-1, 0],
                [0, 1],
                [0, -1],
            ],
            [
                [1, 1],
                [1, -1],
                [-1, 1],
                [-1, -1],
            ],
        ];
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                this.pos[grid[i][j]] = [i, j];
            }
        }
    }
    adjacentSum(value: number): number {
        return this.getSum(value, 0);
    }
    diagonalSum(value: number): number {
        return this.getSum(value, 1);
    }
    getSum(value: number, index: number): number {
        const [x, y] = this.pos[value];
        let sum = 0;
        for (const [dirsX, dirsY] of this.dirs[index]) {
            const dx = x + dirsX;
            const dy = y + dirsY;
            if (
                dx >= 0 &&
                dy >= 0 &&
                dx < this.grid.length &&
                dy < this.grid[0].length
            ) {
                sum += this.grid[dx][dy];
            }
        }

        return sum;
    }
}
