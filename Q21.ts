class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const prehead = new ListNode(-1);

    let prev = prehead;

    while (list1 != null && list2 != null) {
        if (list1.val <= list2.val) {
            prev.next = list1;
            list1 = list1.next
        } else {
            prev.next = list2;
            list2 = list2.next;
        }
        prev = prev.next;
    }

    prev.next = list1 === null ? list2 : list1;

    return prehead.next;
};