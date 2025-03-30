/**
 * 给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中 最后一个 单词的长度.
 * 单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。
 */

function lengthOfLastWord(s: string): number {
    let index = s.length - 1;
    while (s[index] === " ") {
        index--;
    }

    let wordLength = 0;
    while (index >= 0 && s[index] !== " ") {
        wordLength++;
        index--;
    }

    return wordLength;
}
