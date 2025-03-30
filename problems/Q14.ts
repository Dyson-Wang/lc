/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 如果不存在公共前缀，返回空字符串 ""。
 * @param strs
 */

function longestCommonPrefix(strs: string[]): string {
    if (strs == null || strs.length == 0) return "";

    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        prefix = lcp(prefix, strs[i]);
        if (prefix.length == 0) break;
    }

    return prefix;
}

function lcp(str1: string, str2: string): string {
    let length = Math.min(str1.length, str2.length);
    let index = 0;

    while (index < length && str1[index] == str2[index]) {
        index++;
    }

    return str1.substring(0, index);
}
