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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    let answer: TreeNode | null = null;
    const dfs = (root, p, q) => {
        if (root === null) return false;
        const lson = dfs(root.left, p, q);
        const rson = dfs(root.right, p, q);
        // 1、一个在左一个在右的最小子树 2、当前节点为p或q并且另一个节点在子树里
        if ((lson && rson) || ((root.val === p.val || root.val === q.val) && (lson || rson))) {
            answer = root;
        }
        return lson || rson || (root.val === p.val || root.val === q.val);//找到某个节点返回ture
    }
    dfs(root, p, q);
    return answer;
};