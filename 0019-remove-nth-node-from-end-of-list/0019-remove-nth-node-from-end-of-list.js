/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val);
 *     this.next = (next===undefined ? null : next);
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0, head);
    let first = dummy;
    let second = dummy;
    for (let i = 0; i <= n; i++) {
        first = first.next;
    }
    while (first) {
        first = first.next;
        second = second.next;
    }
    second.next = second.next.next;
    return dummy.next;
};
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
const result = removeNthFromEnd(head, 2);
let current = result;
while (current) {
    console.log(current.val);
    current = current.next;
}