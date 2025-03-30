/**
 * 给你正整数 low ，high 和 k 。
 * 如果一个数满足以下两个条件，那么它是 美丽的 ：
 * 偶数数位的数目与奇数数位的数目相同。
 * 这个整数可以被 k 整除。
 * 请你返回范围 [low, high] 中美丽整数的数目。
 * @param low
 * @param high
 * @param k
 * @returns
 */
function numberOfBeautifulIntegers(
    low: number,
    high: number,
    k: number,
): number {
    return calc(high, k) - calc(low - 1, k);
}

function calc(high: number, k: number): number {
    const s: string = high.toString();
    const n: number = s.length;
    const memo: number[][][] = new Array(n)
        .fill(0)
        .map(() =>
            new Array(k).fill(0).map(() => new Array(n * 2 + 1).fill(-1)),
        ); //n*k*(2n+1) 初始化为-1，表示未计算过

    return dfs(0, 0, n, true, false, k, s, memo);
}

function dfs(
    i: number,
    val: number,
    diff: number,
    isLimit: boolean,
    isNum: boolean,
    k: number,
    s: string,
    memo: number[][][],
): number {
    if (i === s.length) {
        //0执行
        return isNum && val === 0 && diff === s.length ? 1 : 0; // 找到了一个合法数字
    }
    if (!isLimit && isNum && memo[i][val][diff] !== -1) {
        //不执行
        return memo[i][val][diff];
    }

    let res: number = 0;
    if (!isNum) {
        // 可以跳过当前数位
        res = dfs(i + 1, val, diff, false, false, k, s, memo);
    }

    const up: number = isLimit ? parseInt(s[i]) : 9; // 如果前面填的数字都和 high 的一样，那么这一位至多填数字 s[i]（否则就超过 high 啦）

    for (let d: number = isNum ? 0 : 1; d <= up; d++) {
        // 枚举要填入的数字 d
        res += dfs(
            i + 1,
            (val * 10 + d) % k,
            diff + (d % 2) * 2 - 1,
            isLimit && d === up,
            true,
            k,
            s,
            memo,
        );
    }
    if (!isLimit && isNum) {
        memo[i][val][diff] = res; // 记忆化搜索
    }
    return res;
}

// function numberOfBeautifulIntegers(low: number, high: number, k: number): number {
//     let fufilledNumber: number = low;
//     let count: number = 0;

//     fufilledNumber = findNearly(fufilledNumber, k);

//     if (fufilledNumber > high) return 0;

//     for (; fufilledNumber <= high; fufilledNumber += k) {
//         let str = fufilledNumber.toString();
//         if (str.length % 2 != 0) {
//             fufilledNumber = findNearly(fufilledNumber, k);
//         } else {
//             jcs(str) ? count++ : null;
//         }
//     }
//     return count;
// };

// function findNearly(num: number, k: number): number {
//     let nearly = num;
//     let nearlyStr = nearly.toString();

//     if (nearlyStr.length % 2 != 0) {
//         let nly: string[] = ['1'];

//         for (let i: number = 0; i < nearlyStr.length; i++) {
//             nly.push('0');
//         }
//         nearly = Number(nly.join(''));
//     }

//     for (let i: number = 0; i < k; i++) {
//         if (nearly % k == 0) {
//             break;
//         } else {
//             nearly++;
//         }
//     }
//     return nearly;
// }

// function jcs(num: string): boolean {
//     let p: number = 0, q: number = 0;
//     let pArray: string[] = ['1', '3', '5', '7', '9'];

//     for (let i = 0; i < num.length; i++) {
//         if (pArray.includes(num[i])) {
//             p++;
//         } else {
//             q++;
//         }
//     }

//     if (p == q) {
//         return true;
//     } else {
//         return false;
//     }
// }
