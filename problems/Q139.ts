/**
 * 给你一个字符串 s 和一个字符串列表 wordDict 作为字典。
 * 如果可以利用字典中出现的一个或多个单词拼接出 s 则返回 true。
 * 注意：不要求字典中出现的单词全部都使用，并且字典中的单词可以重复使用。
 * @param s
 * @param wordDict
 * @returns
 */
function wordBreak(s: string, wordDict: string[]): boolean {
    const len: number = s.length;
    const wordDictSet: Set<string> = new Set(wordDict);
    const dp: Array<boolean> = new Array(len + 1).fill(false);

    dp[0] = true;
    for (let i = 1; i <= len; i++) {
        // dp里存的第0-n个字母在不在里面
        // 第一个循环判断第一个字母在不在里面
        // 第二个循环判断前两个不行的话判断第1-2个
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordDictSet.has(s.substring(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[len];
}
