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
};