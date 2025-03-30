/**
 * 展开后的单链表应该同样使用 TreeNode ，
 * 其中 right 子指针指向链表中下一个结点，
 * 而左子指针始终为 null 。
 * 展开后的单链表应该与二叉树 先序遍历 顺序相同。
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

/**
 Do not return anything, modify root in-place instead.
 */
function flatten(root: TreeNode | null): void {
    let cur = root;
    let next, pre;
    while (cur !== null) {
        if (cur.left !== null) {
            next = cur.left;
            pre = next;
            while (pre.right !== null) pre = pre.right;
            pre.right = cur.right;
            cur.left = null;
            cur.right = next;
        }
        cur = cur.right;
    }
}
