function _Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
};


/**
 * @param {_Node} head
 * @return {_Node}
 */

var copyRandomList = function (head) {
    if (head === null) return null;
    for (let node = head; node !== null; node = node.next.next) {
        const nodeNew = new _Node(node.val, node.next, node.random)
        node.next = nodeNew;
    }
    for (let node = head; node != null; node = node.next.next) {
        const nodeNew = node.next;
        nodeNew.random = node.random !== null ? node.random.next : null;
    }
    const headNew = head.next;
    for (let node = head; node !== null; node = node.next) {
        const nodeNew = node.next;
        node.next = node.next.next;
        nodeNew.next = nodeNew.next !== null ? nodeNew.next.next : null;
    }
    return headNew;
};
