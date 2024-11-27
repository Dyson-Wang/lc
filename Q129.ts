class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

const dfs = (root: TreeNode | null, prevSum: number) => {
    if (root === null) {
        return 0;
    }
    const sum = prevSum * 10 + root.val;
    if (root.left == null && root.right == null) return sum;
    return dfs(root.left, sum) + dfs(root.right, sum);
}

function sumNumbers(root: TreeNode | null): number {
    return dfs(root, 0);
};