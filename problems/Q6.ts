/**
 * 将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。
比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：
P   A   H   N
A P L S I I G
Y   I   R
之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。

请你实现这个将字符串进行指定行数变换的函数：

string convert(string s, int numRows);
 * @param s 
 * @param numRows 
 */

function convert(s: string, numRows: number): string {
    if (numRows === 1 || numRows >= s.length) {
        // 一行或者超出行数
        return s;
    }
    const t = numRows * 2 - 2;
    const ans = [];
    for (let i = 0; i < numRows; i++) {
        // 枚举矩阵的行
        for (let j = 0; j < s.length - i; j += t) {
            // 枚举每个周期的起始下标
            ans.push(s[j + i]); // 当前周期的第一个字符
            if (0 < i && i < numRows - 1 && j + t - i < s.length) {
                ans.push(s[j + t - i]); // 当前周期的第二个字符
            }
        }
    }
    return ans.join("");
}
