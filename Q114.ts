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


/**
 Do not return anything, modify root in-place instead.
 */
function flatten(root: TreeNode | null): void {
    let cur = root;
    let next, pre;
    while(cur!==null){
        if(cur.left!==null){
            next = cur.left;
            pre = next;
            while(pre.right!==null) pre = pre.right;
            pre.right = cur.right;
            cur.left = null;
            cur.right = next;
        }
        cur = cur.right;
    }
};