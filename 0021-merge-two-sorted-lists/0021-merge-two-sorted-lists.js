   let curr = null;
let head = null;

var mergeTwoLists = function (list1, list2) {
  // base case to stop recursion at this stage
  if (!list1 && !list2) {
    let finalHead = head;
    head = null;
    curr = null;
    return finalHead;
  }

  // these will contain the next element of lists & will be passed in fn call
  let next1;
  let next2;

  // cases when one list ends before another
  if (!list1 && list2) {
    if (!head) {
      head = curr = list2;
    } else {
      curr.next = list2;
    }
    next2 = null;
  } else if (list1 && !list2) {
    if (!head) {
      head = curr = list1;
    } else {
      curr.next = list1;
    }
    next1 = null;
  }
  // normal use case where we compare values of curr ele of two lists
  else {
    if (list1.val <= list2.val) {
      if (!head) {
        head = curr = new ListNode(list1.val, null);
      } else {
        curr.next = new ListNode(list1.val, null);
        curr = curr.next;
      }
      next1 = list1.next;
      next2 = list2;
    } else {
      if (!head) {
        head = curr = new ListNode(list2.val, null);
      } else {
        curr.next = new ListNode(list2.val, null);
        curr = curr.next;
      }
      next2 = list2.next;
      next1 = list1;
    }
  }

  return mergeTwoLists(next1, next2);
};

