/**
 *请你判断一个 9 x 9 的数独是否有效。只需要 根据以下规则 ，验证已经填入的数字是否有效即可。

数字 1-9 在每一行只能出现一次。
数字 1-9 在每一列只能出现一次。
数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。（请参考示例图）
 
注意：
一个有效的数独（部分已被填充）不一定是可解的。
只需要根据以上规则，验证已经填入的数字是否有效即可。
空白格用 '.' 表示。
 * @param board
 * @returns
 */

function isValidSudoku(board: string[][]): boolean {
    const rows = new Array(9).fill(0).map(() => new Array(9).fill(0));
    const columns = new Array(9).fill(0).map(() => new Array(9).fill(0));
    const subboxes = new Array(3)
        .fill(0)
        .map(() => new Array(3).fill(0).map(() => new Array(9).fill(0)));

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const c = board[i][j];
            if (c !== ".") {
                const index = c.charCodeAt(0) - "0".charCodeAt(0) - 1;
                rows[i][index]++;
                columns[j][index]++;
                subboxes[Math.floor(i / 3)][Math.floor(j / 3)][index]++;
                if (
                    rows[i][index] > 1 ||
                    columns[j][index] > 1 ||
                    subboxes[Math.floor(i / 3)][Math.floor(j / 3)][index] > 1
                ) {
                    return false;
                }
            }
        }
    }
    return true;
}
