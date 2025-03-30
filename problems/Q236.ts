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
/**
 * 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。
 * 百度百科中最近公共祖先的定义为：
 * “对于有根树 T 的两个节点 p、q， * 最近公共祖先表示为一个节点 x，
 * 满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”
 * @param root
 * @param p
 * @param q
 * @returns
 */
function lowestCommonAncestor(
    root: TreeNode | null,
    p: TreeNode | null,
    q: TreeNode | null,
): TreeNode | null {
    let answer: TreeNode | null = null;
    const dfs = (root, p, q) => {
        if (root === null) return false;
        const lson = dfs(root.left, p, q);
        const rson = dfs(root.right, p, q);
        // 1、一个在左一个在右的最小子树 2、当前节点为p或q并且另一个节点在子树里
        if (
            (lson && rson) ||
            ((root.val === p.val || root.val === q.val) && (lson || rson))
        ) {
            answer = root;
        }
        return lson || rson || root.val === p.val || root.val === q.val; //找到某个节点返回ture
    };
    dfs(root, p, q);
    return answer;
}
