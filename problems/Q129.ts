/**
 * 给你一个二叉树的根节点 root ，树中每个节点都存放有一个 0 到 9 之间的数字。
每条从根节点到叶节点的路径都代表一个数字：

例如，从根节点到叶节点的路径 1 -> 2 -> 3 表示数字 123 。
计算从根节点到叶节点生成的 所有数字之和 。

叶节点 是指没有子节点的节点。
 */

class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

const dfs = (root: TreeNode | null, prevSum: number) => {
    if (root === null) {
        return 0;
    }
    const sum = prevSum * 10 + root.val;
    if (root.left == null && root.right == null) return sum;
    return dfs(root.left, sum) + dfs(root.right, sum);
};

function sumNumbers(root: TreeNode | null): number {
    return dfs(root, 0);
}
