function minPathSum(grid: number[][]): number {
    const w = grid[0].length;
    const h = grid.length;

    if (w === 0 || h === 0) return 0;

    for (let i = 1; i < w; i++) {
        grid[0][i] += grid[0][i - 1];
    }
    for (let i = 1; i < h; i++) {
        grid[i][0] += grid[i - 1][0];
    }
    for (let i = 1; i < h; i++) {
        for (let j = 1; j < w; j++) {
            grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
        }
    }
    return grid[h - 1][w - 1];
}