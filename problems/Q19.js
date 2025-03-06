function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var removeNthFromEnd = function (head, n) {
    let dummy = new ListNode(0, head);
    let first = head;
    let second = dummy;

    for (let i = 0; i < n; i++) first = first.next;
    while(first!=null){
        first = first.next;
        second = second.next;
    }
    second.next = second.next.next;
    return dummy.next;
};