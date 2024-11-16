class NeighborSum {
    private grid: number[][];
    private pos: { [key: number]: [number, number] };
    private dirs: [number, number][][];
    constructor(grid: number[][]) {
        this.grid = grid;
        this.pos = {};
        this.dirs = [
            [[1, 0], [-1, 0], [0, 1], [0, -1]],
            [[1, 1], [1, -1], [-1, 1], [-1, -1]]
        ]
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
            if (dx >= 0 && dy >= 0 && dx < this.grid.length && dy < this.grid[0].length) {
                sum += this.grid[dx][dy];
            }
        }

        return sum;
    }
}