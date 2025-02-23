function lengthOfLongestSubstring(s: string): number {
    const set = new Set();
    const len = s.length;

    let rk = -1, ans = 0;

    for (let i = 0; i < len; i++) {
        if (i != 0) set.delete(s.charAt(i - 1));
        while (rk + 1 < len && !set.has(s.charAt(rk + 1))) {
            set.add(s.charAt(rk + 1));
            rk++;
        }
        ans = Math.max(ans, rk - i + 1)
    }
    return ans;
};