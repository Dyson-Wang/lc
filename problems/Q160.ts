class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

/**
 * 给你两个单链表的头节点 headA 和 headB ，
 * 请你找出并返回两个单链表相交的起始节点。
 * 如果两个链表不存在相交节点，返回 null 。
 * @param headA
 * @param headB
 * @returns
 */
function getIntersectionNode(
    headA: ListNode | null,
    headB: ListNode | null,
): ListNode | null {
    if (headA == null && headB == null) return null;
    let pa: ListNode | null = headA,
        pb: ListNode | null = headB;
    for (; pa != pb; ) {
        if (pa == null) {
            pa = headB;
        } else {
            pa = pa.next;
        }
        if (pb == null) {
            pb = headA;
        } else {
            pb = pb.next;
        }
    }
    return pa;
}
