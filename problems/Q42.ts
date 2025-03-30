/**
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
输出：6
解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 
示例 2：
输入：height = [4,2,0,3,2,5]
输出：9
 
提示：
n == height.length
1 <= n <= 2 * 104
0 <= height[i] <= 105
 */

// dp
function trap(height: number[]): number {
    const len = height.length;
    if (len == 0) return 0;

    const leftMax = new Array(len).fill(0);
    leftMax[0] = height[0];
    for (let i = 0; i < len; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i]);
    }

    const rightMax = new Array(len).fill(0);
    rightMax[len - 1] = height[len - 1];
    for (let i = len - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i]);
    }

    let answer = 0;
    for (let i = 0; i < len; i++) {
        answer += Math.min(leftMax[i], rightMax[i]) - height[i];
    }
    return answer;
}

// stack
function trap(height: number[]): number {
    let answer = 0;
    let stack: Array<number> = [];

    for (let i = 0; i < height.length; i++) {
        // 判断stack顶元素是否小于当前元素，stack里只保存递减元素
        while (stack.length && height[i] > height[stack[stack.length - 1]]) {
            const top = stack.pop();
            if (!stack.length) break;
            const left = stack[stack.length - 1];
            const currWidth = i - left - 1;
            const currHeight = Math.min(height[left], height[i]) - height[top];
            answer += currHeight * currWidth;
        }
        stack.push(i);
    }
}

// dp双指针
function trap(height: number[]): number {
    const len = height.length;
    if (len == 0) return 0;

    let left = 0,
        right = len - 1;
    let leftMax = height[left],
        rightMax = height[right];
    let answer = 0;

    while (left < right) {
        leftMax = Math.max(leftMax, height[left]);
        rightMax = Math.max(rightMax, height[right]);
        if (height[left] < height[right]) {
            // 区间左右壁为leftmax height[right]
            answer += leftMax - height[left];
            left++;
        } else {
            answer += rightMax - height[right];
            right--;
        }
    }

    return answer;
}
