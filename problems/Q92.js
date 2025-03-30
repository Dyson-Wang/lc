/**
 * 给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。
 * 请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。
 * @param {*} val
 * @param {*} next
 */

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    const dummy_node = new ListNode(-1, head);
    let pre, cur, next;
    pre = dummy_node;

    for (let i = 0; i < left - 1; i++) pre = pre.next;

    cur = pre.next;

    for (let i = 0; i < right - left; i++) {
        next = cur.next;
        cur.next = next.next;
        next.next = pre.next;
        pre.next = next;
    }
    return dummy_node.next;
};
