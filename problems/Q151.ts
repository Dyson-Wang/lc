function reverseWords(s: string): string {
    // trim删除前后空格/\s+/匹配若干个空格
    return s.trim().split(/\s+/).reverse().join(' ');
};