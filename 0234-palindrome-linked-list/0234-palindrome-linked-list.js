var isPalindrome = function(head) {
    let values = []
    while (head !== null) {
        values.push(head.val)
        head = head.next
    }
    for (let i = 0; i < values.length >> 1; i++) {
        if (values[i] !== values[values.length - i - 1]) return false
    }
    return true
};