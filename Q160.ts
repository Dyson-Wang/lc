
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    if (headA == null && headB == null) return null;
    let pa: ListNode | null = headA, pb: ListNode | null = headB;
    for (; pa != pb;) {
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
};